import express from 'express'; // 模組
import moment from 'moment'; // 日期
import connection from '../db.mjs'; // 連結connection
import multer from 'multer'; // 上傳檔案配置設定

// eslint-disable-next-line new-cap
const router = express.Router(); // 導入前後台
const upload = multer();

router.get('/', (req, res) => {
  const time = moment().format('YYYY-MM-DD');
  // Res.send("導向有今天日期的網址");
  res.redirect('/expense/d/' + time);
});

// CRUD R 搭配getSort, getDateData函式
router.get('/d/:date', async (req, res) => {
  // Res.send("讀取指定日期的所有消費");
  const { date } = req.params; // 當客戶端訪問了 /expense/d/2023-12-17 這個 URL 時，req.params.date 的值將會是 2023-12-17
  const sort = await getSort()
    .then(data => data)
    .catch(() => undefined);
  const dateData = await getDateData(date)
    .then(data => data)
    .catch(() => { });
  if (sort && dateData) {
    res.render('index', { date, sort, dateData }); // Use render把資料傳到index畫面
  } else {
    res.send('error happened');
  }
});

// CRUD C
router.post('/', (req, res) => {
  const { title } = req.body;
  const sort = parseInt(req.body.sort, 10);
  const money = parseInt(req.body.money, 10);
  const { date } = req.body;
  // 新增品項進資料庫
  connection.execute(
    'INSERT INTO `expense` (`id`, `title`, `sort`, `money`, `date`) VALUES (NULL, ?, ?, ?, ?);',
    [title, sort, money, date],
    _error => {
      res.redirect('/expense/d/' + date); // 導回頁面
    },
  );
  // Res.send("新增指定日期的消費");
});

// CRUD U 需要搭配updateData函式
router.put('/', upload.none(), async (req, res) => {
  // Upload.none只處理表單數據不上傳
  console.log(req.body);
  // Res.send("修改指定日期的消費");
  const aaaa = await updateData(req.body)
    .then(() => 1)
    .catch(() => 0);
  res.json({ aaaa });
});

router.delete('/', upload.none(), async (req, res) => {
  // Res.send("刪除指定日期的消費");
  const aaaa = await deleteData()
    .then(() => 1)
    .catch(() => 0);
  res.json({ aaaa });
});

// 讀取類別資料庫
function getSort() {
  return new Promise((resolve, reject) => {
    connection.execute('SELECT * FROM `sort`', (error, results) => {
      // 取得SQL的分類類別
      if (error) {
        reject(error);
        return false;
      }

      const sort = results.map(item =>
        // R裡面定義的sort陣列用map建立新陣列與參數item
        ({ id: item.id, name: item.name }),
      );
      resolve(sort);
    });
  });
}

// 讀取花費expense的資料庫
function getDateData(date) {
  return new Promise((resolve, reject) => {
    connection.execute(
      'SELECT * FROM `expense` WHERE `date` = ?',
      [date],
      (error, results) => {
        if (error) {
          reject(error);
          return false;
        }

        resolve(results);
      },
    );
  });
}

function updateData(data) {
  const { title } = data;
  const sort = parseInt(data.sort, 10);
  const money = parseInt(data.money, 10);
  const id = parseInt(data.id, 10);
  const { date } = data;
  return new Promise((resolve, reject) => {
    connection.execute(
      // SQL更新語句
      'UPDATE `expense` SET `title` = ?, `sort` = ?, `money` = ?, `date` = ? WHERE `expense`.`id` = ?;',
      // 更新參數
      [title, sort, money, date, id],
      // 回調函式
      error => {
        if (error) {
          reject(error);
          return false;
        }

        resolve({ result: 'success' });
      },
    );
  });
}

function deleteData(data) {
  const id = parseInt(data.id, 10); // 刪除只需要id,10進位
  return new Promise((resolve, reject) => {
    connection.execute(
      'DELETE FROM expense WHERE `expense`.`id` = ?',
      [id],
      error => {
        if (error) {
          reject();
          return false;
        }

        resolve();
      },
    );
  });
}

export default router;

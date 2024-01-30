import express from "express"; //模組
import moment from "moment"; //日期
import connection from "../db.mjs"; //連結connection
import multer from "multer"; //上傳檔案配置設定

const router = express.Router(); //導入前後台
const upload = multer();

router.get("/", function (req, res, next) {
  let time = moment().format("YYYY-MM-DD");
  // res.send("導向有今天日期的網址");
  res.redirect("/expense/d/" + time);
});

//CRUD R 搭配getSort, getDateData函式
router.get("/d/:date", async (req, res, next) => {
  // res.send("讀取指定日期的所有消費");
  let date = req.params.date; //當客戶端訪問了 /expense/d/2023-12-17 這個 URL 時，req.params.date 的值將會是 2023-12-17
  let sort = await getSort()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return undefined;
    });
  let dateData = await getDateData(date)
    .then((data) => {
      return data;
    })
    .catch((error) => {});
  if (sort && dateData) {
    res.render("index", { date, sort, dateData }); //use render把資料傳到index畫面
  } else {
    res.send("error happened");
  }
});

//CRUD C
router.post("/", (req, res, next) => {
  let title = req.body.title;
  let sort = parseInt(req.body.sort, 10);
  let money = parseInt(req.body.money, 10);
  let date = req.body.date;
  //新增品項進資料庫
  connection.execute(
    "INSERT INTO `expense` (`id`, `title`, `sort`, `money`, `date`) VALUES (NULL, ?, ?, ?, ?);",
    [title, sort, money, date],
    (error, results) => {
      res.redirect("/expense/d/" + date); //導回頁面
    }
  );
  // res.send("新增指定日期的消費");
});

//CRUD U 需要搭配updateData函式
router.put("/", upload.none(), async (req, res, next) => {
  //upload.none只處理表單數據不上傳
  console.log(req.body);
  // res.send("修改指定日期的消費");
  let aaaa = await updateData(req.body)
    .then(() => {
      return 1;
    })
    .catch(() => {
      return 0;
    });
  res.json({ aaaa });
});

router.delete("/", upload.none(), async (req, res, next) => {
  // res.send("刪除指定日期的消費");
  let aaaa = await deleteData()
    .then(() => {
      return 1;
    })
    .catch(() => {
      return 0;
    });
  res.json({ aaaa });
});

//讀取類別資料庫
function getSort() {
  return new Promise((resolve, reject) => {
    connection.execute("SELECT * FROM `sort`", (error, results) => {
      //取得SQL的分類類別
      if (error) {
        reject(error);
        return false;
      }
      let sort = results.map((item) => {
        //R裡面定義的sort陣列用map建立新陣列與參數item
        return { id: item.id, name: item.name };
      });
      resolve(sort);
    });
  });
}

//讀取花費expense的資料庫
function getDateData(date) {
  return new Promise((resolve, reject) => {
    connection.execute(
      "SELECT * FROM `expense` WHERE `date` = ?",
      [date],
      (error, results) => {
        if (error) {
          reject(error);
          return false;
        }
        resolve(results);
      }
    );
  });
}

function updateData(data) {
  let title = data.title;
  let sort = parseInt(data.sort, 10);
  let money = parseInt(data.money, 10);
  let id = parseInt(data.id);
  let date = data.date;
  return new Promise((resolve, reject) => {
    connection.execute(
      //SQL更新語句
      "UPDATE `expense` SET `title` = ?, `sort` = ?, `money` = ?, `date` = ? WHERE `expense`.`id` = ?;",
      //更新參數
      [title, sort, money, date, id],
      //回調函式
      (error, results) => {
        if (error) {
          reject(error);
          return false;
        }
        resolve({ result: "success" });
      }
    );
  });
}

function deleteData(data) {
  let id = parseInt(data.id, 10); //刪除只需要id,10進位
  return new Promise((resolve, reject) => {
    connection.execute(
      "DELETE FROM expense WHERE `expense`.`id` = ?",
      [id],
      (error, results) => {
        if (error) {
          reject();
          return false;
        }
        resolve();
      }
    );
  });
}

export default router;

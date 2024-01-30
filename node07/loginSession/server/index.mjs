import express from 'express';
import cors from 'cors';
import multer from 'multer';
import session from 'express-session';
import connection from './db.mjs';
const upload = multer();

const whitelist = [
  'http://localhost:5500',
  'http://localhost:3000',
  'http://127.0.0.1:5500',
  undefined, // Origin才會給過
];
const corsOptions = {
  credentials: true,
  origin(origin, callback) {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('不允許傳遞資料'));
    }
  },
};

const users = {
  user1: {
    pwd: 'a12345',
    img: 'https://randomuser.me/api/portraits/women/81.jpg',
    name: 'Stella Arnold',
  },
  user2: {
    pwd: 'a12345',
    img: 'https://randomuser.me/api/portraits/women/71.jpg',
    name: 'Leta Anderson',
  },
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json()); // 處理json格式內容
app.use(express.urlencoded({ extended: true })); // 讀取複雜的物件與陣列格式並解析
app.use(session({
  secret: 'mySecretKey',
  resave: false,
  saveUninitialized: true,
  // 新用戶沒有使用到session物件時會發送並建立一組cookie內容
  cookie: {
    maxAge: 1200000,
  },
}));

app.get('/', (req, res) => {
  res.send('Main Page');
});

app.post('/', upload.none(), (req, res) => {
  // Upload放這裡是因為要解析req.body得出的表單
  // console.log(req.body.userID, userPWD);
  const { userID, userPWD } = req.body;
  // 使用了對象解構，從請求的 req.body 中取出 userID 和 userPWD 兩個字段的值。req.body 是表單提交時所攜帶的數據，通過 multer 中間件的解析，我們可以直接從 req.body 中獲取提交的表單數據
  if (users[userID] && users[userID].pwd === userPWD) {
    const { pwd, ...user } = users[userID];
    // 剩餘參數(把pwd取出，剩下的全部叫user)
    user.id = userID;
    req.session.user = user;
    // 登入之後寫到session裡面
    res.json({ message: 'Welcome', user });
  } else {
    res.json({ message: 'fail' });
  }
});

app.get('/checkLogin', (req, res) => {
  // 再次登入後檢查是否有這個session
  const { user } = req.session;
  // 把user取出來傳給client前端
  res.json({ message: 'welcome', user });
});

app.get('/logout', (req, res) => {
  // 因為不需要內容所以get，如果需要可以用Post
  delete req.session.user;
  res.json({ message: 'logout' });
});

app.listen(3000, () => {
  console.log('running at http://localhost:3000');
});

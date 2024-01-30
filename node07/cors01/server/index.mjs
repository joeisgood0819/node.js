import express from 'express';
import cors from 'cors';
import multer from 'multer';
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

const app = express();
app.use(cors(corsOptions));
app.use(express.json()); // 處理json格式內容
app.use(express.urlencoded({ extended: true })); // 讀取複雜的物件與陣列格式並解析

app.get('/', (req, res) => {
  res.send('Main Page');
});

app.post('/', upload.none(), (req, res) => {
  // Upload放這裡是因為要解析req.body得出的表單
  console.log(req.body);
  res.json({ message: 'Welcome' });
});

app.listen(3000, () => {
  console.log('running at http://localhost:3000');
});

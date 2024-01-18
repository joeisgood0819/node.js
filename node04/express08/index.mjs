import express from "express";

const app = express();

let checkCodeMiddleware = (req, res, next) => {
  // console.log(req.query.code){
  //這是字串 admin?code=464
  if (!req.query.code) {
    res.send("請輸入密碼");
  } else {
    if (req.query.code === "464") {
      next();
    } else {
      res.send("密碼錯誤");
    }
  }
};

app.get("/", (req, res) => {
  res.send("這是首頁");
});

app.get("/home", (req, res) => {
  res.send("前台首頁");
});

app.get("/admin", checkCodeMiddleware, (req, res) => {
  res.send("後台首頁");
});

app.get("/setting", checkCodeMiddleware, (req, res) => {
  res.send("設定頁");
});

app.all("*", (req, res) => {
  res.status(404);
  res.send("<h1> - Page not found - </h1>");
});

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.setHeader("content-type", "text/html; charset=utf-8");
  res.end("這是首頁"); //只輸入這個中文跑不出來
});

app.get("/home", (req, res) => {
  res.send("這是Home");
});

app.post("/login", (req, res) => {
  res.send("進入登入的流程");
});

app.all("/reg", (req, res) => {
  res.send("不管任何方法的reg");
});

app.all("*", (req, res) => {
  res.send("<h1>404 -找不到頁面</h1>");
});

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("This is home page!");
});

app.get("/request", (req, res) => {
  res.send("測試取得要求的訊息");
  // console.log(req.method);
  // console.log(req.url);
  // console.log(req.httpVersion);
  // console.log(req.get("host"));
  console.log(req.path);
  console.log(req.query);
  console.log(req.ip);
});

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});

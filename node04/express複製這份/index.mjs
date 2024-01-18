import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("這是首頁");
});

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("這是首頁");
});

app.get("/p/:id123", (req, res) => {
  let id = req.params.id123;
  //取得參數id123的value
  console.log(id);
  let contentText = "";
  if (id === "CvZP-PIguWG") {
    contentText =
      "《浅草で一番おすすめしたい抹茶クレープ(The most recommended matcha crepe in Asakusa)》";
  } else if (id === "CvRz0e3Awmi") {
    contentText =
      "《ぷるんぷるんすぎるマシュマロアイス(Too plump marshmallow ice cream in Japan)》";
  }
  res.send(contentText);
});

app.get("/users/:userID?", (req, res) => {
  let userID = req.params.userID;
  console.log(userID);
  res.send(`Hello, ${req.params.userID ? req.params.userID : "Guest"}`);
});

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});

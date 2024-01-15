import express from "express";
//舊方法
// import data1 from "./singers.json" assert { type: "json" };
// const { singers } = data1;
//新方法
import singers from "./singers.js";

const app = express();

app.get("/", (req, res) => {
  res.send("這是首頁");
});

app.get("/singer/:id.html", (req, res) => {
  let id = req.params.id;
  // console.log(id);
  let result = singers.find((singer) => {
    if (singer.id === parseInt(id)) {
      return true;
    }
  });
  console.log(result);
  if (!result) {
    res.statusCode = 404;
    res.send("<h1>404 - 找不到頁面</h1>");
    return false;
  }
  res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${result.singer_name}</title>
  </head>
  <body>
    <h1>${result.singer_name}</h1>
    <img src="${result.singer_img}" alt="" />
  </body>
</html>`);
});

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});

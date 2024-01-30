import express from "express";
import connection from "./db.mjs";

const app = express();

app.get("/", (req, res) => {
  res.send("Main Page");
});

app.get("/d/:id", (req, res) => {
  let id = req.params.id;
  connection.execute(
    "SELECT * FROM `sort` WHERE `id` = ?",
    [id],
    (err, results, fields) => {
      let sort = results.map((item) => {
        return { id: item.id, name: item.name };
      });
      res.json({ results: sort });
    }
  );
});

app.listen(3000, () => {
  console.log("running http://localhost:3000");
});

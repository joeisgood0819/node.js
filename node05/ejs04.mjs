import express from "express";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use("/", (req, res) => {
  res.send("這是主頁");
});

app.listen(3000, () => {
  console.log("server is running http://localhost:3000");
});

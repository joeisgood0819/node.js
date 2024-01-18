import express from "express";
import { fileURLToPath } from "url";
import { dirname, resolve, join } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.static(resolve(__dirname, "public"))); 
//抓靜態資源public html檔案

app.get("/", (req, res) => {
  res.send("這是首頁");
});

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});

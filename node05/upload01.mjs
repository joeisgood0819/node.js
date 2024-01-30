import express from "express";
import { dirname, resolve, extname } from "path";
import { fileURLToPath } from "url";
import { renameSync } from "fs"; //會卡但方便
const __dirname = dirname(fileURLToPath(import.meta.url));

import multer from "multer";
const upload = multer({ dest: resolve(__dirname, "public") });
//上傳的內容放在public

const app = express();
app.set("view engine", "ejs");
app.set("views", resolve(__dirname, "views"));
app.use(
  "/bootstrap",
  express.static(resolve(__dirname, "node_modules/bootstrap/dist"))
);

app.get("/", (req, res) => {
  res.send("這是主頁");
});

app.get("/form1", (req, res) => {
  res.render("form1.ejs");
});

app.get("/form2", (req, res) => {
  res.render("form2.ejs");
});

app.get("/form3", (req, res) => {
  res.render("form3.ejs");
});

app.post("/upload1", upload.single("myFile"), (req, res) => {
  //處理上傳邏輯
  let timestamp = Date.now();
  let newFileName = timestamp + extname(req.file.originalname);
  renameSync(req.file.path, resolve(__dirname, "public/upload", newFileName));
  res.json({ body: req.body, file: req.file });
  //吐出表單內容json呈現
});

app.post("/upload2", upload.array("myFile", 3), (req, res) => {
  //一次上傳3個檔案
  let myFiles = [];
  let timestamp = Date.now();
  req.files.forEach((file, index) => {
    let newFileName =
      timestamp + index + extname(req.files[index].originalname);
    renameSync(
      req.files[index].path,
      resolve(__dirname, "public/upload", newFileName)
    );
    myFiles.push(newFileName);
  });
  req.body.myFiles = myFiles;
  res.json({ body: req.body, file: req.files });
});

app.post("/upload3", upload.array("myFile[]", 3), (req, res) => {
  let myFiles = [];
  let timestamp = Date.now();
  req.files.forEach((file, index) => {
    let newFileName =
      timestamp + index + extname(req.files[index].originalname);
    renameSync(
      req.files[index].path,
      resolve(__dirname, "public/upload", newFileName)
    );
    myFiles.push(newFileName);
  });
  req.body.myFiles = myFiles;
  res.json({ body: req.body, file: req.files });
});

app.listen(3000, () => {
  console.log("server is running http://localhost:3000");
});

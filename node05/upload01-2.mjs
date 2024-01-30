import express from "express";
import { dirname, resolve, extname } from "path";
import { fileURLToPath } from "url";
import { renameSync } from "fs"; //會卡但方便
const __dirname = dirname(fileURLToPath(import.meta.url));

import multer from "multer";
const storage = multer.diskStorage({
  destination: function (req, file, cd) {
    cd(null, resolve(__dirname, "public/upload")); //上傳東西搬去哪
  },
  filename: function (req, file, cd) {
    if (!req.timestamp) {
      //是否為多檔案
      req.timestamp = Date.now();
      req.index = 0;
      req.body.files = [];
    } else {
      req.index++;
    }
    let newName = req.timestamp + req.index + extname(file.originalname);
    cd(null, newName);
    req.body.files.push(newName);
  },
});
const upload = multer({ storage: storage });

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
  res.json({ body: req.body, file: req.file });
});

app.post("/upload2", upload.array("myFile", 3), (req, res) => {
  res.json({ xxx: req.body });
});

app.listen(3000, () => {
  console.log("server is running http://localhost:3000");
});

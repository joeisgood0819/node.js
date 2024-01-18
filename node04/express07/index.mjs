import express from "express";
import moment from "moment";
import * as fs from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

// function log(){}
let logMiddleware = (req, res, next) => {
  let { path, ip } = req;
  let time = moment().format("YYYY-MM-DDTHH:mm:ss");
  fs.appendFile(
    resolve(__dirname, "access.log"),
    `${time} ${ip} ${path}\r\n`,
    () => {}
  );
  next();
};

app.use(logMiddleware);

app.get("/", (req, res) => {
  res.send("這是首頁");
});

app.get("/home", (req, res) => {
  res.send("這是主頁");
});

app.get("/login", (req, res) => {
  res.send("這是登入頁");
});

app.all("*", (req, res) => {
  res.status(404);
  res.send("<h1>404 - Not Found</h1>");
});

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});

import express from "express";
import { fileURLToPath } from "url";
import { dirname, resolve, extname } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use((req, res, next) => {
  let referer = req.get("referer");
  let ext = extname(req.url);
  if (ext) {
    ext = ext.slice(1).toUpperCase();
    if (ext === "JPG" || ext === "PNG") {
      if (referer) {
        let { hostname } = new URL(referer);
        //解構
        console.log(hostname);
        if (hostname != "127.0.0.1") {
          // res.status(404).send("<h1>page Not Found.</h1>");
          res.redirect(
            "https://www.lifewire.com/thmb/auk-givypeTY383aFHJnpl6fQSU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/404-not-found-error-explained-2622936-Final-fde7be1b7e2e499c9f039d97183e7f52.jpg"
          );
          return false;
        }
      }
    }
  }
  next();
});

app.use(express.static(resolve(__dirname, "public")));
//路由規則需要移動到上面程式碼的下方，以免順序會影響

app.get("/", (req, res) => {
  res.send("這是首頁");
});

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});

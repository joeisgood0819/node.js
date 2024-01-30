import express from "express";
import { dirname, resolve, extname } from "path";
import formidable from "formidable";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.static(resolve(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", resolve(__dirname, "views"));
app.use(
  "/bootstrap",
  express.static(resolve(__dirname, "node_modules/bootstrap/dist"))
);

app.get("/", (req, res) => {
  res.send("主頁");
});

app.get("/form1", (req, res) => {
  res.render("form1");
});

app.get("/form2", (req, res) => {
  res.render("form2");
});

app.post("/upload1", (req, res, next) => {
  const form = formidable({
    uploadDir: resolve(__dirname, "public/upload"),
    keepExtensions: true,
  });

  form.parse(req, (error, fields, files) => {
    if (error) {
      next(error);
      return false;
    }
    res.json({ fields, files });
  });
});

app.post("/upload2", (req, res, next) => {
  const form = formidable({
    uploadDir: resolve(__dirname, "public/upload"),
    keepExtensions: true,
    multiples: true,
  });

  form.parse(req, (error, fields, files) => {
    if (error) {
      next(error);
      return false;
    }
    res.json({ fields, files });
  });
});

app.listen(3000, () => {
  console.log("server is running http://localhost:3000");
});

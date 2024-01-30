import express from "express";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
let user;

const app = express();

app.set("view engine", "ejs");
app.set("views", resolve(__dirname, "views"));
app.use(
  "/bootstrap",
  express.static(resolve(__dirname, "node_modules/bootstrap/dist"))
);
app.use(
  "/jquery",
  express.static(resolve(__dirname, "node_modules/jquery/dist"))
);

app.get("/", (req, res) => {
  res.send("這是主頁");
});

app.get("/test1", (req, res) => {
  let name = "Bob";
  let str = "Hello World!";
  res.render("test1", { name, str });
});
app.get("/test2", (req, res) => {
  const blackpink = ["Jennie", "Jisooo", "Lisa", "Rose"];
  res.render("test2", { blackpink });
});

app.get("/test3", (req, res) => {
  res.render("test3", { user });
});

app.get("/login", (req, res) => {
  user = {
    name: "Leah Watkins",
    img: "https://randomuser.me/api/portraits/women/26.jpg",
  };
  res.redirect("/test3");
});

app.get("/logout", (req, res) => {
  user = undefined;
  res.redirect("/test3");
});

app.listen(3000, () => {
  console.log("server is running http://localhost:3000");
});

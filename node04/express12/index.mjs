import express from "express";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));
// import bodyParser from "body-parser";

const app = express();

app.use(express.static(resolve(__dirname, "public")));
app.use(
  "/bootstrap",
  express.static(resolve(__dirname, "node_modules/bootstrap/dist"))
);
app.use(
  "/fortawesome",
  express.static(
    resolve(__dirname, "node_modules/@fortawesome/fontawesome-free")
  )
);

app.use(express.urlencoded({ extended: true })); //true解析出來是any type

app.get("/", (req, res) => {
  res.send("這是首頁");
});

app.get("/login", (req, res) => {
  res.sendFile(resolve(__dirname, "public", "form.html"));
});

app.get("/login", (req, res) => {
  console.log(req.body);
  res.send("取得使用者資訊");
});

app.get("/page", (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/css/bootstrap.min.css" />
    <link rel="stylesheet" href="/css/all.min.css" />
    <script src="/js/jquery-3.7.1.min.js"></script>
    <title>這是首頁</title>
  </head>
  <body>
    <h1>這是首頁</h1>
    <div class="container mt-2">
      <div class="btn btn-primary">
        test<i class="fa-brands fa-instagram"></i>
      </div>
    </div>
    <!-- modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <script src="/js/bootstrap.bundle.js"></script>
    <script>
      const myModal = new bootstrap.Modal("#exampleModal", {});
      $(".btn-primary").on("click", () => {
        myModal.show();
      });
    </script>
  </body>
</html>
`);
});

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});

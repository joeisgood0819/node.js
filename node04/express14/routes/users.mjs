import express from "express";
const router = express.Router();

// router.get("/users/", (req, res) => {
//   res.send("使用者們的入口頁");
// });
router.get("/", (req, res) => {
  res.send("使用者們的入口頁");
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  res.send(`使用者${id}的個人頁`);
  //ejs樣板引擎
});

export default router;

import { rename } from "fs";

for (let i = 1; i < 21; i++) {
  rename(`./work${i}.html`, `./work/work${i}.html`, (error) => {
    if (error) {
      console.log("失敗");
      return false;
    }
    console.log("成功");
  });
}

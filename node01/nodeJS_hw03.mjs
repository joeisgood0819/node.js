import { readdir, renameSync } from "fs";

readdir("./work", (error, data) => {
  if (error) {
    console.log("讀取失敗");
    return false;
  }
  console.log("讀取成功");

  data.forEach((elm) => {
    if (elm.length == 10) {
      let add0fn = elm.slice(0, 4) + "0" + elm.slice(4, 10);
      renameSync(`./work/${elm}`, `./work/${add0fn}`);
    }
  });
  readNewFileNames();
});

const readNewFileNames = function () {
  readdir("./work", (error, data) => {
    if (error) {
      console.log("失敗");
      return false;
    }
    console.log(data);
  });
};

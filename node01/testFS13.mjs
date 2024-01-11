import { stat } from "fs";

stat("./video/movie.mp4", (error, data) => {
  if (error) {
    console.log("讀取失敗");
    return false;
  }
  console.log("讀取成功");
  console.log(data); //所有資料
  console.log(data.isFile()); //檔案
  console.log(data.isDirectory()); //資料夾
});

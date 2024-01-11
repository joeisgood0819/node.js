import * as fs from "fs";
//不確定要放什麼直接放*全部fs都進來

const file1 = "./測試寫入ESM2.txt";
const content1 = "松下問童子，嚴師採藥去";

fs.writeFile(file1, content1, (error) => {
  if (error) {
    console.log("寫入失敗");
    return false;
  }
  console.log("寫入成功");
});

const fs = require("fs");

const file1 = "./測試寫入.txt";
const content1 = "松下問童子，嚴師採藥去";

//fs.writeFile(a, b, c);
//a = 檔案位置; b = 檔案內容; c = 執行
fs.writeFile(file1, content1, (error) => {
  if (error) {
    console.log("寫入失敗");
    return false;
  }
  console.log("寫入成功");
});

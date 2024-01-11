import { appendFile } from "fs";

const file1 = "./測試寫入2.txt";
const content1 = "\n只在此山中，孫悟空";
appendFile(file1, content1, (error) => {
  if (error) {
    console.log("寫入失敗");
    return false;
  }
  console.log("寫入成功");
});

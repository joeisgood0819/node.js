const fs = require("fs");

const file1 = "./測試寫入2.txt";
const content1 = "松下問童子，嚴師採藥去";

fs.writeFileSync(file1, content1);
//不需要function，必須先跑完第6句才能持續往下跑
//writeFile不會等待，一直往下跑

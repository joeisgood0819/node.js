import * as fs from "fs";

const file1 = "./測試寫入2ESM.txt";
const content1 = "松下問童子，嚴師採藥去";

fs.writeFileSync(file1, content1);

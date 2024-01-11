import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));
writeFileSync(__dirname + "/test.html", "test test 123");
//console.log(import.meta.url); //顯示路徑
//console.log(fileURLToPath(import.meta.url));
// console.log(dirname(fileURLToPath(import.meta.url)));

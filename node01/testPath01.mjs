import { sep, resolve, parse, basename, dirname, extname } from "path";
import { fileURLToPath } from "url";

console.log(sep); // \
console.log(resolve("test.txt")); //絕對路徑
console.log(parse(import.meta.url)); //物件型式
console.log(parse(fileURLToPath(import.meta.url))); //這台電腦的路徑型式
console.log(basename("/Users/test/Desktop/demo.txt")); //demo.txt
console.log(dirname("/Users/test/Desktop/demo.txt")); ///Users/test/Desktop
console.log(extname("/Users/test/Desktop/demo.txt")); //.txt

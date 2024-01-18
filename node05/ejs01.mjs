import ejs from "ejs";
import { readFileSync } from "fs";

let name = "Ben";
let str = "Hello World!";
let template = readFileSync("./template01.html").toString();
let result = ejs.render(template, { name, str });

console.log(result);

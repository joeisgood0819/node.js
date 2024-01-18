import ejs from "ejs";
import { readFileSync } from "fs";

const blackpink = ["Jennie", "Jisooo", "Lisa", "Rose"];

//方法一: Javascript寫法
// let htmlContent = "<ul>";
// blackpink.forEach((name) => {
//   htmlContent += `<li>${name}</li>`;
// });
// htmlContent += "</ul>";
let template = readFileSync("./template02.html").toString();
let result = ejs.render(template, { blackpink });

console.log(result);

import ejs from "ejs";
import { readFile, readFileSync } from "fs";
let user;

user = {
  name: "Leah Watkins",
  img: "https://randomuser.me/api/portraits/women/26.jpg",
};

// if (user) {
//   console.log(`
//   `);
// } else {
//   console.log(`<button>註冊</button> <button>登入</button>`);
// }
let template = readFileSync("./template03.html").toString();
let result = ejs.render(template, { user });

console.log(result.trim());
//trim()消除空白

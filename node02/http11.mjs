import http from "http";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { readFileSync, readFile } from "fs";
const __dirname = dirname(fileURLToPath(import.meta.url));

const server = http.createServer((request, response) => {
  let { pathname } = new URL(request.url, "http://localhost");
  if (pathname === "/") {
    pathname = "/index.html";
  }
  let filePath = resolve(__dirname, "pages", pathname.substring(1));
  readFile(filePath, (error, data) => {
    if (error) {
      response.statusCode = 500;
      response.setHeader("Content-Type", "text/html; charset=utf-8");
      response.end("<h1>文件讀取失敗</h1>");
    } else {
      response.end(data);
    }
  });
});
server.listen(9000, () => {
  console.log("伺服器已啟動 http://localhost:9000");
});

//   if (pathname === "/") {
//     let htmlContent = readFileSync(resolve(__dirname, "pages/index.html"));
//     response.end(htmlContent);
//   } else if (pathname === "css/main.css") {
//     let cssContent = readFileSync(resolve(__dirname, "pages", "/css/main.css"));
//     response.end(cssContent);
//   } else if (pathname === "/js/main.js") {
//     let jsContent = readFileSync(resolve(__dirname, "pages", "/js/main.js"));
//     response.end(jsContent);
//   } else if (pathname === "/images/bg.webp") {
//     let imagesContent = readFileSync(
//       resolve(__dirname, "pages", "/images/bg.webp")
//     );
//     response.end(imagesContent);
//   } else {
//     //404
//     response.setHeader("Content-Type", "text/html; charset=utf-8");
//     response.end("<h1>文件讀取失敗</h1>");
//   }
// });

// server.listen(9000, () => {
//   console.log("伺服器已啟動 http://localhost:9000");
// });

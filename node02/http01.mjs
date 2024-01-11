import http from "http";

const server = http.createServer((request, response) => {
  response.setHeader("content-type", "text/html;charset=utf-8");
  // utf-8是為了輸入中文
  response.end("Hello Server! 你好主機");
});

server.listen(9000, () => {
  console.log("伺服器已啟動，http://localhost:9000");
});

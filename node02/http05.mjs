import http from "http";

//方法二: 取網址參數
const server = http.createServer((request, response) => {
  // let url = new URL("http://localhost:9000/?name=abc&password=123abc");
  let url = new URL(request.url, "http://localhost:9000");
  console.log(url.pathname);
  console.log(url.searchParams.get("name"));
  console.log(url.searchParams.get("password"));
  response.setHeader("Content-Type", "text/html; charset=utf-8");
  response.end("你好主機");
});

server.listen(9000, () => {
  console.log("伺服器已啟動 http://localhost:9000");
});

import { createReadStream } from "fs";

const rs = createReadStream("./movie.mp4");
rs.on("data", (chunk) => {
  console.log(chunk.length);
});
rs.on("end", () => {
  console.log("讀取結束");
});

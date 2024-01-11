import { createReadStream, createWriteStream } from "fs";

let rs = createReadStream("./movie.mp4");
let ws = createWriteStream("./movie4.mp4");
// let n = 0;

// rs.on("data", (chunk) => {
//   n++;
//   console.log(`寫入中${n}`);
//   ws.write(chunk);
// });

// rs.on("end", () => {
//   console.log("複製完成");
// });

//簡短只需要pipe
rs.pipe(ws);

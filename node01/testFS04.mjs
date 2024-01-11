import { createWriteStream } from "fs";

const ws = createWriteStream("./連續寫入測試.txt");
ws.on("finish", () => {
  console.log("全部寫入完成");
});
ws.write("當風吹草低頭，");
ws.write("\n明月照水中流。");
ws.write("\n心隨靜夜思遠，");
ws.write("\n星空悄悄閃光。");
ws.end();

const fs = require("fs");

for (let i = 1; i < 21; i++) {
  const file1 = `./work${i}.html`;
  const content1 = `<h1>這是第${i}個HTML檔案</h1>`;
  fs.writeFile(file1, content1, (error) => {
    if (error) {
      console.log("失敗");
      return false;
    }
    console.log("成功");
  });
}

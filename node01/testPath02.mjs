import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// console.log(__dirname + "測試寫入.txt");
// C:\Users\joech\OneDrive\桌面\github\node.js測試寫入.txt
console.log(resolve(__dirname, "測試寫入.txt"));

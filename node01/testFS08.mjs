import { readFileSync, writeFileSync } from "fs";

let data = readFileSync("./movie.mp4");
writeFileSync("./movie2.mp4", data);

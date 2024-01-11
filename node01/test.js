const buf1 = Buffer.alloc(10);
console.log(buf1);
const buf2 = Buffer.from("hello");
console.log(buf2);
const buf3 = Buffer.from("你好", "utf8");
console.log(buf3);

//<Buffer 00 00 00 00 00 00 00 00 00 00>
//<Buffer 68 65 6c 6c 6f>
//<Buffer e4 bd a0 e5 a5 bd>

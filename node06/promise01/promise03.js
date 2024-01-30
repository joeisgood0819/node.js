let a;
console.log("開始");

new Promise((resolve, reject) => {
  //成功與失敗的參數
  setTimeout(() => {
    a = 10;
    console.log("事件進行中");
    reject();
  }, 2000);
})
  .then(() => {
    console.log("成功結束, a+a=" + (a + a));
  })
  .catch(() => {
    console.log("失敗結束, a+a=" + (a + a));
  });
//成功之後跳到這裡

function end() {}

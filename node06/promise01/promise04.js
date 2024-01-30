let t1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("t1 執行結束");
      resolve(55688);
    }, 2000);
  });
};

let t2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("t2 執行結束");
      reject();
    }, 4000);
  });
};

let t3 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("t3 執行結束");
      resolve();
    }, 1000);
  });
};

//立即執行函數
// (function () {});
(async () => {
  let a1 = await t1();
  console.log(a1);
  await t2().catch(() => {
    console.log("error");
  });
  await t3();
})();

//一般線性函數
// async function dodo() {
//   await t1();
//   await t2();
//   await t3();
// }

// dodo();

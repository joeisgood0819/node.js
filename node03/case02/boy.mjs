//直接命名導出
// export const sayMyName = () => {
//   console.log("Kenny");
// };
// export const sayMyCountry = () => {
//   console.log("TW");
// };

//聚合導出
// const sayMyName = () => {
//   console.log("Kenny");
// };
// const sayMyCountry = () => {
//   console.log("TW");
// };

// export { sayMyName, sayMyCountry };

//重新命名匯出
// const aa = () => {
//   console.log("Kenny");
// };
// const bb = () => {
//   console.log("TW");
// };

// export { aa as sayMyName, bb as sayMyCountry };

//預設導出
// const sayMyName = () => {
//   console.log("Kenny");
// };
// const sayMyCountry = () => {
//   console.log("TW");
// };

// export default { sayMyName, sayMyCountry };

const sayMyName = () => {
  console.log("Kenny");
};
export const sayMyCountry = () => {
  console.log("TW");
};
export default sayMyName();

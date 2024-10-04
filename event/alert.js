// // 버튼 클릭시 alert-box 보여주기
// document.querySelector(".show").addEventListener("click", () => {
//   document.querySelector(".alert-box").style.display = "block";
// });

// // x 클릭시 alert-box 숨기기
// document.querySelector(".close").addEventListener("click", () => {
//   document.querySelector(".alert-box").style.display = "none";
// });

// 함수 중복 => block , none 값을 전달인자로 처리 가능
const box = document.querySelector(".alert-box");
const notification = (state) => (box.style.display = state);
document
  .querySelector(".show")
  .addEventListener("click", () => notification("block"));
document
  .querySelector(".close")
  .addEventListener("click", () => notification("none"));

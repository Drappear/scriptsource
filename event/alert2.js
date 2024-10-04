// 함수 중복 => block , none 값을 전달인자로 처리 가능
const box = document.querySelector(".alert-box");
const notification = (state, msg) => {
  box.style.display = state;
  box.firstChild.nodeValue = msg;
};

document
  .querySelector(".alert1")
  .addEventListener("click", () =>
    notification("block", "아이디를 입력해주세요")
  );
document
  .querySelector(".alert2")
  .addEventListener("click", () =>
    notification("block", "비밀번호를 입력해주세요")
  );
document
  .querySelector(".close")
  .addEventListener("click", () => notification("none"));

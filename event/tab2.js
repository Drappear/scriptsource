// tab-button 클릭 시 해당 tab-content 보이기
const tabContents = document.querySelectorAll(".tab-content");
const tabButtons = document.querySelectorAll(".tab-button");

tabButtons.forEach((tabButton, idx) => {
  tabButton.addEventListener("click", (e) => {
    // orange 클래스명 모두 제거
    tabButtons.classList.remove("orange");
    // show 클래스명 모두 제거
    tabContents.classList.remove("show");
    // 이벤트가 일어난 대상 orange 클래스명 추가
    e.target.classList.add("orange");
    // 인덱스를 이용해 show 클래스명 추가
    tabContents[idx].classList.add("show");
  });
});
// document
//   .querySelector(".list li:nth-child(1)")
//   .addEventListener("click", () => {
//     tabContents[0].classList.add("show");
//     tabContents[1].classList.remove("show");
//     tabContents[2].classList.remove("show");

//     tabButtons[0].classList.add("orange");
//     tabButtons[1].classList.remove("orange");
//     tabButtons[2].classList.remove("orange");
//   });
// document
//   .querySelector(".list li:nth-child(2)")
//   .addEventListener("click", () => {
//     tabContents[0].classList.remove("show");
//     tabContents[1].classList.add("show");
//     tabContents[2].classList.remove("show");

//     tabButtons[0].classList.remove("orange");
//     tabButtons[1].classList.add("orange");
//     tabButtons[2].classList.remove("orange");
//   });
// document
//   .querySelector(".list li:nth-child(3)")
//   .addEventListener("click", () => {
//     tabContents[0].classList.remove("show");
//     tabContents[1].classList.remove("show");
//     tabContents[2].classList.add("show");

//     tabButtons[0].classList.remove("orange");
//     tabButtons[1].classList.remove("orange");
//     tabButtons[2].classList.add("orange");
//   });

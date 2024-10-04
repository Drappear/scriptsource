// tab-button 클릭 시 해당 tab-content 보이기
const tabContents = document.querySelectorAll(".tab-content");
const tabButtons = document.querySelectorAll(".tab-button");

document
  .querySelector(".list li:nth-child(1)")
  .addEventListener("click", () => {
    tabContents[0].classList.add("show");
    tabContents[1].classList.remove("show");
    tabContents[2].classList.remove("show");

    tabButtons[0].classList.add("orange");
    tabButtons[1].classList.remove("orange");
    tabButtons[2].classList.remove("orange");
  });
document
  .querySelector(".list li:nth-child(2)")
  .addEventListener("click", () => {
    tabContents[0].classList.remove("show");
    tabContents[1].classList.add("show");
    tabContents[2].classList.remove("show");

    tabButtons[0].classList.remove("orange");
    tabButtons[1].classList.add("orange");
    tabButtons[2].classList.remove("orange");
  });
document
  .querySelector(".list li:nth-child(3)")
  .addEventListener("click", () => {
    tabContents[0].classList.remove("show");
    tabContents[1].classList.remove("show");
    tabContents[2].classList.add("show");

    tabButtons[0].classList.remove("orange");
    tabButtons[1].classList.remove("orange");
    tabButtons[2].classList.add("orange");
  });

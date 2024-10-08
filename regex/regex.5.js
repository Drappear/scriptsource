// form 이 submit 되면
document.querySelector("form").addEventListener("submit", (e) => {
  // submit 중지
  e.preventDefault;
  // id / password / email 유효성 검증 후 형식에 맞지 않는다면 error 메세지 추가
  // 유효성 검사할 요소 찾기
  const name = document.querySelector("#inputName");
  const id = document.querySelector("#inputId");
  const email = document.querySelector("#inputEmail");
  const passowrd = document.querySelector("#inputPassword");

  // 정규식 패턴 정의
  const nameReg = /^[가-힣]{2,5}$/;
  const idReg = /^(?=.*[A-za-z])(?=.*[0-9])(?=.*[!@#])[A-Za-z0-9!@#]{6,12}$/;
  const pwReg =
    /^(?=.*[A-za-z])(?=.*[0-9])(?=.*[!@#_*])[A-Za-z0-9!@#_*]{8,12}$/;
  const emailReg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // 유효성 검증
  if (!nameReg.test(name.value)) {
    name.closest("div").lastElementChild.innerHTML = "이름을 확인해주세요";
  } else {
    name.closest("div").lastElementChild.innerHTML = "";
  }
  if (!idReg.test(id.value)) {
    id.closest("div").lastElementChild.innerHTML = "아이디를 확인해주세요";
  } else {
    id.closest("div").lastElementChild.innerHTML = "";
  }
  if (!pwReg.test(passowrd.value)) {
    passowrd.closest("div").lastElementChild.innerHTML =
      "비밀번호를 확인해주세요";
  } else {
    passowrd.closest("div").lastElementChild.innerHTML = "";
  }
  if (!emailReg.test(email.value)) {
    email.closest("div").lastElementChild.innerHTML = "이메일을 확인해주세요";
  } else {
    email.closest("div").lastElementChild.innerHTML = "";
  }
  // 유효성 검사 후 이상 없으면
  // e.target.submit();
});

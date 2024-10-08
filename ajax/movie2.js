const txtYear = document.querySelector("#txtYear");
const selMon = document.querySelector("#selMon");
const selDay = document.querySelector("#selDay");

init = () => {
  // 오늘 날짜 구한 뒤 구한 날짜 출력
  const now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate() - 1;

  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }

  txtYear.value = year;
  selMon.value = month;
  selDay.value = day;
};

init();

getMovie = () => {
  // 연월일 가져오기
  let year = txtYear.value;
  let month = selMon.value;
  let day = selDay.value;

  // url
  let url =
    "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=";

  // url + 연월일
  url += year + month + day;
  //   console.log(url);

  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("주소 확인");
      return response.json();
    })
    .then((data) => {
      // 화면 출력
      //   console.log(data.boxOfficeResult.dailyBoxOfficeList);
      const movies = data.boxOfficeResult.dailyBoxOfficeList;
      let str = ``;
      movies.forEach((movie) => {
        str += `<tr>`;
        str += `<td>${movie.rank}위</td>`;

        let rankInten = parseInt(movie.rankInten);
        if (rankInten > 0) {
          rankInten = `▲ ` + rankInten;
        } else if (rankInten < 0) {
          rankInten = `▼` + rankInten;
        } else {
          rankInten = "-";
        }
        str += `<td>${rankInten}</td>`;
        str += `<td>${movie.movieNm}</td>`;
        str += `<td>${movie.openDt}</td>`;
        str += `<td>${movie.audiCnt}</td>`;
        str += `<td>${movie.audiAcc}</td>`;
      });
      str += `</tr>`;

      document.querySelector(".table tbody").innerHTML = str;

      // invisible 클래스명 제거
      document
        .querySelector(".container .row:nth-child(3)")
        .classList.remove("invisible");
    })
    .catch((error) => console.log(error));
};

document.querySelector(".btn-secondary").addEventListener("click", getMovie);

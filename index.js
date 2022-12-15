// 네비 별 움직이기
let starMove = function (boxPosition) {
  // click 이벤트 감지
  // wheel 이벤트 감지
  let navWidth = document.querySelector("nav").clientWidth;
  let navStar = document.querySelector(".star");
  let wrapperHeight = document.getElementById("wrapper").clientHeight;
};

let page = document.querySelectorAll(".box");

// 화면 움직이기
let pageMove = function (page) {};

// 스크롤 휠 터치 마다 화면 움직이기
// 네비 누를 때마다 네비 별 움직이기
// = 화면이 일정 scroll에 도달할 때마다 네비 별 움직이기?
window.addEventListener("wheel", (e) => {
  pageMove(e);
});

// 브라우저 크기 변경할 때마다 네비 별 움직이기
window.addEventListener("resize", () => {});

// 네비 별 움직이기
let starMove = function (boxPosition) {
  // click 이벤트 감지
  // wheel 이벤트 감지
  let navStar = document.querySelector(".star");
  navStar.style.left = boxPosition - navStar.clientWidth / 2 + "px";
};

let page = document.querySelectorAll(".box");
console.log(scroll);

// 화면 움직이기
let pageMove = function (page) {
  // click 이벤트 감지
  let h1 = document.querySelector(".h1");
  let footer = document.getElementById("footer");

  if (page.target === h1 || page.target === footer) {
    return;
  }

  const currentScroll = page.target.closest("article").offsetTop;
  const Y = window.innerHeight;

  if (page.deltaY < 0 && Y >= 0) {
    window.scrollTo(0, currentScroll - Y);
    // console.log(currentScroll - Y);
  } else if (page.deltaY > 0) {
    window.scrollTo(0, currentScroll + Y);
    // console.log(currentScroll + Y);
  } else if (page.deltaY > 0 && page.target === footer) {
    window.scrollTo(0, currentScroll - footer.offsetHeight);
  }
};

// 네비 버튼 누를 때마다 네비 별 움직이기
let pageBtn = document.querySelectorAll(".btn");
pageBtn.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    starMove(e.target.offsetLeft);
  });
});

// 스크롤 휠 터치 마다 화면 움직이기
// 화면 움직일 때마다 네비 별 움직이기
window.addEventListener("wheel", (e) => {
  pageMove(e);
});

// 브라우저 크기 변경할 때마다 네비 별 움직이기
window.addEventListener("resize", () => {});

let boxWrapper = document.getElementById("boxWrapper");
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");

// logo btn
let h1 = document.querySelector(".h1");
h1.addEventListener("click", () => {
  boxWrapper.scrollTo(0, box1.offsetTop);
});

// header nav
let btnAll = document.querySelectorAll(".btn");

btnAll[0].addEventListener("click", () => {
  boxWrapper.scrollTo(0, box1.offsetTop);
});

btnAll[1].addEventListener("click", () => {
  boxWrapper.scrollTo(0, box2.offsetTop);
});

btnAll[2].addEventListener("click", () => {
  boxWrapper.scrollTo(0, box3.offsetTop);
});

btnAll[3].addEventListener("click", () => {
  boxWrapper.scrollTo(0, box4.offsetTop);
});

// 스크롤 휠 터치마다 화면 움직이기
window.addEventListener("wheel", (e) => {
  const box1Top = box1.offsetTop;
  const box1Bounding = Math.abs(box1.getBoundingClientRect().top);

  const box2Top = box2.offsetTop;
  const box2Bounding = Math.abs(box2.getBoundingClientRect().top);

  const box3Top = box3.offsetTop;
  const box3Bounding = Math.abs(box3.getBoundingClientRect().top);

  const box4Top = box4.offsetTop;
  const box4Bounding = Math.abs(box4.getBoundingClientRect().top);

  let currentScroll = Math.min(box1Bounding, box2Bounding, box3Bounding, box4Bounding);

  if (currentScroll === box1Bounding) {
    if (e.deltaY < 0) {
      return;
    } else if (e.deltaY > 0) {
      boxWrapper.scrollTo(0, box2Top);
    }
  } else if (currentScroll === box2Bounding) {
    if (e.deltaY < 0) {
      boxWrapper.scrollTo(0, box1Top);
    } else if (e.deltaY > 0) {
      boxWrapper.scrollTo(0, box3Top);
    }
  } else if (currentScroll === box3Bounding) {
    if (e.deltaY < 0) {
      boxWrapper.scrollTo(0, box2Top);
    } else if (e.deltaY > 0) {
      boxWrapper.scrollTo(0, box4Top);
    }
  } else if (currentScroll === box4Bounding) {
    if (e.deltaY < 0) {
      boxWrapper.scrollTo(0, box3Top);
    } else if (e.deltaY > 0) {
      return;
    }
  }
});

// 모바일 터치마다 화면 움직이기
let start;
let end;

window.addEventListener("touchstart", (e) => {
  start = e.changedTouches[0].clientY;
});

window.addEventListener("touchend", (e) => {
  const box1Top = box1.offsetTop;
  const box1Bounding = Math.abs(box1.getBoundingClientRect().top);

  const box2Top = box2.offsetTop;
  const box2Bounding = Math.abs(box2.getBoundingClientRect().top);

  const box3Top = box3.offsetTop;
  const box3Bounding = Math.abs(box3.getBoundingClientRect().top);

  const box4Top = box4.offsetTop;
  const box4Bounding = Math.abs(box4.getBoundingClientRect().top);

  let currentScroll = Math.min(box1Bounding, box2Bounding, box3Bounding, box4Bounding);

  end = e.changedTouches[0].clientY;

  let move = start - end;

  let slideBtn = document.querySelectorAll(".slideBtn");

  if (e.target === slideBtn[0] || e.target === slideBtn[1]) {
    return;
  }

  if (currentScroll === box1Bounding) {
    if (move < 0) {
      return;
    } else if (move > 0) {
      boxWrapper.scrollTo(0, box2Top);
    }
  } else if (currentScroll === box2Bounding) {
    if (move < 0) {
      boxWrapper.scrollTo(0, box1Top);
    } else if (move > 0) {
      boxWrapper.scrollTo(0, box3Top);
    }
  } else if (currentScroll === box3Bounding) {
    if (move < 0) {
      boxWrapper.scrollTo(0, box2Top);
    } else if (move > 0) {
      boxWrapper.scrollTo(0, box4Top);
    }
  } else if (currentScroll === box4Bounding) {
    if (move < 0) {
      boxWrapper.scrollTo(0, box3Top);
    } else if (move > 0) {
      return;
    }
  }
});

// 브라우저 크기 조절마다 화면 위치 조정하기
let delay = 200;
let timer = null;
window.addEventListener("resize", function () {
  clearTimeout(timer);
  timer = setTimeout(function () {
    const box1Top = box1.offsetTop;
    const box1Bounding = Math.abs(box1.getBoundingClientRect().top);

    const box2Top = box2.offsetTop;
    const box2Bounding = Math.abs(box2.getBoundingClientRect().top);

    const box3Top = box3.offsetTop;
    const box3Bounding = Math.abs(box3.getBoundingClientRect().top);

    const box4Top = box4.offsetTop;
    const box4Bounding = Math.abs(box4.getBoundingClientRect().top);

    let currentScroll = Math.min(box1Bounding, box2Bounding, box3Bounding, box4Bounding);

    if (currentScroll === box1Bounding) {
      boxWrapper.scrollTo(0, box1Top);
    } else if (currentScroll === box2Bounding) {
      boxWrapper.scrollTo(0, box2Top);
    } else if (currentScroll === box3Bounding) {
      boxWrapper.scrollTo(0, box3Top);
    } else if (currentScroll === box4Bounding) {
      boxWrapper.scrollTo(0, box4Top);
    }
  }, delay);
});

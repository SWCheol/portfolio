// 스크롤 휠 터치 마다 화면 움직이기
window.addEventListener("wheel", (e) => {
  const wrapper = document.getElementById("wrapper");

  const box1 = document.getElementById("box1");
  const box1Top = box1.offsetTop;
  const box1Bounding = Math.abs(box1.getBoundingClientRect().top);

  const box2 = document.getElementById("box2");
  const box2Top = box2.offsetTop;
  const box2Bounding = Math.abs(box2.getBoundingClientRect().top);

  const box3 = document.getElementById("box3");
  const box3Top = box3.offsetTop;
  const box3Bounding = Math.abs(box3.getBoundingClientRect().top);

  const box4 = document.getElementById("box4");
  const box4Top = box4.offsetTop;
  const box4Bounding = Math.abs(box4.getBoundingClientRect().top);

  let currentScroll = Math.min(box1Bounding, box2Bounding, box3Bounding, box4Bounding);

  if (currentScroll === box1Bounding) {
    if (e.deltaY < 0) {
      return;
    } else if (e.deltaY > 0) {
      wrapper.scrollTo(0, box2Top);
    }
  } else if (currentScroll === box2Bounding) {
    if (e.deltaY < 0) {
      wrapper.scrollTo(0, box1Top);
    } else if (e.deltaY > 0) {
      wrapper.scrollTo(0, box3Top);
    }
  } else if (currentScroll === box3Bounding) {
    if (e.deltaY < 0) {
      wrapper.scrollTo(0, box2Top);
    } else if (e.deltaY > 0) {
      wrapper.scrollTo(0, box4Top);
    }
  } else if (currentScroll === box4Bounding) {
    if (e.deltaY < 0) {
      wrapper.scrollTo(0, box3Top);
    } else if (e.deltaY > 0) {
      return;
    }
  }
});

window.addEventListener("resize", () => {
  const wrapper = document.getElementById("wrapper");

  const box1 = document.getElementById("box1");
  const box1Top = box1.offsetTop;
  const box1Bounding = Math.abs(box1.getBoundingClientRect().top);

  const box2 = document.getElementById("box2");
  const box2Top = box2.offsetTop;
  const box2Bounding = Math.abs(box2.getBoundingClientRect().top);

  const box3 = document.getElementById("box3");
  const box3Top = box3.offsetTop;
  const box3Bounding = Math.abs(box3.getBoundingClientRect().top);

  const box4 = document.getElementById("box4");
  const box4Top = box4.offsetTop;
  const box4Bounding = Math.abs(box4.getBoundingClientRect().top);

  let currentScroll = Math.min(box1Bounding, box2Bounding, box3Bounding, box4Bounding);

  if (currentScroll === box1Bounding) {
    wrapper.scrollTo(0, box1Top);
  } else if (currentScroll === box2Bounding) {
    wrapper.scrollTo(0, box2Top);
  } else if (currentScroll === box3Bounding) {
    wrapper.scrollTo(0, box3Top);
  } else if (currentScroll === box4Bounding) {
    wrapper.scrollTo(0, box4Top);
  }
});

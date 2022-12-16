window.addEventListener("DOMContentLoaded", () => {
  let workBelt = document.querySelector(".workBelt");
  let work = document.querySelectorAll(".work");
  workBelt.style.width = work.length * 100 + "%";
  workBelt.style.left = 0 + "%";
});

let slideBtn = document.querySelectorAll(".slideBtn");

slideBtn.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    const before = document.getElementById("beforeBtn");
    const after = document.getElementById("afterBtn");
    const workBelt = document.querySelector(".workBelt");
    let work = document.querySelectorAll(".work");
    let left = workBelt.style.left;

    if (e.target === before && parseInt(left) !== 0) {
      //   left = parseInt(left) - 100 + "%"; 이건 왜 안되냐???
      workBelt.style.left = parseInt(left) + 100 + "%";
    } else if (e.target === after && Math.abs(parseInt(left)) / ((work.length - 1) * 100) !== 1) {
      workBelt.style.left = parseInt(left) - 100 + "%";
    }
  });
});

window.addEventListener("resize", () => {});

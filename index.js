let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let wrapper = document.querySelector(".wrapper");

//scroll.js
import { scrollTo } from "scroll-js";

scrollTo(window, { top: 500 }).then(function () {
  // window has scrolled 500 pixels down the page
});

//swiper.js
// import Swiper JS
import Swiper from "swiper";
// import Swiper styles
import "swiper/css";
// const swiper = new Swiper(...);

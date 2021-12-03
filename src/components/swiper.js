import Swiper, { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

Swiper.use([Navigation, Autoplay]);

function swiper() {
  const swiper = new Swiper(".swiper", {
    autoplay: {
      delay: 3000,
    },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    speed: 500,
    longSwipes: false,
  });
}

export default swiper;

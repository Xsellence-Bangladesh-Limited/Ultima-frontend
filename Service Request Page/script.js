$(document).ready(function () {
  // Testimonial Slider (start)

  var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    keyboard: true,
  });

  //   Testimonial Slider (end)
});

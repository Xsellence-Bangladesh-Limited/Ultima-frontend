$(document).ready(function () {
  // Testimonial Slider (start)

  var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    autoplay: true,
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

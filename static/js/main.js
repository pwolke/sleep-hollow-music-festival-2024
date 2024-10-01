const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  speed: 500,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true,
  },
});
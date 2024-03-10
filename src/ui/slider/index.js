/*  установить бибилиотеку swiper
  npm i -D swiper

  добавить подключение в основной файл script.js или в отдельный файл библиотек
  
  //=include "../../../node_modules/swiper/swiper-bundle.min.js"

  const accordionList = Array.from(document.querySelectorAll(".accordion"));
  accordionList.forEach(accordion);

  добавить подключение в основной файл main.scss или в отдельный файл библиотек
  @import "../../../node_modules/swiper/swiper-bundle.min";

 */

const mySlider = new Swiper('.swiper', {
  loop: true,
    slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
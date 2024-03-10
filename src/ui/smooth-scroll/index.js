/*  добавить подключение в основной файл script.js
    ../ui/accordion/index.js
    Использовать как:
    const smoothScrollList = Array.from(document.querySelectorAll(".smooth-scroll-js"));
    smoothScrollList.forEach(smoothScroll);

 */

const smoothScroll = (element) => {

  element.addEventListener('click', (event) => {
    event.preventDefault();
    let anchor = element.getAttribute('href');
    let targetElement = document.querySelector(anchor);
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  });

};
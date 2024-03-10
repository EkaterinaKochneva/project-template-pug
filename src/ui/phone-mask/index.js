/* Использование:
  установить бибилиотеку imask
  npm i -D imask

  добавить подключение в основной файл script.js
  //=include ../ui/phone-mask/index.js
  const inputPhoneList = Array.from(document.querySelectorAll('input[type="tel"]'));
  phoneMask(inputPhoneList);

  добавить подключение в основной файл script.js или в отдельный файл библиотек  
  //=include "../../../node_modules/imask/dist/imask.min.js"

*/

function phoneMask(elements) {

  if (elements.length !== 0) {
    const maskOptions = {
      mask: '+{7} (000) 000-00-00'
    };
    elements.forEach(element => {
      const mask = IMask(element, maskOptions);
    });
  }
}
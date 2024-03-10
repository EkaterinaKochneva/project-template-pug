/*  установить бибилиотеку accordion-js
    npm i -D accordion-js

    добавить подключение в основной файл script.js
    //=include ../ui/accordion/index.js
    const accordionList = Array.from(document.querySelectorAll(".accordion"));
    accordionList.forEach(accordion);

    добавить подключение в основной файл main.scss
    @import "../ui/accordion/";

 */

//=include "../../../node_modules/accordion-js/dist/accordion.min.js"

const accordion = (component) => {

  const instance = new Accordion(component, {
    duration: 200,
    showMultiple: true,
    elementClass: 'accordion__item',
    triggerClass: 'accordion__button',
    panelClass: 'accordion__collapse',
  });

  return instance;
}
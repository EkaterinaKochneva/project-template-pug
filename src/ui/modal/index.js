/* Использование:
  установить бибилиотеку micromodal
  npm i -D micromodal

  добавить подключение библиотеки в основной файл script.js или в отдельный файл библиотек  
  //=include "../../../node_modules/micromodal/dist/micromodal.min.js"

  добавить подключение в основной файл script.js
  //=include ../ui/modal/index.js
  добавить подключение стилей в основной файл main.scss
  @import "../ui/modal/";

  К ссылке или кнопке добавить атрибут data-modal="modal-1", где modal-1 соответствует id  нужного модального окна

*/

MicroModal.init({
  onShow: function(modal, element, event) {
      event.preventDefault();
      event.stopPropagation();
      document.querySelector('body').classList.add('faded');
  },
  onClose: function() {
    document.querySelector('body').classList.remove('faded');
  },
  openTrigger: 'data-modal',
  closeTrigger: 'data-modal-close',
  awaitCloseAnimation: true
});
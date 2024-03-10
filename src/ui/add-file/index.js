/* Использование:
Подключить в основной файл js
//=include ../ui/add-file/index.js

const addFileList = document.querySelectorAll('.add-file');
addFileInput(addFileList);
*/

function addFileInput (elements) {
  if (elements.length !== 0) {

    elements.forEach(element => {

      let input = element.querySelector('.add-file__input');
      let label = element.querySelector('.add-file__text');
      let labelVal = label.innerText;      

      input.addEventListener('change', function(el) {
        let fileName = '';
        element.classList.add('is-change');
        if (input.value) {
          fileName = input.value.split('\\').pop();
        }
        fileName ? label.innerText = fileName : label.innerText = labelVal;
      });
    });
  }
}
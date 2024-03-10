const mobileMenu = () => {
  
  const body = document.querySelector('body');
  const mainMenu = document.querySelector('.top-menu');
  const burger = document.querySelector('.burger');
  const close = document.querySelector('.top-menu__close');  

  burger.addEventListener('click', () => {
    mainMenu.classList.add('is-active');
    body.classList.add('faded');
    
  });
  close.addEventListener('click', () => {
    mainMenu.classList.remove('is-active');
    body.classList.remove('faded');
    
  });
  
}
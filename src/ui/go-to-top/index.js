function goToTop() {

  const button = document.querySelector('.go-to-top');  
  const scrollVal = 100;

  if (!button) {
    return false;
  }

  const activateScrollBtn = () => {
    let scrollOffset = window.scrollY;  

    if (scrollOffset > scrollVal && !button.classList.contains('is-active')) {
      button.classList.add('is-active');
    } else if (scrollOffset <= scrollVal && button.classList.contains('is-active')) {
      button.classList.remove('is-active');
    }
  }

  const onScroll = debounce(activateScrollBtn, 300);

  window.addEventListener('scroll', onScroll);

  button.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

}
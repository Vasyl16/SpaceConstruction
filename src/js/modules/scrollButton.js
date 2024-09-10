const scrollButton = '.rights-footer__top-button';

const scrollFun = (scrollButton, topScroll) => {
  if (document.querySelector(scrollButton)) {
    document.querySelector(scrollButton).addEventListener('click', () => {
      window.scrollTo({
        top: topScroll,
        behavior: 'smooth',
      });
    });
  }
};

scrollFun(scrollButton, 0);

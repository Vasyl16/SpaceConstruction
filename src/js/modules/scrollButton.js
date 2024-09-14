const scrollButton = '.rights-footer__top-button';

export const scrollFun = (scrollButton, topScroll) => {
  const scrollButtonItems = document.querySelectorAll(scrollButton);

  if (scrollButtonItems.length) {
    scrollButtonItems.forEach((scrollButtonElement) => {
      scrollButtonElement.addEventListener('click', () => {
        window.scrollTo({
          top: topScroll,
          behavior: 'smooth',
        });
      });
    });
  }
};

export const scrollButtonToTop = () => {
  scrollFun(scrollButton, 0);
};

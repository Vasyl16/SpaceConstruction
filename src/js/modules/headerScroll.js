const header = document.querySelector('.header');
const headerActiveClass = 'header_s';
let debounceTimeout;

const onScrollEnd = () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY > 0) {
    header.classList.add(headerActiveClass);
  } else {
    header.classList.remove(headerActiveClass);
  }
};

export const handleHeaderScroll = () => {
  window.addEventListener('scroll', () => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      requestAnimationFrame(onScrollEnd);
    }, 30);
  });
};

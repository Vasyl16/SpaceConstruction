export const blockScroll = (ifBlockScroll) => {
  const body = document.body;

  ifBlockScroll
    ? body.classList.add('block-scroll')
    : body.classList.remove('block-scroll');
};

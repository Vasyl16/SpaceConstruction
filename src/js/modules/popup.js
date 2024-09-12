const popupItems = [
  {
    buttonClass: 'our-positions__button-link',
    popupClass: 'subscribe-popup-our-positions',
    closeIconClass: 'subscribe-popup-our-positions__cros-icon',
  },
];

export const handlePopupItems = () => {
  popupItems.forEach((item) => {
    const button = document.querySelector(`.${item.buttonClass}`);
    const popup = document.querySelector(`.${item.popupClass}`);
    const closeIcon = document.querySelector(`.${item.closeIconClass}`);

    if (button && popup && closeIcon) {
      button.addEventListener('click', () => {
        popup.classList.add('subscribe-popup-our-positions_a');
        document.body.style.overflow = 'hidden';
      });
      closeIcon.addEventListener('click', () => {
        popup.classList.remove('subscribe-popup-our-positions_a');
        document.body.style.overflow = '';
      });
    }
  });
};

const popupItems = [
  {
    buttonClass: 'our-positions__button-link',
    popupClass: 'subscribe-popup-our-positions',
    closeIconClass: 'subscribe-popup-our-positions__cros-icon',
  },
];

const wrapper = document.querySelector('.wrapper');
const wrapperBlockClass = 'wrapper_b';

export const handlePopupItems = () => {
  popupItems.forEach((item) => {
    const button = document.querySelector(`.${item.buttonClass}`);
    const popup = document.querySelector(`.${item.popupClass}`);
    const closeIcon = document.querySelector(`.${item.closeIconClass}`);
    if (button && popup && closeIcon) {
      button.addEventListener('click', () => {
        popup.classList.add('subscribe-popup-our-positions_a');
        wrapper.classList.add(wrapperBlockClass);
      });
      closeIcon.addEventListener('click', () => {
        popup.classList.remove('subscribe-popup-our-positions_a');
        wrapper.classList.remove(wrapperBlockClass);
      });
    }
  });
};

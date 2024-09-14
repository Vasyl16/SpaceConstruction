import { blockScroll } from './blockScroll';

const popupItems = [
  {
    buttonClass: 'our-positions__button-link_subscribe',
    popupClass: 'subscribe-popup-our-positions',
    closeIconClass: 'subscribe-popup-our-positions__cros-icon',
  },

  {
    buttonClass: 'our-positions__button-link_send',
    popupClass: 'send-popup-our-positions',
    closeIconClass: 'send-popup-our-positions__cros-icon',
  },
];

export const handlePopupItems = () => {
  popupItems.forEach((item) => {
    const button = document.querySelector(`.${item.buttonClass}`);
    const popup = document.querySelector(`.${item.popupClass}`);
    const closeIcon = document.querySelector(`.${item.closeIconClass}`);

    if (!button && !popup && !closeIcon) {
      return;
    }

    button.addEventListener('click', () => {
      const viewportHeight = window.innerHeight;
      const popupHeight = popup.offsetHeight;

      popup.classList.add(item.popupClass + '_a');

      blockScroll(true);

      if (popupHeight > viewportHeight) {
        popup.classList.add(item.popupClass + '_small-height');
      }
    });

    closeIcon.addEventListener('click', () => {
      popup.classList.remove(item.popupClass + '_a');

      blockScroll(false);
    });
  });
};

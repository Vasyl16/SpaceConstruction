import { scrollFun } from './scrollButton';

const scrollToBlockItems = [
  {
    redirectPath: '/SpaceConstruction/src/html/pages/about/about.html',
    scrollButton: '.items-our-offices__location-link',
    scrollToBlock: '.work-worldwild',
  },

  {
    redirectPath: false,
    scrollButton: '.benefits__button',
    scrollToBlock: '.discuss-details',
  },
];

const calculateScroll = (targetElement) => {
  return targetElement.getBoundingClientRect().top + window.pageYOffset - 100;
};

export const scrollToBlockFun = () => {
  for (const scrollToBlockItem of scrollToBlockItems) {
    const scrollToBlockElement = document.querySelector(
      scrollToBlockItem.scrollToBlock
    );
    console.log(1);

    const { redirectPath, scrollButton, scrollToBlock } = scrollToBlockItem;

    const scrollButtonItems = document.querySelectorAll(scrollButton);

    if (scrollToBlockElement && !redirectPath && scrollButtonItems.length) {
      const scrollValue = calculateScroll(scrollToBlockElement);

      scrollFun(scrollButton, scrollValue);

      continue;
    }

    if (redirectPath && scrollButtonItems.length) {
      scrollButtonItems.forEach((scrollButtonElement) => {
        scrollButtonElement.addEventListener('click', () => {
          window.location.href = `${redirectPath}#scrollToBlock=${scrollToBlock}`;
        });
      });
      continue;
    }
  }
};

export const handleScrollOnRedirect = () => {
  const params = new URLSearchParams(window.location.hash.substring(1));

  if (params.get('scrollToBlock')) {
    const scrollToBlock = params.get('scrollToBlock');

    const scrollToBlockElement = document.querySelector(scrollToBlock);

    if (scrollToBlockElement) {
      const scrollValue = calculateScroll(scrollToBlockElement);

      window.scrollTo({
        top: scrollValue,
        behavior: 'smooth',
      });

      return true;
    }

    console.log('scrollToBlockElement not found');
    return false;
  }
};
import { scrollFun } from './scrollButton';

const scrollToBlockItems = [
  {
    redirectPath: '/SpaceConstruction/src/html/pages/about/about.html',
    scrollButton: '.items-our-offices__location-link',
    scrollToBlock: '.work-worldwild',
  },
];

const calculateScroll = (targetElement) => {
  return targetElement.getBoundingClientRect().top + window.pageYOffset - 100;
};

export const scrollToBlockFun = () => {
  scrollToBlockItems.forEach((scrollToBlockItem) => {
    const scrollToBlockElement = document.querySelector(
      scrollToBlockItem.scrollToBlock
    );

    const { redirectPath, scrollButton, scrollToBlock } = scrollToBlockItem;

    const scrollButtonItems = document.querySelectorAll(scrollButton);

    if (scrollToBlockElement && !redirectPath && scrollButtonItems.length) {
      const scrollValue = calculateScroll(scrollToBlockElement);

      scrollFun(scrollButton, scrollValue);

      return;
    }

    if (redirectPath && scrollButtonItems.length) {
      scrollButtonItems.forEach((scrollButtonElement) => {
        scrollButtonElement.addEventListener('click', () => {
          window.location.href = `${redirectPath}#scrollToBlock=${scrollToBlock}`;
        });
      });
    }
  });
};

export const handleScrollOnRedirect = () => {
  const params = new URLSearchParams(window.location.hash.substring(1));

  if (!params.get('scrollToBlock')) {
    return;
  }

  const scrollToBlock = params.get('scrollToBlock');

  const scrollToBlockElement = document.querySelector(scrollToBlock);

  if (!scrollToBlockElement) {
    console.log('scrollToBlockElement not found');
    return true;
  }

  const scrollValue = calculateScroll(scrollToBlockElement);

  window.scrollTo({
    top: scrollValue,
    behavior: 'smooth',
  });
};

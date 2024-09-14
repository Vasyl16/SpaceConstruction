// Footer spoiler constants
const MOBILE_BREAKPOINT = 767.98;
const spoilersFooter = document.querySelectorAll('.spoiler-footer');
const titleFooterClass = 'spoiler-footer-title';
const contentFooterClass = 'spoiler-footer-content';

// We Offer spoiler constants
const spoilersWeOffer = document.querySelectorAll('.spoiler-we-offer');
const titleWeOfferClass = 'spoiler-we-offer-title';
const contentWeOfferClass = 'spoiler-we-offer-content';

const spoilersAll = [
  {
    spoiler: spoilersFooter,
    title: titleFooterClass,
    content: contentFooterClass,
    resolution: MOBILE_BREAKPOINT,
  },
  {
    spoiler: spoilersWeOffer,
    title: titleWeOfferClass,
    content: contentWeOfferClass,
    resolution: false,
  },
];

const toggleSpoiler = (content, title, contentClass, titleClass) => {
  const isExpanded =
    content.style.maxHeight && content.style.maxHeight !== '0px';

  content.style.maxHeight = isExpanded ? '0' : content.scrollHeight + 'px';
  content.style.opacity = isExpanded ? '0' : '1';
  content.classList.toggle(contentClass + '_a', !isExpanded);
  title.classList.toggle(titleClass + '_a', !isExpanded);
};

const collapseOtherSpoilers = (
  spoilers,
  currentSpoiler,
  contentClass,
  titleClass
) => {
  spoilers.forEach((otherSpoiler) => {
    if (otherSpoiler !== currentSpoiler) {
      const otherContent = otherSpoiler.querySelector('.' + contentClass);
      const otherTitle = otherSpoiler.querySelector('.' + titleClass);

      otherContent.classList.remove(contentClass + '_a');
      otherTitle.classList.remove(titleClass + '_a');

      otherContent.style.maxHeight = '';
      otherContent.style.opacity = '';
    }
  });
};

const collapseAllSpoilers = (currentSpoiler, contentClass, titleClass) => {
  const currentContent = currentSpoiler.querySelector('.' + contentClass);
  const currentTitle = currentSpoiler.querySelector('.' + titleClass);
  const ifInitialSpoilerActive = currentSpoiler
    .querySelector('.' + contentClass)
    .classList.contains(contentClass + '_active');

  if (ifInitialSpoilerActive) {
    currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
    currentContent.style.opacity = '1';
    currentContent.classList.remove(contentClass + '_active');
    return;
  }

  currentContent.classList.remove(contentClass + '_a');
  currentTitle.classList.remove(titleClass + '_a');
};

const spoilerFun = (spoilers, titleClass, contentClass, resolutionMax) => {
  spoilers.forEach((spoiler) => {
    const isUnderResolution =
      resolutionMax === false || window.innerWidth < resolutionMax;
    const title = spoiler.querySelector('.' + titleClass);
    const content = spoiler.querySelector('.' + contentClass);
    const newTitle = title.cloneNode(true);

    title.replaceWith(newTitle);

    const updatedTitle = spoiler.querySelector('.' + titleClass);

    collapseAllSpoilers(spoiler, contentClass, titleClass);

    if (isUnderResolution) {
      updatedTitle.addEventListener('click', () => {
        collapseOtherSpoilers(spoilers, spoiler, contentClass, titleClass);

        toggleSpoiler(content, updatedTitle, contentClass, titleClass);
      });
      return;
    }

    spoilers.forEach((otherSpoiler) => {
      const otherContent = otherSpoiler.querySelector('.' + contentClass);

      otherContent.style.maxHeight = '';
      otherContent.style.opacity = '';
      otherSpoiler
        .querySelector('.' + titleClass)
        .classList.remove(titleClass + '_a');
    });
  });
};

const setUpAllSpoilers = (spoilersAll) => {
  for (const spoilerObj of spoilersAll) {
    spoilerFun(
      spoilerObj.spoiler,
      spoilerObj.title,
      spoilerObj.content,
      spoilerObj.resolution
    );
  }
};

// Initial setup and window resize event listener
export const initAllSpoilers = () => {
  window.addEventListener('resize', () => {
    setUpAllSpoilers(spoilersAll);
  });

  setUpAllSpoilers(spoilersAll);
};

const MOBILE_BREAKPOINT = 767.98;

// Footer spoiler constants
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
    resolution: false, // No resolution limit for these spoilers
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

      otherContent.style.maxHeight = '0';
      otherContent.style.opacity = '0';
      otherContent.classList.remove(contentClass + '_a');

      otherTitle.classList.remove(titleClass + '_a');
    }
  });
};

const collapseAllSpoilers = (currentSpoiler, contentClass, titleClass) => {
  const currentContent = currentSpoiler.querySelector('.' + contentClass);
  const currentTitle = currentSpoiler.querySelector('.' + titleClass);

  if (
    currentSpoiler
      .querySelector('.' + contentClass)
      .classList.contains(contentClass + '_active')
  ) {
    currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
    currentContent.style.opacity = '1';
    currentContent.classList.remove(contentClass + '_active');

    return true;
  }

  currentContent.style.maxHeight = '0';
  currentContent.style.opacity = '0';
  currentContent.classList.remove(contentClass + '_a');

  currentTitle.classList.remove(titleClass + '_a');
};

// Function to initialize spoilers
const spoilerFun = (spoilers, titleClass, contentClass, resolutionMax) => {
  spoilers.forEach((spoiler) => {
    const title = spoiler.querySelector('.' + titleClass);
    const content = spoiler.querySelector('.' + contentClass);

    // Remove any existing event listener and replace title with a fresh node to prevent duplicate event listeners
    const newTitle = title.cloneNode(true);
    title.replaceWith(newTitle);
    const updatedTitle = spoiler.querySelector('.' + titleClass);

    try {
      const isUnderResolution =
        resolutionMax === false || window.innerWidth < resolutionMax;

      collapseAllSpoilers(spoiler, contentClass, titleClass);

      if (isUnderResolution) {
        updatedTitle.addEventListener('click', () => {
          // Toggle clicked spoiler, collapse others
          collapseOtherSpoilers(spoilers, spoiler, contentClass, titleClass);

          // Toggle current spoiler
          toggleSpoiler(content, updatedTitle, contentClass, titleClass);
        });
      } else {
        // If resolution exceeds the limit, expand all spoilers
        spoilers.forEach((otherSpoiler) => {
          const otherContent = otherSpoiler.querySelector('.' + contentClass);
          otherContent.style.maxHeight = otherContent.scrollHeight + 'px';
          otherContent.style.opacity = '1';
          otherSpoiler
            .querySelector('.' + titleClass)
            .classList.remove(titleClass + '_a');
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  });
};

// Function to set up all spoilers
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

// Debounce function to prevent excessive calls on window resize

// Initial setup and window resize event listener

export const initAllSpoilers = () => {
  window.addEventListener('resize', () => {
    setUpAllSpoilers(spoilersAll);
  });

  setUpAllSpoilers(spoilersAll);
};

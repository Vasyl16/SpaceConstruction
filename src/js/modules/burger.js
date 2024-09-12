const burger = document.querySelector('.burger-header');
const burgerIcon = document.querySelector('.burger-header__icon');
const burgerIconActiveClass = 'burger-header__icon_a';
const headerItems = document.querySelector('.header__items');
const headerItemsActiveClass = 'header__items_a';
const headerItemModified = document.querySelector('.header__item_m');
const headerItemActiveClass = 'header__item_a';

const burgerItems = [
  {
    item: burger,
    itemClassActive: null,
  },
  {
    item: burgerIcon,
    itemClassActive: burgerIconActiveClass,
  },
  {
    item: headerItems,
    itemClassActive: headerItemsActiveClass,
  },
  {
    item: headerItemModified,
    itemClassActive: headerItemActiveClass,
  },
];

const removeClasses = (items) => {
  items.forEach((itemObj) => {
    itemObj.item.classList.remove(itemObj.itemClassActive);
  });
};

const toggleBurgerMenu = (items) => {
  document.body.style.overflow = document.body.style.overflow ? '' : 'hidden';
  items.forEach((itemObj) => {
    itemObj.item.classList.toggle(itemObj.itemClassActive);
  });
};

const burgerMenuFun = () => {
  if (burger && burgerIcon && headerItems && headerItemModified) {
    burger.removeEventListener('click', () => {
      toggleBurgerMenu(burgerItems);
    });

    burger.addEventListener('click', () => {
      toggleBurgerMenu(burgerItems);
    });
  } else {
    console.error('One or more elements for the burger menu are missing!');
  }
};

export const initBurgerMenu = () => {
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1200) {
      burgerMenuFun();
    }
    if (window.innerWidth < 1200) {
      removeClasses(burgerItems);
    }
  });
  burgerMenuFun();
};

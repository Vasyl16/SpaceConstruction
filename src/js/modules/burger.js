import { blockScroll } from './blockScroll';

const burger = document.querySelector('.burger-header');
const burgerIcon = document.querySelector('.burger-header__icon');
const burgerIconActiveClass = 'burger-header__icon_a';
const headerItems = document.querySelector('.header__items');
const headerItemsActiveClass = 'header__items_a';
const headerItemModified = document.querySelector('.header__item_m');
const headerItemActiveClass = 'header__item_a';
const initBurgerWidth = 1200;

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
  try {
    items.forEach((itemObj) => {
      itemObj.item.classList.remove(itemObj.itemClassActive);
    });

    blockScroll(false);
  } catch (error) {
    console.error('some element is not valid', error.message);
  }
};

const toogleClasses = (items) => {
  try {
    items.forEach((itemObj) => {
      itemObj.item.classList.toggle(itemObj.itemClassActive);
    });
  } catch (error) {
    console.error('some element is not valid', error.message);
  }
};

const toggleBurgerMenu = () => {
  const body = document.body;

  body.classList.contains('block-scroll')
    ? blockScroll(false)
    : blockScroll(true);

  toogleClasses(burgerItems);
};
const burgerMenuFun = () => {
  burger.removeEventListener('click', toggleBurgerMenu);

  burger.addEventListener('click', toggleBurgerMenu);
};

export const initBurgerMenu = () => {
  window.addEventListener('resize', () => {
    if (window.innerWidth < initBurgerWidth) {
      burgerMenuFun();
      return;
    }

    removeClasses(burgerItems);
  });

  burgerMenuFun();
};

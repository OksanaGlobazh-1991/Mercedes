const burger = () => {
  const btnMenu = document.querySelector('.humburger-menu'),
      menuElem = document.querySelector('.menu'),
      menuList = document.querySelectorAll('.menu-list__link');

  const toggleMenu = () => {
    btnMenu.classList.toggle('humburger-menu-active');
    menuElem.classList.toggle('menu-active');
  }

  btnMenu.addEventListener('click', () => {
    toggleMenu();
  })

  menuList.forEach((item) => {
    item.addEventListener('click', () => {
      menuElem.classList.remove('menu-active');
      btnMenu.classList.remove('humburger-menu-active');
    })
  })
};

export default burger;
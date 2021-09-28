const smoothScroll = () => {
  const menuItem = document.querySelectorAll('.menu-list__link'),
      mainScroll = document.querySelector('.main__scroll'),
      newArray = [...menuItem, mainScroll];

  newArray.forEach((item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
        const ID = event.target.getAttribute('href').substr(1);
        document.getElementById(ID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
    })
  })
};

export default smoothScroll;
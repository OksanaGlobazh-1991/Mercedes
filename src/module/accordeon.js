const accordeon = () => {
  const btns = document.querySelectorAll('.feature__link'),
      featureSub = document.querySelectorAll('.feature-sub');

btns.forEach((item, index) => {
  item.addEventListener('click', () => {
    btns.forEach((btnItem, i) => {
      if (btnItem === item) {
        btnItem.classList.toggle('feature__link_active');
        featureSub[i].classList.toggle('hidden');
      } else {
        btnItem.classList.remove('feature__link_active');
        featureSub[i].classList.add('hidden');
      }
    })
  })
})
};

export default accordeon;
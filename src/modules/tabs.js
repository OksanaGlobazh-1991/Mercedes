const tabs = () => {
  const tabsItems = document.querySelectorAll('[data-tabs-handler]'),
      tabsImg = document.querySelectorAll('[data-tabs-field]'),
      sectionTitle = document.querySelectorAll('.section__title');
//design-list__item_active


for (let btn of tabsItems) {
  btn.addEventListener('click', () => {
      tabsItems.forEach((elem, i) => {
        elem.classList.remove('design-list__item_active');
      })
      btn.classList.add('design-list__item_active');

      tabsImg.forEach((content) => {
        if (content.dataset.tabsField === btn.dataset.tabsHandler) {
          content.classList.remove('hidden');
        } else {
          content.classList.add('hidden');
        }
      })

      
  })
}
};

export default tabs;
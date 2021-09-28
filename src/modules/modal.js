const modal = () => {
  const modalBtn = document.querySelectorAll('.more'),
      modalWindow = document.querySelector('.modal');

      modalBtn.forEach((item) => {
        item.addEventListener('click', () => {
          modalWindow.classList.remove('hidden');
        })
      })
      

      modalWindow.addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('modal__close') || target.classList.contains('overlay')) {
          modalWindow.classList.add('hidden');
        }
      })
};

export default modal;
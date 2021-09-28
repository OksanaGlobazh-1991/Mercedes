const sendForm = () => {
  const form = document.querySelectorAll('form');
//'https://jsonplaceholder.typicode.com'


form.forEach((item) => {
  item.addEventListener('submit', (event) => {
    event.preventDefault();
  
      let data = {}
  
      for (let { name, value } of item.elements) {
        if (name) { //исключили баттон
          data[name] = value;
        }
      }
  
      fetch('/server.php', {
        method: 'POST',
        body: JSON.stringify(data),
      })
        .then(response => {
        if (response.status === 200 || response.status === 201) {
          return response.json()
        } else {
          throw new Error(response.status)
        }
      })
        .then(data => {
            alert('Данные успешно сохранены!');
            item.reset(); //очистили инпуты
      })
        .catch(error => {
          alert('Ошибка отправки данных!');
      })
  })
})
};

export default sendForm;
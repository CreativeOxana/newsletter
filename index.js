const formular = document.querySelector('form');
const textBox = document.querySelector('input');

const newsTake = (event) => {
  event.preventDefault();
  const input = document.querySelector('input');
  const email = input.value;
  formular.textContent = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${email}.`;
};

formular.addEventListener('submit', newsTake);

const checkBox = (event) => {
  if (textBox.value === '' || !textBox.value.includes('@')) {
    textBox.classList.add('alertInput');
  } else {
    textBox.classList.remove('alertInput');
  }
};

formular.addEventListener('submit', newsTake);
textBox.addEventListener('input', checkBox);

const buttons = document.getElementsByTagName('button');
const inputFields = document.querySelectorAll('.input-field');

console.log(buttons);
console.log(inputFields);

inputFields.forEach((field) => field.addEventListener('blur', handleBlur));

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', handleClick);
}

const dynamicDisplay = document.getElementById('dynamicDisplay');

// genererar block
function handleClick(e) {
  e.preventDefault();
  console.log('handleClick, eventobjekt', e);
  const colorField = settings.color;
  const contentField = settings.content;

  const newElement = document.createElement('div');
  newElement.classList.add('new-element');
  newElement.style.backgroundColor = colorField.value;
  newElement.innerHTML = contentField.value;

  dynamicDisplay.insertAdjacentElement('beforeend', newElement);
}

const output = document.getElementById('output');
function handleBlur(e) {
  console.log('handleBlur, eventobjekt', e);
  const name = e.target.name;
  const value = e.target.value;

  const html = `<p onclick="handleClick(event) class="test">Fältet ${name} har värdet ${value}</p>`;

  output.insertAdjacentHTML('afterbegin', html);
}

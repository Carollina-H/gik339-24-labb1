// const buttons = document.getElementsByTagName('button');
//const inputFields = document.querySelectorAll('.input-field');

// console.log(buttons);
// console.log(inputFields);

// inputFields.forEach((field) => field.addEventListener('blur', handleBlur));

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', handleClick);
// }

// //const dynamicDisplay = document.getElementById('dynamicDisplay');

// // genererar block
// function handleClick(e) {
//   e.preventDefault();
//   console.log('handleClick, eventobjekt', e);
//   const colorField = settings.color;
//   const contentField = settings.content;

//   const newElement = document.createElement('div');
//   newElement.classList.add('new-element');
//   newElement.style.backgroundColor = colorField.value;
//   newElement.innerHTML = contentField.value;

//   dynamicDisplay.insertAdjacentElement('beforeend', newElement);
// }

// const output = document.getElementById('output');
// function handleBlur(e) {
//   console.log('handleBlur, eventobjekt', e);
//   const name = e.target.name;
//   const value = e.target.value;

//   const html = `<p onclick="handleClick(event) class="test">Fältet ${name} har värdet ${value}</p>`;

//   output.insertAdjacentHTML('afterbegin', html);
// }


// ------------------------------------------------------------

const checkBox = document.getElementById('divStyle');
const textFields = document.querySelectorAll('.textfield');
const buttons = document.getElementsByTagName('button');
const divElement = document.querySelector('.dynamicDiv');

console.log(checkBox);
console.log(textFields);
console.log(buttons);
console.log(divElement);

textFields.forEach((field) => field.addEventListener('input', handleInput));
function handleInput(e) {
    console.log('handleInput, eventobjekt', e);
    //const inputColor = ;
    //const inputContent = ;
    const colorValue = e.target.name;
    const contentValue = e.target.name;
    console.log(content);
    //let text = content;
    //const text = '<p oninput="handleInput()" class="test"> ${content} </p>';
    //console.log(divElement);
    divElement.innerHTML = contentValue;
    //`<p oninput="handleInput()" class="test"> ${content} </p>`
  
}

// function handleBlur(e) {
//   console.log('handleBlur, eventobjekt', e);
//   //const color = e.target.color;
//   const content = e.target.content;

//   const html = `<p onclick="handleClick(event) class="test">${content}</p>`;
//   divElement.insertAdjacentHTML('afterbegin', html);
// }

function handleClick(e) {
  e.preventDefault();
  console.log('handleClick, eventobjekt', e);
  const colorField = settings.color;
  const contentField = settings.content;
  divElement.style.backgroundColor = colorField.value;
  divElement.innerHTML = contentField.value; 
}


/*
Variabeln contentValue fungerar inte som den ska, specifiera att det ska vara conent.
Just nu fungerar funktionen/variabeln på både content och color.

Kan behöva ha for loop istället
Anteckning från L2, kan behöva switcha till sibling i input? 
console.log(section.firstElementChild.nextElementSibling.previousElementSibling.parentElement); //kan dyka in o komma tbx gsk mkt

*/
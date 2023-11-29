// Uppgift 4
const checkBox = document.getElementById('divStyle');
const textFields = document.querySelectorAll('.textfield');
const deleteBtn = document.getElementById('removeElement');
const divElement = document.querySelector('.dynamicDiv');

console.log(checkBox);
console.log(textFields);
console.log(deleteBtn);
console.log(divElement);

// Uppgift 5
function handleInput(e) {
    console.log(handleInput);
    if (e.target.name === 'content') { 
      const contentText = e.target.value;
      divElement.innerHTML = contentText; 
    }
}

// Uppgift 6
// Checkboxen

checkBox.addEventListener('change', function() {
  console.log("Colored divElement!")
  for (let textfield of textFields) {
    if (textfield.name === 'color') {
      divElement.style.background = textfield.value;
    }
  }
});

// Textfälten
textFields.forEach((field) => field.addEventListener('input', handleInput));

// Knappen
deleteBtn.addEventListener('click', function() {
  console.log("Removed divElement!")
  divElement.remove();
});

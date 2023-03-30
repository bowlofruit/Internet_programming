const inputElem = document.getElementById('input');
const outputElem = document.getElementById('output');

inputElem.addEventListener('input', () => {
  const input = inputElem.value;
  const output = input.replace(/\b(\w+)\b(\s+\1)+/g, '$1');
  outputElem.textContent = output;
});

const inputEmailElem = document.getElementById('input-email');
const outputEmailElem = document.getElementById('output-email');

inputEmailElem.addEventListener('input', () => {
  const email = inputEmailElem.value;
  const regex = /\b[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let result = '';
  if (regex.test(email)) {
    result = 'Адреса електронної пошти валідна';
  } 
  else {
    result = 'Адреса електронної пошти невалідна';
  }
  outputEmailElem.textContent = result;
});

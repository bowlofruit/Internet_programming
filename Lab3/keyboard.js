async function loadKeyboardData() {
  const response = await fetch('keyboard.json');
  const data = await response.json();
  const keys = data.keys;

  const keysContainer = document.querySelector('.keys');
  keys.forEach((keyData) => {
    const key = createKeyElement(keyData.value === "Backspace" ? "BC" : keyData.value);
    setKeyClickListener(key, keyData.value);
    keysContainer.appendChild(key);
  });
}

function createKeyElement(textContent) {
  const key = document.createElement('div');
  key.className = 'key';
  key.textContent = textContent;
  return key;
}

function setKeyClickListener(key, keyValue) {
  const output = document.getElementById('output');
  let lastKeyPressTime = 0;
  const repeatDelay = 200;

  key.addEventListener('click', () => {
    if (keyValue === "Backspace") {
      output.value = output.value.slice(0, -1);
    } else if (keyValue === "Shift") {
      pressedShift = !pressedShift;``
      key.className = pressedShift ? "pressedkey" : "key";
    } else {
      output.focus();
      output.setSelectionRange(output.value.length, output.value.length);
      output.value += pressedShift ? key.textContent : key.textContent.toLowerCase();
    }
  });
}


let pressedShift = false;
loadKeyboardData();
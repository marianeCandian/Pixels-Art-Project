function selectedClass() {
  const corPreta = document.getElementById('color1');
  corPreta.classList.add('selected');
}
selectedClass();

function modificaCor(event) {
  const getElement = document.querySelector('.selected');
  getElement.classList.remove('selected');
  event.target.classList.add('selected');
}

const colorPalette = document.querySelector('#color-palette');
colorPalette.addEventListener('click', modificaCor);

function colorPixels(event2) {
  const getSelected = document.querySelector('.selected');
  const cor = getComputedStyle(getSelected).backgroundColor;
  event2.target.style.backgroundColor = cor;
}
const getPixels = document.getElementById('pixel-board');
getPixels.addEventListener('click', colorPixels);

function creatButton() {
  let getDiv = document.querySelector('#bnt-content');
  let newButton = document.createElement('button');
  let newButtonId = 'clear-board';

  newButton.innerHTML = 'Limpar';
  newButton.id = newButtonId;
  getDiv.appendChild(newButton);
}

creatButton();
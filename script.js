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
  const getDiv = document.querySelector('#bnt-content');
  const newButton = document.createElement('button');
  const newButtonId = 'clear-board';

  newButton.innerHTML = 'Limpar';
  newButton.id = newButtonId;
  getDiv.appendChild(newButton);
}

creatButton();

let getButton = document.querySelector('#clear-board');
getButton.addEventListener('click', () => {
  const getPixelBoard = document.querySelectorAll('.pixel');
  for (let e = 0; e < getPixelBoard.length; e += 1) {
    getPixelBoard[e].style.backgroundColor = 'white';
  }
});

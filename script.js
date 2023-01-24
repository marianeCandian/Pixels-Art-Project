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

function colorPixels(e) {
  const getSelected = document.querySelector('.selected');
  const cor = getComputedStyle(getSelected).backgroundColor;
  e.target.style.backgroundColor = cor;
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

const getButton = document.querySelector('#clear-board');
getButton.addEventListener('click', () => {
  const getPixelBoard = document.querySelectorAll('.pixel');
  for (let e = 0; e < getPixelBoard.length; e += 1) {
    getPixelBoard[e].style.backgroundColor = 'white';
  }
});

function trocandoPixel() {
  const getBoxe = document.querySelectorAll('.boxe');
  for (let i = 0; i < getBoxe.length; i += 1) {
    if (getBoxe[i].parentNode) {
      getBoxe[i].parentNode.removeChild(getBoxe[i]);
    }
  };
}

const getButton2 = document.querySelector('#generate-board');
getButton2.addEventListener('click', trocandoPixel);

function criandoNovoBoard() {
  const getPixelBoard = document.getElementById('pixel-board');
  const getInput = document.getElementById('board-size');
  if (getInput.value.length === 0) {
    return alert('Board Inválido');
  } if (getInput.value < 5) {
    creandoPixels(5);
  } else if (getInput.value > 50) {
    creandoPixels(50);
  } else {
    creandoPixels(getInput.value);
    getPixelBoard.style.gridTemplateColumns = 'repeat(${getInput.value}, 40px)';
  }
}
criandoNovoBoard();

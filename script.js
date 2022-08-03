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
  }
  // const getInput = document.querySelector('#board-size');
  // for (let i = 0; i < getInput.length; i += 1) {
  //   let getPixelBoard = document.querySelector('#pixel-board');
  //   let creatBoxe = document.createElement('div');
  //   creatBoxe.classList.add('boxe');
  //   creatBoxe.appendChild(getPixelBoard);

}
const getButton2 = document.querySelector('#generate-board');
getButton2.addEventListener('click', trocandoPixel);
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

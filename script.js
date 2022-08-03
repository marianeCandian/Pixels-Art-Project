function selectedClass() {
  const corPreta = document.getElementById('color1');
  corPreta.classList.add('selected');
}
selectedClass();

function selecionandoCor() {
  const getElement = document.querySelectorAll('.color');
  const getElementeSelected = document.querySelector('.selected');
  getElementeSelected.classList.remove('selected');
  for (let index = 0; index < getElement.length; index += 1) {
    if (getElement[index].classList === 'selected') {
      getElement[index].classList.remove('selected');
    } else {
      getElement[index].addEventListener('click', function (event) {
        event.target.classList.add('selected');
      });
    }
  }
}

selecionandoCor();
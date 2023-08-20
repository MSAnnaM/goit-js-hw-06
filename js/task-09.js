function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorBackground = document.querySelector('.change-color');
const colorTexte = document.querySelector('.color');
const changeColor = () => {
  const color = document.body.style.background = getRandomHexColor();
  colorTexte.innerHTML = color;
}
colorBackground.addEventListener('click', changeColor)
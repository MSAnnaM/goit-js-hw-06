function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputNumber = document.querySelector("input");
const btnCreate = inputNumber.nextElementSibling;
const btnDestroy = btnCreate.nextElementSibling;
const pasteBlock = document.getElementById("boxes");
let width = 30;
let height = 30;
function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    let blockCreate = `<div width = "${width}px" height = "${height}px" style = "background: ${getRandomHexColor()}">fghj</div>`;
    pasteBlock.insertAdjacentHTML("beforeend", blockCreate);
    // let blockCreate = document.createElement('div');
    // blockCreate.setAttribute('width', width+'px');
    // blockCreate.setAttribute('height', height + 'px');
    width += 10;
    height += 10;

    // blockCreate.style.background = getRandomHexColor();
    // pasteBlock.append(blockCreate);
  }
}
// console.log(createBoxes(10));

const createEvent = (event) => {
  const amount = +inputNumber.value;
  createBoxes(amount);
};

inputNumber.addEventListener('change', (event) => {
  event.currentTarget.reset();
})

function destroyBoxes() {
  pasteBlock.remove(pasteBlock.children);
}
const killThemAll = () => {
  destroyBoxes()
}
btnCreate.addEventListener("click", createEvent);
btnDestroy.addEventListener('click', killThemAll);

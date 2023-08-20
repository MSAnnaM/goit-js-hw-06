function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputNumber = document.querySelector("input");
const btnCreate = inputNumber.nextElementSibling;
const btnDestroy = btnCreate.nextElementSibling;
const pasteBlock = document.getElementById("boxes");

function createBoxes(amount) {
  let width = 30;
let height = 30;
  for (let i = 0; i < amount; i++) {
    let blockCreate = `<div style = "background: ${getRandomHexColor()}; width: ${width}px; height:${height}px"}"></div>`;
    pasteBlock.insertAdjacentHTML("beforeend", blockCreate);
    width += 10;
    height += 10;
  }
}

const createEvent = (event) => {
  const amount = +inputNumber.value;
  createBoxes(amount);
  inputNumber.value = "";
};

function destroyBoxes() {
  pasteBlock.innerHTML = '';
}
const killEmAll = () => {
  destroyBoxes();
};
btnCreate.addEventListener("click", createEvent);
btnDestroy.addEventListener("click", killEmAll);

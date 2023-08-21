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
  let size = 30;
  const arrDiv = [];
  for (let i = 0; i < amount; i++) {
    let blockCreate = `<div style = "background: ${getRandomHexColor()}; width: ${size}px; height:${size}px"}"></div>`;
    arrDiv.push(blockCreate);
    size += 10;
  }
  pasteBlock.insertAdjacentHTML("beforeend", arrDiv.join(""));
}

const createEvent = (event) => {
  const amount = +inputNumber.value;
  createBoxes(amount);
  inputNumber.value = "";
};

function destroyBoxes() {
  pasteBlock.innerHTML = "";
}
const killEmAll = () => {
  destroyBoxes();
};
btnCreate.addEventListener("click", createEvent);
btnDestroy.addEventListener("click", killEmAll);

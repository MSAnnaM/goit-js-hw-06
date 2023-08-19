let counterValue = 0;
let span = document.getElementById('value');
const incrementButton = document.querySelector('button[data-action="increment"]');
const counterIncrement = () => {
    counterValue++;
    span.innerHTML = counterValue
}
incrementButton.addEventListener('click', counterIncrement);
const decrementButton = document.querySelector('button[data-action="decrement"]');
const counterDecrement = () => {
    counterValue--;
    span.innerHTML = counterValue
}
decrementButton.addEventListener('click', counterDecrement);

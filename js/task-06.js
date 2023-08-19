const inputArea = document.getElementById('validation-input');
console.log(inputArea);
// let inputText = inputArea.addEventListener('input', (event) => {
//     console.log(event.currentTarget.value.length);
//     return event.currentTarget.value.length;
    
    
// }
// )
// console.log(inputText);
const styleInput = () => {
    
    if (this.value.length === +this.getAttribute('data-length')) {
        console.log(this.getAttribute('data-length'));
        inputArea.classList.remove('invalid');
        inputArea.classList.add('valid');
    }
   inputArea.classList.remove('valid');
    inputArea.classList.add('invalid');
}

inputArea.addEventListener('blur', styleInput);
console.log(typeof inputText);
 console.log(typeof +inputArea.getAttribute('data-length'))


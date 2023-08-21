const inputArea = document.getElementById('validation-input');

const styleInput = (event) => {
    const inputText = event.currentTarget.value.length;
    inputArea.classList.remove('valid','invalid')
    
    if (inputText === +inputArea.getAttribute('data-length')) {
        inputArea.classList.add('valid');
    } else{
    inputArea.classList.add('invalid');}
}

inputArea.addEventListener('blur', styleInput);


const inputChange = document.getElementById('font-size-control');
const spanTexte = document.getElementById('text');
const texteChange = (event) => {
    spanTexte.style.fontSize = event.currentTarget.value+'px'
}
inputChange.addEventListener('input', texteChange);
let firstValue =  document.getElementById('first-value');
let secondValue = document.getElementById('second-value');
let thirdValue =  document.getElementById('third-value');
const btnSum = document.getElementById('btn-sum');

const myFunction = () => { 
    let sum = parseInt(firstValue.value) + parseInt(secondValue.value);
    thirdValue.value = sum; 
}

btnSum.addEventListener('click', myFunction);
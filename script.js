let counterResult = document.querySelector('[data-counter]');
let minusBtn = document.querySelector('#minus');
let plusBtn = document.querySelector('#plus');
let resetBtn = document.querySelector('#resetBtn');

plusBtn.addEventListener ('click', add);
minusBtn.addEventListener ('click', sub);
resetBtn.addEventListener ('click', res);

let value = 0;

function add(){
    value++;
    counterResult.innerHTML = value;
}

function sub(){
    value--;
    counterResult.innerHTML = value;
} 

function res(){
    value = 0;
    counterResult.innerHTML =  value;
}
let counterResult = document.querySelector('[data-counter]');
let minusBtn = document.querySelector('#minus');
let plusBtn = document.querySelector('#plus');

plusBtn.addEventListener ('click', add);
minusBtn.addEventListener ('click', sub);

let value = 0;

function add(){
    value++;
    counterResult.innerHTML = value;
}

function sub(){
    value--;
    counterResult.innerHTML = value;
}
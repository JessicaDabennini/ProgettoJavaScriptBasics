let counter=document.createElement('div');
counter.textContent="Counter";
document.body.appendChild(counter);

let display = document.createElement('div');
counter.appendChild(display);
display.className = "display";

let minusBtn = document.createElement("button");
minusBtn.textContent = '-';
display.appendChild(minusBtn);
minusBtn.addEventListener ('click', sub);

let counterResult = document.createElement("p");
counterResult.textContent = '0';
display.appendChild(counterResult);

let plusBtn = document.createElement("button");
plusBtn.textContent = '+';
display.appendChild(plusBtn);
plusBtn.addEventListener ('click', add);

let resetBtn = document.createElement("button");
resetBtn.textContent = 'Reset';
counter.appendChild(resetBtn);
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
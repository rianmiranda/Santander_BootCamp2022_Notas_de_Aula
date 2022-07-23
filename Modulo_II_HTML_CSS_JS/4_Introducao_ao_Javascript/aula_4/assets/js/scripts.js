var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function redIfLessThanZero () {
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = "red";
    } else {
        currentNumberWrapper.style.color = "black";
    }
}

function increment() {
    if (currentNumber < 10) {
        currentNumber ++;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    redIfLessThanZero()
}

function decrement() {
    if (currentNumber > -10) {
        currentNumber --;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    redIfLessThanZero()
}

var btnMinus = document.getElementsByTagName('button')[0];
btnMinus.addEventListener("click", decrement);

var btnPlus = document.getElementsByTagName('button')[1];
btnPlus.addEventListener("click", increment);


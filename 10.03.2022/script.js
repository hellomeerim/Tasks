/*
let start1 = document.getElementById('start');
let stop = document.getElementById('stop');
let restart = document.getElementById('restart');

let result = document.getElementsByClassName('result');

let intervalId;
let count = 0;

function start() {
    intervalId = setInterval(function () {
        result.textContent = count
        count++
    },1000)
}

start1.onclick = start;

stop.onclick = () => {
    clearInterval(intervalId)
}

restart.onclick = () => {
    result.textContent = count = 0;
}



*/
let start1 = document.getElementById('start');
let stop = document.getElementById('stop');
let restart = document.getElementById('restart');
let result = document.getElementById('result');

let intervalId;
let count = 0;

function start(){
    intervalId = setInterval(function () {
        result.textContent = count;
        count++
    },1000)
}
start1.onclick = start;

stop.onclick = () =>{
    clearInterval(intervalId)
}

restart.onclick = () => {
    result.textContent = count = 0;
}

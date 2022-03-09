let notification = document.querySelector('#click');

const changeStyle = () => {
    notification.style.width = '500px';
    notification.style.backgroundColor = '#D3E1FC';
    notification.style.color = '#084298';
    notification.textContent = 'A simple primary alert—check it out!';
    setTimeout(function(){
        document.getElementById('click').style.display = 'none';
    }, 1500);
}

notification.addEventListener('click',() => {
    changeStyle()
});

/*
1)const changeStyle = () => {
    notification.style.width = '500px';
    notification.style.backgroundColor = '#D3E1FC';
    notification.style.color = '#084298';
    notification.textContent = 'A simple primary alert—check it out!';
    setTimeout(function(){
        document.getElementById('click').style.display = 'none';
    }, 1500);
}

2)const changeStyle = () => {
    notification.style.width = '600px';
    notification.style.backgroundColor = '#e2e3e5';
    notification.style.color = '#41464b';
    notification.textContent = A simple secondary alert—check it out!';
    setTimeout(function(){
        document.getElementById('click').style.display = 'none';
    }, 1500);
}

3)const changeStyle = () => {
    notification.style.width = '600px';
    notification.style.backgroundColor = '#d1e7dd';
    notification.style.color = '#0f5132';
    notification.textContent = 'A simple success alert—check it out!';
    setTimeout(function(){
        document.getElementById('click').style.display = 'none';
    }, 1500);
}

4)const changeStyle = () => {
    notification.style.width = '600px';
    notification.style.backgroundColor = '#f8d7da';
    notification.style.color = '#842029';
    notification.textContent = 'A simple danger alert—check it out!';
    setTimeout(function(){
        document.getElementById('click').style.display = 'none';
    }, 1500);
}

5)const changeStyle = () => {
    notification.style.width = '600px';
    notification.style.backgroundColor = '#fff3cd';
    notification.style.color = '#664d03';
    notification.textContent = 'A simple warning alert—check it out!';
    setTimeout(function(){
        document.getElementById('click').style.display = 'none';
    }, 1500);
}

6)const changeStyle = () => {
    notification.style.width = '600px';
    notification.style.backgroundColor = '#cff4fc';
    notification.style.color = '#055160';
    notification.textContent = 'A simple info alert—check it out!';
    setTimeout(function(){
        document.getElementById('click').style.display = 'none';
    }, 1500);
}

7)const changeStyle = () => {
    notification.style.width = '600px';
    notification.style.backgroundColor = '#fefefe';
    notification.style.color = '#636464';
    notification.textContent = 'A simple light alert—check it out!';
    setTimeout(function(){
        document.getElementById('click').style.display = 'none';
    }, 1500);
}

8)const changeStyle = () => {
    notification.style.width = '600px';
    notification.style.backgroundColor = '#d3d3d4';
    notification.style.color = '#141619';
    notification.textContent = 'A simple dark alert—check it out!';
    setTimeout(function(){
        document.getElementById('click').style.display = 'none';
    }, 1500);
}

*/

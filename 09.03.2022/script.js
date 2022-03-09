let button = document.querySelector('#click');
let notification = document.querySelector('#message');

const showNotification = (options) => {
    notification.textContent = options.html;
    notification.classList.add(options.className);
    setTimeout(function(){
        document.getElementById('click').style.display = 'none';
    }, 1500);
    setTimeout(hideNotification,1500);
    notification.classList.add('d-block');
    notification.style.width = '500px';
    notification.style.backgroundColor = '#D3E1FC';
    notification.style.color = '#084298';
    notification.textContent = 'A simple primary alert—check it out!';
}

button.addEventListener('click',() => {
    showNotification()
});

button.onclick = () => {
    showNotification({html:'Hello, World', className:'Welcome'});
};

const hideNotification = () => {
    notification.classList.remove('d-block');
}


/*
1)  notification.style.width = '500px';
    notification.style.backgroundColor = '#D3E1FC';
    notification.style.color = '#084298';
    notification.textContent = 'A simple primary alert—check it out!';


2)  notification.style.width = '600px';
    notification.style.backgroundColor = '#e2e3e5';
    notification.style.color = '#41464b';
    notification.textContent = A simple secondary alert—check it out!';

3)  notification.style.width = '600px';
    notification.style.backgroundColor = '#d1e7dd';
    notification.style.color = '#0f5132';
    notification.textContent = 'A simple success alert—check it out!';


4)  notification.style.width = '600px';
    notification.style.backgroundColor = '#f8d7da';
    notification.style.color = '#842029';
    notification.textContent = 'A simple danger alert—check it out!';

5)  notification.style.width = '600px';
    notification.style.backgroundColor = '#fff3cd';
    notification.style.color = '#664d03';
    notification.textContent = 'A simple warning alert—check it out!';

6)  notification.style.width = '600px';
    notification.style.backgroundColor = '#cff4fc';
    notification.style.color = '#055160';
    notification.textContent = 'A simple info alert—check it out!';

7)  notification.style.width = '600px';
    notification.style.backgroundColor = '#fefefe';
    notification.style.color = '#636464';
    notification.textContent = 'A simple light alert—check it out!';

8)  notification.style.width = '600px';
    notification.style.backgroundColor = '#d3d3d4';
    notification.style.color = '#141619';
    notification.textContent = 'A simple dark alert—check it out!';

*/



/************ Test *************/
/*
let button = document.querySelector('#click');

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
});*/
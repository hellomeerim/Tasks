/*
1) Напишите функцию showNotification(options), которая создаёт уведомление:
    <div class="notification"> с заданным содержимым.
    Уведомление должно автоматически исчезнуть через 1,5 секунды.

Пример объекта options:
// показывает элемент с текстом "Hello" рядом с правой верхней частью окна.
showNotification({
html: "Hello!",      // HTML-уведомление
className: "welcome" // дополнительный класс для div (необязательно)
});*/

let info = document.querySelector('.notification');

function showNotification() {
    info.classList.add('notification');
    //info.classList.remove('notification');
}

setTimeout(showNotification, 1500);

setTimeout(function(){
    document.getElementById('message').style.display = 'none';
}, 1500);


/*1) Если переменная x равна 7, то выведите окошко с сообщением 'Верно', иначе выведите 'Неверно'.*/
let x = 7;
if (x == 7) {
    alert('Верно');
} else {
    alert('Неверно');
}

/*2) Если переменная a равна или меньше 1, а переменная b больше или равна 3,
    то выведите сумму этих переменных, иначе выведите их результат вычитания.*/
let a = 1 ;
let b  = 4;
if (a <= 1 && b >= 3){
    alert (a + b);
} else {
    alert (a - b);
}

/*3) В переменной time лежит число от 0 до 59. Определите в какую четверть
часа попадает это число (в первую, вторую, третью или четвертую).
Например: если переменная time = 5, то она попадает в первую четверть.
    В противном случае вывести "Значение не попадает в диапазон от 0 до 59".*/
let time = 2;
if (time >= 0 && time <= 14){
    alert('В первую четверть.');
} else if (time >= 15 && time <= 30) {
    alert('Во вторую четверть.');
} else if (time >= 31 && time <= 45) {
    alert('В третью четверть.');
} else if (time >= 46 && time <= 59) {
    alert('В четвертую четверть.');
} else if (time > 59){
    alert ('Значение не попадает в диапазон от 0 до 59.');
} else (time < 0){
    alert ('Значение не попадает в диапазон от 0 до 59.');
}

/*4) Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'.
    Проверьте работу скрипта при test, равном true, false.
    Напишите два варианта скрипта - с кор*/
let test = true;
/*if (test !== true ) {
    alert('Верно');
} else {
    alert('Неверно');
}*/

let access = test !== true ? 'Верно' : 'Неверно';
alert(access);



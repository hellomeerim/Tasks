// 1. Схема

let info = prompt ('Кто пришел?');
if (info === 'Админ') {

    let password = prompt('Пароль?');

    if (password === 'Черный властелин') {
        alert( 'Добро пожаловать!' );
    } else if (password === null) {
        alert( 'Вход отменен' );
    } else {
        alert( 'Пароль неверен' );
    }
} else if(info === null) {
    alert('Вход отменен');
} else {
    alert ('Я вас не знаю');
}

/*2) Создайте массив с числами. Перебирая элементы созданного массива с помощью
цикла выведите только те элементы массива, которые больше нуля и меньше 10.*/
let numbers = [0,1,2,3,4,5,10,11,12,6,7]
for (i = 1; i < numbers.length; i++){
    if(numbers[i] > 9){
        continue;
    }
    console.log(numbers[i]); // 1,2,3,4,5,6,7
}

/*3) У нас есть массив с элементами 1, 2, 5, 6, 88, 5.
С помощью цикла надо найти сумму элементов этого массива.*/
let sum = [1,2,3,4,88,5];
let result = 0;
for(let b = 0; b < sum.length; b++){
    result += sum[b];
}
console.log(result); // 103


/*4) Создайте массив с различными числами. Должно быть как минимум 10 элементов
внутри массива. С помощью цикла найдите сумму квадратов элементов этого массива.
    Квадрат числа 5 будет 25.*/
let count = [1,2,3,4,5,6,7,8,9,10];
let sum1 =[];
let multiply = 0;
for(let a = 0; a < count.length; a++){
    multiply = count[a]*count[a];
    sum1.push(multiply);
    console.log(multiply)
}
let totalSum = 0;
for( c = 0, sum2 = 0; c < sum1.length; c++) {
    totalSum += sum1[c];
}
console.log(totalSum);





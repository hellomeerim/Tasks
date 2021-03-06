/******** Задание **********/
/*Напишите функцию, которая возвращает минимальное значение
 из двух чисел. Эти два числа, должны передаваться как параметры*/

function min(a,b){
    if (a < b){
        return a;
    } else {
        return b;
    }
}
min(3,1)
let result = min();

//Напишите функцию которая берет какое то значение и выводит в браузер
function any (c = 4){
    console.log(c);
}
any();
let result2 = any();

// Соедините эти функции друг с другом
function together (result, result2){
    console.log(together);
}
together();

/******** 1) Напишите функцию hello(), которая при вызове будет возвращать строку
 «Привет, JavaScript!» **********/
function  hello() {
    return 'Привет, JavaScript!'
}
hello();
console.log(hello());

/******** 2) Нужно создать функцию, которая будет выводить куб числа на страничку.
 Число должно передаваться параметром. **********/
function cube(number = 3) {
    return number * number * number;
}
console.log(cube());
/******** 3) Напишите функцию getName(), которая при вызове будет принимать переменную
 name (например, «Василий») и выводить строку (в нашем случае «Привет, Василий»).
 В случае отсутствующего параметра выводить «Привет, гость» **********/
function getName(){
    let name = prompt('Имя');
    if (name === ''){
        alert('Привет, гость');
    } else{
        alert( 'Привет, ' + name);
    }
}
getName();
/******** 4) На старте вы получаете массив. Необходимо написать функцию, которая будет
 возвращать массив удвоенных значений исходного массива.
 Пример кода:
 example([1, 2, 3]) => [2, 4, 6]
 example([4, 1, 1, 1, 4]) => [8, 2, 2, 2, 8]
 example([2, 2, 2, 2, 2, 2]) => [4, 4, 4, 4, 4, 4] **********/

function total (num1) {
    const mass = [];
    for(let i = 0; i < num1.length; i++){
        let  count = num1[i]+ num1[i];
        mass.push(count);
    }
    return mass;
}
total([1,2,3]);
total([4, 1, 1, 1, 4]);
total([2, 2, 2, 2, 2, 2]);
console.log(mass);

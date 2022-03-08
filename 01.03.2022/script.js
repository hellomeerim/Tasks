/*1) На старте вы получаете массив. Необходимо написать функцию, которая будет
возвращать массив удвоенных значений исходного массива.
    Пример кода:
    example([1, 2, 3]) => [2, 4, 6]
example([4, 1, 1, 1, 4]) => [8, 2, 2, 2, 8]
example([2, 2, 2, 2, 2, 2]) => [4, 4, 4, 4, 4, 4]*/
const example = [1,2,3];
// const example = [4,1,1,1,2];
// const example = [2,2,2,2,2,2];
let count = example.map((value) => {
    return value + value;
})
console.log(count);

/*2) Имеется массив с элементами 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20;
Нужно найти перебирая эти элементы с помощью цикла четные числа.
    И эти найденные четные числа должны быть собраны в одном массиве.*/
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let filtered = numbers.filter(
    function (currentValue) {
        return currentValue % 2 == 0
    })
console.log(filtered);

/*3) Заполните массив 10-ю иксами с помощью цикла.    [x,x...]*/
let mass = [];
for (let i=0; i<=10; i++){
    mass[i] ='x';
}
console.log(mass);

/*4) У нас есть массив с элементами 1, 2, 115, 4, 58, 5 ,7 ,99.
С помощью цикла for и оператора if нужно проверить есть ли в массиве число
со значением, равным = 4. Если есть - надо вывести окошко с сообщением = 'ЕСТЬ!!!'*/
let numbers2 = [1,2,115,4,58,5,7,99];
for( let a=0; a < numbers2.length; a++ ) {
    if (numbers2[a] == 4) {
        alert('ЕСТЬ!!!');
    }
}

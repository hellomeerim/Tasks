/*1) Дан массив с элементами [2, 3, 4, 5, 6, 7].
    С помощью цикла for найдите произведение элементов этого массива.
    Общий результат сохранить в объекте с соответствующим свойством.
    Например: 2 * 3 = 6 -> 6 * 4 и.т.д.*/
/******* Version1 (simple) ********/
const numbers = [2, 3, 4, 5, 6, 7];
/*let mass = 1;
for (let i = 0; i < numbers.length; i++){
     result = mass *= numbers[i]; // 5040
}
let obj = {
    mass:result
};
console.log(obj);
console.log(mass);*/

/******* Version2 (reduce) ********/
let result = numbers.reduce(function (sum,elem) {
    return sum * elem;
}, 1);
console.log(result); // 5040
let obj = {
    mass:result
};
console.log(obj);

/*2) Напишите функцию, которая заполняет новый массив предоставленным значением
и затем ее возвращает. Функция должна первым параметром принимать
элемент (значение для массива), вторым параметром размер массива.
    Например: myFunc('a', 3)   // ['a', 'a', 'a']*/
/******* Version1 ********/
const triple = (arraySize, value) => {
    const result1 = [];
    for (let i = 0; i < arraySize; i++) {
        result1.push(value);
    }
    return result1;
};
console.log(triple(3, "a")); // ["a", "a", "a"]

/******* Version2  ********/
const triple2 = (arraySize, value) => {
    return new Array(arraySize).fill(value);
};

console.log(triple2(3, "a")); // ["a", "a", "a"]

/*3) Напишите функцию, которая разворачивает массив в обратном порядке
и затем ее возвращает.  Функция наша  принимает массив любых элементов.
    Например:
const data = [1, 2, 3];
myFunc(data);  // [3, 2, 1];*/
/******* Version1 (simple) ********/
/*const data = [1, 2, 3];
console.log(data);

const reversed = data.reverse();
console.log(reversed);*/

/******* Version2 (function) ********/
function myFunc() {
    const data = [1, 2, 3];
    data.reverse();
    console.log(data);
}
myFunc();
//console.log(myFunc());





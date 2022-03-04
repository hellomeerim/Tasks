/*
1) Составьте программу, которая принимает с клавиатуры числа, пока не будет введено
значение 99. Программа должна подсчитать, сколько чисел было введено с клавиатуры
(не считая значения 99) и вывести эту информацию на экран.

    ввод: 59, 74, 48, 70, 99 ⇒ вывод: кол-во чисел - 4
*/

let btnStart = document.getElementById('start-project-one');
let btnResult = document.getElementById('result-project-one');

let a;
a = 0;
let b;

let projectOne = () => {
    b = prompt('Введите число:');
    while (b != 99) {
        a += 1;
        b = prompt('Введите число:');
    }
}
btnStart.onclick = projectOne;
btnResult.onclick = () =>{
    alert(`Количество чисел - ${a}`);
}


/*2) Составьте программу, которая принимает с клавиатуры числа, пока не будет введено
значение 999. Программа должна подсчитать, сколько чисел было введено с клавиатуры,
    чему равна сумма этих чисел (не считая значения 999), и вывести эту информацию
на экран.

    ввод: 89, 174, 27, 999 ⇒ вывод: кол-во чисел - 3; сумма = 290*/

let btnStart2 = document.getElementById('start-project-two');
let btnResult2 = document.getElementById('result-project-two');

let d;
let sum = 0;
let c = 0;

let projectTwo = () => {
    d = prompt('Введите число:');
    while (d != 999) {
        sum = sum + Number(d)
        console.log(sum)
        c++
        d = prompt('Введите число:')
    }
}
btnStart2.onclick = projectTwo;
btnResult2.onclick = () =>{
    alert(`Количество чисел -  ${c}`);
    alert(`Cумма =  ${sum}`);
}

/*
3) Составьте программу, которая принимает с клавиатуры два целых числа, первое из которых - год рождения ученика,
    а второе – нынешний (текущий) год.
    Программа должна вывести на экран возраст ученика (в целых годах).

ввод: 2006, 2018 ⇒ вывод: вам 12 лет)*/

let date = new Date;

let getDate = () =>{
    let year = prompt('Введите свой год рождения')
    let fullYear = date.getFullYear() - Number(year)
    return fullYear
}

alert(`Вам ${getDate()} лет`)















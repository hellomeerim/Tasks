/*1) Создайте объект заработных плат.
    Назовите userSalaries.
    Свойствами выступают: Ella, Sophia, Ellie
Выведите на экран зарплату Ella, Sophia.*/
let userSalaries = {
    Ella :50000,
    Sophia :55000,
    Ellie :60000
}

console.log(`${userSalaries.Ella}, ${userSalaries.Sophia}`);

/*
2) Создайте объект с ключами a, b и c значениями 5 , 6 и 10.
Найдите сумму его элементов.
*/
let value = {
    a : 5,
    b : 6,
    c : 10
}

console.log(value.a + value.b + value.c);

/*
3) let number;
if(data === true){
    number = 3;
} else{
    number = 5;
}

Сделайте рефакторинг кода, с помощью тернарного оператора.*/

let data = true;
let number = data === true ? 3 : 5 ;
console.log(number);

/*4) Используя конструкцию if..else, напишите код, который будет спрашивать: «Кто такой В.В.ПУТИН?».
Если посетитель вводит «Президент», то выводить «Верно!», если что-то другое – выводить «Не знаете?».*/
let question = prompt('Кто такой В.В.ПУТИН?');
if (question == 'Президент'){
    alert('Верно!');
} else {
    alert('Не знаете?');
};

console.log(question);


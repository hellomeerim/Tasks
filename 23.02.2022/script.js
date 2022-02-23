/*1) Создайте объект заработных плат.
    Назовите userSalaries.
    Свойствами выступают: Ella, Sophia, Ellie
Выведите на экран зарплату Ella, Sophia.*/
let userSalaries = {
    'Ella' :'50 тыс',
    'Sophia' :'55 тыс',
    'Ellie' :'60 тыс',
}

alert (userSalaries['Ella']);
alert (userSalaries['Sophia']);

/*
2) Создайте объект с ключами a, b и c значениями 5 , 6 и 10.
Найдите сумму его элементов.
*/
let value = {
    a : 5,
    b : 6,
    c : 10
}

let result = (value.a + value.b + value.c)
alert(result);
console.log(result)

/*
3) let number;
if(data === true){
    number = 3;
} else{
    number = 5;
}

Сделайте рефакторинг кода, с помощью тернарного оператора.*/

let number = true;
let access = number === true ? 3 : 5 ;
alert(access);
console.log(access);

/*4) Используя конструкцию if..else, напишите код, который будет спрашивать: «Кто такой В.В.ПУТИН?».
Если посетитель вводит «Президент», то выводить «Верно!», если что-то другое – выводить «Не знаете?».*/
let question = prompt('Кто такой В.В.ПУТИН?');
if (question == 'Президент'){
    alert('Верно!');
} else {
    alert('Не знаете?');
};

console.log(question);


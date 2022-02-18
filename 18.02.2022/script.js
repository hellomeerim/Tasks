/* 1) Переделать этот код так, чтобы в нем были операторы
инкремента и декремента:
let num = 10;
num = num + 1;
num = num - 1;
console.log(num); */
let num = 10;
num = num + 1 //11
console.log(num);

let num2 = 10;
num2 = num2 - 1; //9
console.log(num2);

/* 2)  Создайте переменную name и присвойте ей ваше имя.
Выведите на экран строку'Привет, %Имя%!'. */
let name = 'Mээрим!';
let hello =  'Привет';
console.log (`${hello}, ${name}`)
alert (`${hello}, ${name}`);

/* 3)  Создайте переменную age и присвойте ей ваш возраст.
Выведите на экран 'Мне %Возраст% лет!'. */
let age = '24!';
let me =  'Мне';
console.log (`${me}, ${age}`)
alert (`${me}, ${age}`);

/*4)  Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат
присвойте переменной c. Затем создайте переменную d, присвойте ей значение 7.
Сложите переменные c и d, а результат запишите в переменную result.
Выведите на экран значение переменной result */
let a = 17;
let b = 10;
let c = a - b; //7
let d = 7;
let result = c + d; //14
console.log(c);
console.log(result);

/*5) Переделайте этот код так, чтобы в нем использовались операторы присвоения:
let num = 47;
num = num + 7;
num = num - 18;
num = num * 10;
num = num / 15;
alert(num);
*/
let num3 = 47;
num3 += 7; //54
alert(num3);
console.log(num3);

let num4 = 47;
num4 -= 18; // 29
alert(num4);
console.log(num4);

let num5 = 47;
num5 *= 10; //470
alert(num5);
console.log(num5);

let num6 = 47;
num6 /= 15; // 3,1
alert(num6);
console.log(num6);


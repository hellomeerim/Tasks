/*1)Переделайте приведенный код так, чтобы в нем использовались операции
    +=, -=, *=, /=, ++, --.
Количество строк кода при этом не должно измениться.
*/
// num = num + 12;
let num = 1;
num += 12; //13
alert(num);
console.log(num);

// num = num - 14;
let num3 = 1;
num3 -= 14; // -13
alert(num3);
console.log(num3);

// num = num * 5;
let num4 = 1;
num4 *= 5; //5
alert(num4);
console.log(num4);

// num = num / 7;
let num5 = 1;
num5 /= 7; // 0.14285714285714285
alert(num5);
console.log(num5);

// num = num + 1;
let num6 = 1;
++num6; // 2
alert(num6);
console.log(num6);

// num = num - 1;
let num7 = 1;
--num7; // 0
alert(num7);
console.log(num7);

/*
2)Переделайте этот код так, чтобы в нем использовались операции ++ и --.
Количество строк кода при этом не должно измениться.
    var num = 10;
num = num + 1;
num = num + 1;
num = num - 1;
alert(num);
*/
let num8 = 10;
 ++num8;
alert(num8);
console.log(num8); //11

let num10 = 10;
num10++;
alert(num10);
console.log(num10); //11

let num9 = 10
--num9;
alert(num9);
console.log(num9);// 9

// 3) И (&& - амперсанд)
// 3.1 true + false = false
let num1 = 44;
let num2 = 70;
let result = num1 === 44 && num2 === 44;
console.log(result); //false

// 3.2 false + false = false
let result2 = num1 === 43 && num2 < 44;
console.log(result2); //false

// 3.3 false + true = false
let result3 = num1 > 50 && num2 === 70;
console.log(result3); //false

// true + true = true;
let result4 = num1 === 44 && num2 > 44;
console.log(result4); //true


//4) Или (||)
//4.1 true + false = true
let age = 23;
let result5 = age === 23 || age === 33; //true
console.log(result5);

// 4.2 false + true = true
let result6 = age === 25 || age ===23; //true
console.log(result6);

// false + false = false
let result7 = age === 25 || age === 27; //false
console.log(result7);

// true + true = true
let result8 = age > 19 || age === 23; // true
console.log(result8);

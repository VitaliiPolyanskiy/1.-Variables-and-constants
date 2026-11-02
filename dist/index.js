"use strict";
// Переменные и константы
// C помощью var мы можем определить два и более раз переменную с одним и тем же именем
var x = 10;
console.log(x);
var x = 20;
console.log(x);
let y = 10;
console.log(y);
//let y = 20; // ошибка компиляции, так как переменная y уже объявлена
var number1 = 5;
if (true) {
    var number1 = 10;
    console.log(number1); // 10
}
console.log(number1); // 10
let number2 = 15;
if (true) {
    let number2 = 20;
    console.log(number2); // 20
}
console.log(number2); // 15 
Print();
Show();
//console.log(number4);  // ошибка компиляции: переменная не существует
let number4 = 100;
const n = 5;
// n = 10; // ошибка компиляции: константа защищена от изменения
function Print() {
    if (true) {
        var a = 7;
        console.log(a);
    }
    console.log(a);
}
function Show() {
    if (true) {
        let b = 23;
        console.log(b);
    }
    // console.log(b); // ошибка компиляции: переменная не объявлена
}

// Змінні та константи

// За допомогою var ми можемо визначити змінну з одним і тим самим ім'ям два і більше разів
var x = 10;
console.log(x);
var x = 20;
console.log(x);

let y = 10;
console.log(y);
//let y = 20; // помилка компіляції, оскільки змінна y вже оголошена

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

//console.log(number4);  // помилка компіляції: змінна не існує
let number4 = 100;

const n = 5;
// n = 10; // помилка компіляції: константа захищена від зміни

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
    // console.log(b); // помилка компіляції: змінна не оголошена
}
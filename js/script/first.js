// console.log("Hello");

// Завдання № 1

let userName = prompt("Привіт. Як тебе звати ?");
alert("Тебе звати " + userName);

// Завдання № 2

let year = prompt("рік народження ?");
const nowYear = 2020;
let yourYear = nowYear - year;
alert(yourYear);

// Завдання № 3

let howLongSquare = prompt("Какая длина сторона квадрата ?");
let parimetr = howLongSquare * 4;
alert("Периметр квадрату " + parimetr);

// Завдання № 4

let inpRadius = prompt(" Введите радиус круга", " Радиус - в числовом виде!");
alert(Math.PI * (inpRadius * inpRadius));

// Завдання № 5

let howKM = prompt("какое расстояние в км между двумя городами");
let howTime = prompt("за сколько часов хочеш добраться ?");
alert(howKM / howTime);

// Завдання № 6

let how$ = prompt("Сколько доларов перевести в Євро ?");
let num = Number(how$); // становится числом 123
let grn = num * 28;
const euro = 30;
alert("Отримаєте: " + grn / euro);
alert(`GET: ${grn / euro}`);

//Завдання № 7

let howGB = prompt("Вкажіть обєм флешки в Гб?");

let numGB = Number(howGB); // становится числом
numGB *= 1024;

let suma = Math.floor(numGB / 820);
alert(`Отримаєте ${suma} файлів`);

// Завдання № 8

let HowMuch = prompt("Скільки бабосиків у тебе в гаманці ?");
let HowCost = prompt("Яка вартість однієї шоколадки?");

let numberOfChocolates = Math.floor(HowMuch / HowCost);
let remainder = HowMuch % HowCost;
alert(
  `Можете купити ${numberOfChocolates} шоколадок, і у вас залишеться ${remainder} грошей.`
);

// Завдання № 9

let userNumber = prompt("Введіть трьохзначне число");
let firstNum = userNumber % 10;
let secondNum = ((userNumber % 100) - firstNum) / 10;
let thirdNum = (userNumber - (userNumber % 100)) / 100;
alert(`${firstNum}${secondNum}${thirdNum}`);

// Завдання № 10

let ammount = prompt(
  "Введи суму $, яку ти хочеш поставити на двохмісячний депозит під суму 5% річних."
);
let profitYear = ammount * 0.05;
let cleanProfitMounth = profitYear / 12;
alert(
  "Твій чистий дохід з 2 місяців під 5% річних" +
    Math.floor(cleanProfitMounth * 2) +
    " $"
);

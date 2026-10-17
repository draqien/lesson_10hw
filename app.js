const num1 = Number(prompt("Введите первое число:"));
const num2 = Number(prompt("Введите второе число:"));
const num3 = Number(prompt("Введите третье число:"));

let maxNumber = num1;
if (num2 > maxNumber) {
    maxNumber = num2;
}
if (num3 > maxNumber) {
    maxNumber = num3;
}
console.log(maxNumber);

const age = Number(prompt("Введите ваш возраст:"));
console.log(age >= 18 && age <= 60);

const username = "admin";
const password = "123";

const inputUsername = prompt("Введите username:");
const inputPassword = prompt("Введите пароль:");

if (inputUsername === username && inputPassword === password) {
    console.log("Вы успешно вошли в систему");
} else {
    console.log("Некорректный username или пароль");
}

const Q1 = "4";
const Q2 = "Бишкек";
const Q3 = "js";
const Q4 = "Geeks";
const Q5 = "10";

let correctCount = 0;
const ans1 = prompt("Сколько будет 2+2?");
if (ans1 === Q1) { 
    correctCount = correctCount + 1; 
}
const ans2 = prompt("Столица Кыргызстана?");
if (ans2 === Q2) { 
    correctCount = correctCount + 1; 
}
const ans3 = prompt("Как сокращенно называется язык JavaScript?");
if (ans3 === Q3) { 
    correctCount = correctCount + 1; 
}
const ans4 = prompt("Название крупнейшей компании IT-обучения в Кыргызстане?");
if (ans4 === Q4) { 
    correctCount = correctCount + 1; 
}
const ans5 = prompt("Сколько миллиметров в одном сантиметре?");
if (ans5 === Q5) { 
    correctCount = correctCount + 1; 
}
console.log(correctCount);

const checkNum = Number(prompt("Введите число:"));
if (checkNum % 2 === 0 || checkNum % 7 === 0) {
    console.log("Подходит");
} else {
    console.log("Не подходит");
}

const purchaseAmount = Number(prompt("Введите сумму покупки:"));
if (purchaseAmount > 5000) {
    console.log(purchaseAmount - (purchaseAmount * 10 / 100 ));
} else {
    console.log(purchaseAmount);
}

const char = prompt("Введите одну английскую букву:");
if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    console.log(true);
} else {
    console.log(false);
}

const baseNumber = Number(prompt("Введите число:"));
const percent = Number(prompt("Введите процент:"));
console.log((baseNumber / 100) * (100 - percent));
//1 task
let name = prompt('Введи своє імʼя');
let age = prompt('Введи свій вік');
let bornDate = prompt('Введи дату народження');

document.write(
  `Привіт, ${name}, Ви народились ${bornDate} це означає, що вам ${age} рік <br>`
);

//2 task
let num = 12345;
num = num.toString();
let numResult = '';

for (let i = 0; i < num.length; i++) {
  numResult += num[i] + ' ';
}
document.write(numResult);

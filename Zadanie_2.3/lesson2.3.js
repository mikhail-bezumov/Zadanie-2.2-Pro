//const age = 27;
//console.log(typeof age);
//const bigItn = 123141234203n;
//console.log(typeof bigItn);
//const firstName = 'Name'
//console.log(typeof firstName);

/* let titleProject = 'оценка стоимости'
//console.log(typeof titleProject);
let screensValue = 'шаблонные, с уникальным дизайном, с анимациями'
//console.log(typeof screensValue);
let screenPrice = 5000;
//console.log(typeof screenPrice);
let percentage  = 500;
//console.log(typeof percentage);
let fullPrice  = 50000;
//console.log(typeof fullPrice);
let responsive = true;
//console.log(typeof responsive);
//console.log (titleProject);

let x = 9;

if (x > 10) {
    console.log ('правильно');
} else {
    console.log ('не правильно');
}

//alert ('Привет')

let age = prompt ('Укажите ваш возраст');
console.log (age); */

let titleProject =  prompt ('Название проекта');
console.log (titleProject);
let screensValue = prompt ('Тип экрана');
console.log (screensValue);
let responsive = prompt('Нужен респонсивный сайт? (Да/Нет)').toLowerCase().trim() === 'да';
console.log (responsive);
let service1 = prompt ('Какой сервис нужен?');
console.log (service1);
let servicePrice1 = +prompt ('Сколько это будет стоить?');
console.log (servicePrice1);
let service2 = prompt ('Какой еще сервис тебе нужен?');
console.log (service2);
let servicePrice2 = +prompt ('Сколько будет стоить этот второй сервис?');
console.log (servicePrice2);
let screenPrice = 5000;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log('Полная стоимость:', fullPrice);
const contractorPercent = 10; // 10% подрядчика
let servicePercentPrice = fullPrice * (1 - contractorPercent / 100);
console.log('Цена со скидкой 10%:', servicePercentPrice);
if (fullPrice > 50000) {
    console.log ('делаем скидку 10%');
} else if (fullPrice === 50000) {
    console.log("Ровно 50000 - специальное предложение!");}

else if (fullPrice > 20000 && fullPrice < 50000) {
    console.log ('делаем скидку 5%');
} else if (fullPrice === 20000) {
    console.log("Ровно 50000 - специальное предложение!");}

else if (fullPrice < 20000 && fullPrice > 0) {
    console.log ('скидка не предусмотрена');   
} else if (fullPrice === 0) {
    console.log("Нужен бесплатный сайт((("); }

else if (fullPrice < 0) {
    console.log ('что-то пошло не так'); }

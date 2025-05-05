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
console.log ('название проекта', titleProject);
let screensValue = prompt ('Тип экрана');
console.log ('тип экрана', screensValue);
let responsive = prompt('Нужен респонсивный сайт? (Да/Нет)').toLowerCase().trim() === 'да';
console.log ('нужен респонсив?', responsive);
let service1 = prompt ('Какой сервис нужен?');
console.log ('Название первого сервиса', service1);
let servicePrice1 = +prompt ('Сколько это будет стоить?');
console.log ('стоимость первого сервиса', servicePrice1);
let service2 = prompt ('Какой еще сервис тебе нужен?');
console.log ('Название второго сервиса', service2);
let servicePrice2 = +prompt ('Сколько будет стоить этот второй сервис?');
console.log ('стоимость второго сервиса', servicePrice2);
let screenPrice = 5000;
let fullPrice1 = screenPrice + servicePrice1 + servicePrice2;
console.log('Полная стоимость:', fullPrice1);
/* const contractorPercent = 10; // 10% подрядчика
let servicePercentPrice = fullPrice1 * (1 - contractorPercent / 100);
console.log('Цена со скидкой 10%:', servicePercentPrice); */
if (fullPrice1 > 50000) {
    console.log ('делаем скидку 10%');
} else if (fullPrice1 === 50000) {
    console.log("Ровно 50000 - специальное предложение!");}

else if (fullPrice1 > 20000 && fullPrice1 < 50000) {
    console.log ('делаем скидку 5%');
} else if (fullPrice1 === 20000) {
    console.log("Ровно 50000 - специальное предложение!");}

else if (fullPrice1 < 20000 && fullPrice1 > 0) {
    console.log ('скидка не предусмотрена');   
} else if (fullPrice1 === 0) {
    console.log("Нужен бесплатный сайт((("); }

else if (fullPrice1 < 0) {
    console.log ('что-то пошло не так'); }


  const getAllServicePrices = function() {
    return servicePrice1 + servicePrice2;
  } ;
  const allServicePrices = getAllServicePrices();
console.log('Cтоимость всех дополнительных услуг: ', allServicePrices);

function getFullPrice () {
    return allServicePrices + screenPrice;
}
const fullPrice = getFullPrice();
console.log('Cтоимость всех дополнительных услуг и стоимость вёрстки: ', fullPrice); 

const getTitle = function(title) {  
    if (!title || typeof title !== 'string') return '';
    return title.charAt(0).toUpperCase() + 
           title.slice(1).toLowerCase();
};

const formattedTitle = getTitle(titleProject);
console.log('Отформатированное название:', formattedTitle);

function getServicePercentPrices(price) {
    let discount;
    
    if (fullPrice1 > 50000) discount = 10;
    else if (fullPrice1 === 50000) discount = 10;
    else if (fullPrice1 > 20000) discount = 5;
    else if (fullPrice1 === 20000) discount = 5;
    else discount = 0;
    
    return price * (1 - discount / 100);
};
const finalPrice = getServicePercentPrices(fullPrice1); 
console.log('Итоговая сумма к оплате:', finalPrice);

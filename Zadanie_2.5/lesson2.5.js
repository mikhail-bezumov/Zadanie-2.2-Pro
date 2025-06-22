// Основные переменные 
let screenPrice;
let contractorPercent = 10;
let allServicePrices;
let fullPrice;
let formattedTitle;
let finalPrice;
let titleProject;
let screensValue;
let responsive;

// Функция проверки на число
function checkIsNumber(value) {
    return value !== null && 
        !isNaN(parseFloat(value)) && 
        isFinite(value);
}

// Ввод стоимости верстки 
while (true) {
    const input = prompt('Укажите стоимость вёрстки (число)');
    
    if (input === null) {
        screenPrice = 5000;
        break;
    }
    
    const trimmedInput = input.trim();
    if (trimmedInput === '') {
        alert('Вы ничего не ввели!');
        continue;
    }
    
    if (checkIsNumber(trimmedInput)) {
        screenPrice = parseFloat(trimmedInput);
        break;
    }
    
    alert('Некорректное число! Пример: 5000');
}

// Ввод данных о сервисах 
let service1 = prompt('Какой сервис нужен?');

let servicePrice1;
let input;
do {
    input = prompt('Сколько это будет стоить?');
} while (input !== null && !checkIsNumber(input));
servicePrice1 = input !== null ? parseFloat(input) : 0; 

let service2 = prompt('Какой еще сервис тебе нужен?');

let servicePrice2;
do {
    input = prompt('Сколько будет стоить второй сервис?');
} while (input !== null && !checkIsNumber(input));
servicePrice2 = input !== null ? parseFloat(input) : 0;

const getAllServicePrices = function() {
    return servicePrice1 + servicePrice2;
};

function getFullPrice() {
    return allServicePrices + screenPrice;
};

function getServicePercentPrices(price) {
    let discount;
    if (price > 50000) discount = 10;
    else if (price === 50000) discount = 10;
    else if (price > 20000) discount = 5;
    else if (price === 20000) discount = 5;
    else discount = 0;
    
    return price * (1 - discount / 100);
};

const getTitle = function(title) {  
    if (!title || typeof title !== 'string') return '';
    return title.charAt(0).toUpperCase() + 
           title.slice(1).toLowerCase();
}

// Основной код 
const asking = function () {
    titleProject = prompt('Название проекта');
    screensValue = prompt('Тип экрана');
    responsive = prompt('Нужен респонсивный сайт? (Да/Нет)').toLowerCase().trim() === 'да';
}

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
finalPrice = getServicePercentPrices(fullPrice); 
formattedTitle = getTitle(titleProject);

// Вывод результатов 
console.log('название проекта', titleProject);
console.log('тип экрана', screensValue);
console.log('нужен респонсив?', responsive);
console.log('Стоимость вёрстки:', screenPrice);
console.log('Название первого сервиса', service1);
console.log('стоимость первого сервиса', servicePrice1);
console.log('Название второго сервиса', service2);
console.log('стоимость второго сервиса', servicePrice2);
console.log('Общая стоимость:', fullPrice);
console.log('Итоговая сумма:', finalPrice.toFixed(2));
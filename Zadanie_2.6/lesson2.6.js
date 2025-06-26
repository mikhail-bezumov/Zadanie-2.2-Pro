const gameBotFunction = function() {
    // 2. Функция генерации случайного числа
    const randomGenerate = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // 3. Загадываем число
    let mysteryNumber = randomGenerate(1, 100);
    
    // 4. Устанавливаем количество попыток
    let triesLeft = 5; // Можно изменить на любое число

    // 5. Функция проверки числа (из прошлого ДЗ)
    const checkIsNumber = (value) => {
        return value !== null && 
               !isNaN(parseFloat(value)) && 
               isFinite(value);
    };

    // 6. Рекурсивная функция для угадывания
    const getResult = function() {
        // 8. Запрос числа с проверкой
        let answerNum;
        while (true) {
            const input = prompt(`Угадайте число от 1 до 100 (Осталось попыток: ${triesLeft})`);
            
            // 7. Обработка отмены
            if (input === null) {
                alert('Вы завершили игру');
                return;
            }
            
            const trimmedInput = input.trim();
            
            if (trimmedInput === '') {
                alert('Вы ничего не ввели!');
                continue;
            }
            
            if (checkIsNumber(trimmedInput)) {
                answerNum = parseFloat(trimmedInput);
                break;
            }
            
            alert('Пожалуйста, введите число!');
        }

        // 9. Сравнение чисел
        if (answerNum === mysteryNumber) {
            if (confirm('Поздравляю! Вы угадали! Хотите сыграть ещё?')) {
                // Перезапуск игры
                mysteryNumber = randomGenerate(1, 100);
                triesLeft = 5; // Сброс попыток
                getResult();
            } else {
                alert('Спасибо за игру!');
            }
            return;
        }
        
        // Подсказки
        if (answerNum < mysteryNumber) {
            alert(`Загаданное число больше! Осталось попыток: ${triesLeft}`);
        } else {
            alert(`Загаданное число меньше! Осталось попыток: ${triesLeft}`);
        }

        // 10. Уменьшение попыток
        triesLeft--;
        
        if (triesLeft > 0) {
            getResult(); // Продолжаем игру
        } else {
            if (confirm('Попытки закончились! Хотите попробовать снова?')) {
                triesLeft = 5; // Новые попытки
                mysteryNumber = randomGenerate(1, 100); // Новое число
                getResult();
            } else {
                alert('Игра завершена. До свидания!');
            }
        }
    };

    // Начало игры
    getResult();
};

// Запуск игры
gameBotFunction();
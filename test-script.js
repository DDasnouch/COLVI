// СКРИПТ ДЛЯ СТРАНИЦЫ ТЕСТА (test.html)

// ВОПРОСЫ ТЕСТА (15 ВОПРОСОВ!)
const questions = [
    {
        id: 1,
        text: "Какой у вас естественный оттенок кожи?",
        options: [
            "Очень светлый, почти фарфоровый",
            "Светлый с розоватым или оливковым подтоном",
            "Средний, бежевый, с теплым подтоном",
            "Смуглый, золотистый или оливковый",
            "Контрастный: очень светлый или очень темный"
        ]
    },
    {
        id: 2,
        text: "Как ваша кожа реагирует на солнце?",
        options: [
            "Легко обгораю, почти не загораю",
            "Обгораю, но потом появляется легкий загар",
            "Загораю постепенно, загар получается ровным",
            "Быстро загораю, загар держится долго",
            "Обгораю редко, загар получается темным"
        ]
    },
    {
        id: 3,
        text: "Какой у вас натуральный цвет волос?",
        options: [
            "Платиновый блонд, пепельный блонд",
            "Русый, светло-коричневый с пепельным оттенком",
            "Золотистый блонд, светло-рыжий, медный",
            "Каштановый, темно-рыжий, шоколадный",
            "Черный, темно-коричневый с синим отливом"
        ]
    },
    {
        id: 4,
        text: "Какой у вас цвет глаз?",
        options: [
            "Светло-голубой, серо-голубой, серый",
            "Серо-зеленый, ореховый, голубой с серым",
            "Теплый карий, зеленый с золотыми крапинками",
            "Темный карий, зеленый, оливковый",
            "Темно-карий, черный, ярко-голубой, синий"
        ]
    },
    {
        id: 5,
        text: "Какой цвет бровей и ресниц?",
        options: [
            "Очень светлые, почти невидимые",
            "Средней насыщенности, пепельного оттенка",
            "Золотисто-коричневые, теплые",
            "Темно-коричневые, насыщенные",
            "Черные или очень темные"
        ]
    },
    {
        id: 6,
        text: "Какие украшения вам больше идут?",
        options: [
            "Только серебро, платина, белое золото",
            "Серебро, но иногда и неяркое золото",
            "Теплое золото, медь, латунь",
            "Золото, но и серебро тоже подходит",
            "Яркое серебро, платина, черненое серебро"
        ]
    },
    {
        id: 7,
        text: "Какой красный цвет вам больше подходит?",
        options: [
            "Холодный розово-красный, арбузный",
            "Классический красный с синим подтоном",
            "Теплый кораллово-красный, томатный",
            "Терракотовый, кирпичный, ржавый",
            "Яркий алый, винный, рубиновый"
        ]
    },
    {
        id: 8,
        text: "Какой синий цвет вам лучше всего?",
        options: [
            "Нежно-голубой, цвет неба",
            "Джинсовый синий, серо-синий",
            "Бирюзовый, аквамариновый",
            "Теплый синий, цвет морской волны",
            "Королевский синий, электрик, сапфировый"
        ]
    },
    {
        id: 9,
        text: "Какой белый цвет вам идет?",
        options: [
            "Чистый белоснежный",
            "Молочный, кремовый",
            "Теплый белый, слоновая кость",
            "Бежевый, песочный",
            "Только чистый яркий белый"
        ]
    },
    {
        id: 10,
        text: "Какой черный цвет вам подходит?",
        options: [
            "Не идёт совсем, выгляжу уставшей",
            "Только с другими цветами, не рядом с лицом",
            "Теплый черный, с коричневым подтоном",
            "Классический черный, но не лучший вариант",
            "Идеально, выгляжу эффектно и контрастно"
        ]
    },
    {
        id: 11,
        text: "Какой зеленый вам нравится больше?",
        options: [
            "Мятный, бирюзово-зеленый",
            "Оливковый, хаки, защитный",
            "Салатовый, лаймовый, яблочный",
            "Травяной, изумрудный, лесной",
            "Холодный изумрудный, хвойный"
        ]
    },
    {
        id: 12,
        text: "Как вы выглядите в пастельных тонах?",
        options: [
            "Отлично, особенно в холодных пастельных",
            "Неплохо, но нужны приглушенные оттенки",
            "Хорошо в теплых пастельных тонах",
            "Лучше в насыщенных, чем в пастельных",
            "Пастельные не идут, нужны яркие цвета"
        ]
    },
    {
        id: 13,
        text: "Какой у вас природный уровень контраста?",
        options: [
            "Низкий: все черты одного тона",
            "Средний: есть небольшой контраст",
            "Средне-высокий: заметный контраст",
            "Высокий: волосы намного темнее кожи",
            "Очень высокий: яркий контраст черт"
        ]
    },
    {
        id: 14,
        text: "Какой макияж вам больше идет?",
        options: [
            "Минимальный, естественные тона",
            "Приглушенный, дымчатые тени",
            "Теплый, персиковые и золотые тона",
            "Насыщенный, землистые оттенки",
            "Яркий, контрастный, графичный"
        ]
    },
    {
        id: 15,
        text: "Какой сезон вам больше подходит по ощущениям?",
        options: [
            "Легкое, свежее лето",
            "Мягкая, теплая весна",
            "Яркая, золотая осень",
            "Контрастная, холодная зима",
            "Затрудняюсь ответить"
        ]
    }
];

// ДАННЫЕ О ЦВЕТОТИПАХ
const seasonsData = {
    spring: {
        name: "Весна",
        description: "Теплый, светлый, яркий цветотип. Вам подходят свежие, теплые и солнечные цвета.",
        colors: ["#FFCC80", "#FFB74D", "#FF9800", "#4CAF50", "#2196F3"],
        recommendations: [
            "Теплые пастельные оттенки",
            "Золотистые и персиковые тона",
            "Светлый деним и бежевые цвета",
            "Яркая бирюза и коралловый",
            "Избегайте холодных темных цветов"
        ]
    },
    summer: {
        name: "Лето",
        description: "Холодный, светлый, приглушенный цветотип. Вам идут дымчатые, размытые и холодные оттенки.",
        colors: ["#81D4FA", "#4FC3F7", "#2196F3", "#E1BEE7", "#F48FB1"],
        recommendations: [
            "Холодные пастельные тона",
            "Серо-голубые и сиреневые оттенки",
            "Приглушенный розовый и мятный",
            "Дымчатые и размытые цвета",
            "Серебряные аксессуары лучше золотых"
        ]
    },
    autumn: {
        name: "Осень",
        description: "Теплый, насыщенный, глубокий цветотип. Вам подходят землистые, теплые и насыщенные цвета.",
        colors: ["#A1887F", "#8D6E63", "#795548", "#FF9800", "#8BC34A"],
        recommendations: [
            "Теплые землистые тона",
            "Терракотовый и горчичный",
            "Оливковый и хаки",
            "Насыщенный коричневый и бордовый",
            "Золотые и медные аксессуары"
        ]
    },
    winter: {
        name: "Зима",
        description: "Холодный, контрастный, яркий цветотип. Вам идут чистые, яркие и контрастные цвета.",
        colors: ["#7986CB", "#5C6BC0", "#3F51B5", "#F06292", "#4CAF50"],
        recommendations: [
            "Яркие холодные цвета",
            "Черный и чистый белый",
            "Изумрудный и королевский синий",
            "Фуксия и малиновый",
            "Серебряные и платиновые аксессуары"
        ]
    }
};

// ПЕРЕМЕННЫЕ ТЕСТА
let currentQuestion = 0;
let answers = [];
let scores = { spring: 0, summer: 0, autumn: 0, winter: 0 };

// ФУНКЦИИ ТЕСТА
function showQuestion() {
    const question = questions[currentQuestion];
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    // Обновляем прогресс
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `Вопрос ${currentQuestion + 1} из ${questions.length}`;
    
    // Создаем HTML вопроса
    let html = `
        <div class="question">
            <h3>${question.text}</h3>
            <div class="options">
    `;
    
    question.options.forEach((option, index) => {
        const isSelected = answers[currentQuestion] === index;
        html += `
            <div class="option ${isSelected ? 'selected' : ''}" onclick="selectAnswer(${index})">
                ${option}
            </div>
        `;
    });
    
    html += `</div></div>`;
    document.getElementById('questionContainer').innerHTML = html;
    
    updateButtons();
}

function selectAnswer(index) {
    answers[currentQuestion] = index;
    
    // Логика подсчета баллов для 15 вопросов
    if (currentQuestion === 0) { // Оттенок кожи
        if (index === 0) scores.summer += 3;
        else if (index === 1) scores.summer += 2;
        else if (index === 2) scores.autumn += 3;
        else if (index === 3) scores.autumn += 2;
        else if (index === 4) scores.winter += 3;
    }
    else if (currentQuestion === 1) { // Реакция на солнце
        if (index === 0) scores.spring += 2;
        else if (index === 1) scores.summer += 2;
        else if (index === 2) scores.autumn += 3;
        else if (index === 3) scores.autumn += 2;
        else if (index === 4) scores.winter += 2;
    }
    else if (currentQuestion === 2) { // Цвет волос
        if (index === 0) scores.summer += 3;
        else if (index === 1) scores.summer += 2;
        else if (index === 2) scores.spring += 3;
        else if (index === 3) scores.autumn += 3;
        else if (index === 4) scores.winter += 3;
    }
    else if (currentQuestion === 3) { // Цвет глаз
        if (index === 0) scores.summer += 3;
        else if (index === 1) scores.summer += 2;
        else if (index === 2) scores.spring += 3;
        else if (index === 3) scores.autumn += 3;
        else if (index === 4) scores.winter += 3;
    }
    else if (currentQuestion === 4) { // Брови и ресницы
        if (index === 0) scores.summer += 3;
        else if (index === 1) scores.summer += 2;
        else if (index === 2) scores.spring += 2;
        else if (index === 3) scores.autumn += 2;
        else if (index === 4) scores.winter += 3;
    }
    else if (currentQuestion === 5) { // Украшения
        if (index === 0) scores.summer += 3;
        else if (index === 1) scores.summer += 2;
        else if (index === 2) scores.autumn += 3;
        else if (index === 3) scores.spring += 2;
        else if (index === 4) scores.winter += 3;
    }
    else if (currentQuestion === 6) { // Красный цвет
        if (index === 0) scores.summer += 2;
        else if (index === 1) scores.winter += 2;
        else if (index === 2) scores.spring += 3;
        else if (index === 3) scores.autumn += 3;
        else if (index === 4) scores.winter += 3;
    }
    else if (currentQuestion === 7) { // Синий цвет
        if (index === 0) scores.summer += 2;
        else if (index === 1) scores.summer += 1;
        else if (index === 2) scores.spring += 3;
        else if (index === 3) scores.autumn += 2;
        else if (index === 4) scores.winter += 3;
    }
    else if (currentQuestion === 8) { // Белый цвет
        if (index === 0) scores.winter += 3;
        else if (index === 1) scores.summer += 2;
        else if (index === 2) scores.spring += 3;
        else if (index === 3) scores.autumn += 2;
        else if (index === 4) scores.winter += 3;
    }
    else if (currentQuestion === 9) { // Черный цвет
        if (index === 0) scores.spring += 0;
        else if (index === 1) scores.summer += 1;
        else if (index === 2) scores.autumn += 1;
        else if (index === 3) scores.autumn += 2;
        else if (index === 4) scores.winter += 3;
    }
    else if (currentQuestion === 10) { // Зеленый цвет
        if (index === 0) scores.summer += 2;
        else if (index === 1) scores.autumn += 3;
        else if (index === 2) scores.spring += 3;
        else if (index === 3) scores.autumn += 2;
        else if (index === 4) scores.winter += 2;
    }
    else if (currentQuestion === 11) { // Пастельные тона
        if (index === 0) scores.summer += 3;
        else if (index === 1) scores.summer += 2;
        else if (index === 2) scores.spring += 3;
        else if (index === 3) scores.autumn += 1;
        else if (index === 4) scores.winter += 0;
    }
    else if (currentQuestion === 12) { // Контраст
        if (index === 0) scores.summer += 2;
        else if (index === 1) scores.spring += 1;
        else if (index === 2) scores.autumn += 2;
        else if (index === 3) scores.winter += 2;
        else if (index === 4) scores.winter += 3;
    }
    else if (currentQuestion === 13) { // Макияж
        if (index === 0) scores.summer += 2;
        else if (index === 1) scores.summer += 1;
        else if (index === 2) scores.spring += 3;
        else if (index === 3) scores.autumn += 3;
        else if (index === 4) scores.winter += 3;
    }
    else if (currentQuestion === 14) { // Сезон по ощущениям
        if (index === 0) scores.summer += 3;
        else if (index === 1) scores.spring += 3;
        else if (index === 2) scores.autumn += 3;
        else if (index === 3) scores.winter += 3;
    }
    
    showQuestion();
}

function updateButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const finishBtn = document.getElementById('finishBtn');
    
    // Кнопка "Назад"
    prevBtn.disabled = currentQuestion === 0;
    
    // Кнопка "Далее"
    nextBtn.disabled = answers[currentQuestion] === undefined;
    
    // Кнопка "Завершить"
    if (currentQuestion === questions.length - 1) {
        nextBtn.style.display = 'none';
        finishBtn.style.display = 'block';
        finishBtn.disabled = answers[currentQuestion] === undefined;
    } else {
        nextBtn.style.display = 'block';
        finishBtn.style.display = 'none';
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

function finishTest() {
    // Определяем победителя
    let maxScore = 0;
    let resultSeason = '';
    
    for (const [season, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            resultSeason = season;
        }
    }
    
    // Если баллы равные, выбираем случайно
    if (maxScore === 0) {
        const seasons = ['spring', 'summer', 'autumn', 'winter'];
        resultSeason = seasons[Math.floor(Math.random() * seasons.length)];
    }
    
    showResult(resultSeason);
}

function showResult(season) {
    const data = seasonsData[season];
    
    let html = `
        <div class="result-card">
            <h3 class="season-name">${data.name}</h3>
            <p class="season-description">${data.description}</p>
            
            <div class="color-palette">
    `;
    
    data.colors.forEach(color => {
        html += `<div class="color-item" style="background-color: ${color};"></div>`;
    });
    
    html += `
            </div>
            
            <div class="recommendations">
                <h4>Рекомендации:</h4>
                <ul>
    `;
    
    data.recommendations.forEach(rec => {
        html += `<li>${rec}</li>`;
    });
    
    html += `
                </ul>
            </div>
        </div>
        
        <div style="background-color: var(--white); padding: 20px; border-radius: 10px; margin-top: 20px;">
            <h4 style="font-family: 'Montserrat', sans-serif; font-weight: 600; margin-bottom: 15px;">Ваши результаты по типам:</h4>
            <p>Весна: ${scores.spring} баллов</p>
            <p>Лето: ${scores.summer} баллов</p>
            <p>Осень: ${scores.autumn} баллов</p>
            <p>Зима: ${scores.winter} баллов</p>
        </div>
    `;
    
    document.getElementById('resultContent').innerHTML = html;
    document.getElementById('questionContainer').style.display = 'none';
    document.querySelector('.progress-container').style.display = 'none';
    document.querySelector('.buttons').style.display = 'none';
    document.getElementById('resultContainer').style.display = 'block';
    
    // Сохраняем результат в localStorage
    localStorage.setItem('colorTypeResult', season);
    localStorage.setItem('testCompleted', 'true');
}

function restartTest() {
    currentQuestion = 0;
    answers = [];
    scores = { spring: 0, summer: 0, autumn: 0, winter: 0 };
    
    document.getElementById('questionContainer').style.display = 'block';
    document.querySelector('.progress-container').style.display = 'block';
    document.querySelector('.buttons').style.display = 'flex';
    document.getElementById('resultContainer').style.display = 'none';
    
    showQuestion();
}

// ИНИЦИАЛИЗАЦИЯ ТЕСТА
function initTest() {
    showQuestion();
    
    // Назначаем обработчики
    document.getElementById('prevBtn').addEventListener('click', prevQuestion);
    document.getElementById('nextBtn').addEventListener('click', nextQuestion);
    document.getElementById('finishBtn').addEventListener('click', finishTest);
    document.getElementById('restartBtn').addEventListener('click', restartTest);
    
    // Проверяем, был ли уже пройден тест
    const testCompleted = localStorage.getItem('testCompleted');
    if (testCompleted === 'true') {
        const savedResult = localStorage.getItem('colorTypeResult');
        if (savedResult && seasonsData[savedResult]) {
            showResult(savedResult);
        }
    }
}

// Глобальные функции для HTML
window.selectAnswer = selectAnswer;

// Запуск теста при загрузке страницы
if (document.getElementById('questionContainer')) {
    initTest();
}
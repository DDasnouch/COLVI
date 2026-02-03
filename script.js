// ОБЩИЙ СКРИПТ ДЛЯ ВСЕХ СТРАНИЦ

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Подсветка активной ссылки в навигации
    highlightActiveNavLink();
    
    // Анимация появления элементов при скролле
    initScrollAnimations();
    
    // Плавная прокрутка для всех внутренних ссылок
    initSmoothScroll();
    
    // Инициализация FAQ аккордеона (если есть на странице)
    initFAQAccordion();
    
    // Инициализация фильтрации (если есть на странице)
    initFiltering();
});

// Подсветка активной ссылки в навигации
function highlightActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Анимация появления элементов при скролле
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Наблюдаем за элементами с классами для анимации
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s, transform 0.5s';
        observer.observe(element);
    });
}

// Плавная прокрутка
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Обновляем URL без перезагрузки страницы
                    history.pushState(null, null, href);
                }
            }
        });
    });
}

// Аккордеон для FAQ
function initFAQAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const item = this.parentElement;
                item.classList.toggle('active');
                
                // Закрываем другие открытые вопросы
                if (item.classList.contains('active')) {
                    document.querySelectorAll('.faq-item.active').forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                        }
                    });
                }
            });
        });
    }
}

// Фильтрация элементов
function initFiltering() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    const filterableItems = document.querySelectorAll('.filterable-item');
    
    if (filterTabs.length > 0 && filterableItems.length > 0) {
        filterTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Убираем активный класс у всех вкладок
                filterTabs.forEach(t => t.classList.remove('active'));
                
                // Добавляем активный класс текущей вкладке
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                // Фильтрация элементов
                filterableItems.forEach(item => {
                    const categories = item.getAttribute('data-categories');
                    
                    if (filter === 'all' || categories.includes(filter)) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
}

// Показ/скрытие пароля (если есть формы)
function togglePasswordVisibility(inputId, toggleId) {
    const passwordInput = document.getElementById(inputId);
    const toggleButton = document.getElementById(toggleId);
    
    if (passwordInput && toggleButton) {
        toggleButton.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            // Меняем иконку
            this.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
        });
    }
}

// Форматирование чисел
function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// Проверка email
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Показ сообщения
function showMessage(type, text, duration = 5000) {
    // Создаем элемент сообщения
    const message = document.createElement('div');
    message.className = `message message-${type}`;
    message.innerHTML = `
        <div class="message-content">
            <span class="message-text">${text}</span>
            <button class="message-close">&times;</button>
        </div>
    `;
    
    // Добавляем стили
    message.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        max-width: 500px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#F44336' : '#2196F3'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Добавляем на страницу
    document.body.appendChild(message);
    
    // Закрытие по клику
    const closeBtn = message.querySelector('.message-close');
    closeBtn.addEventListener('click', () => {
        message.remove();
    });
    
    // Автоматическое закрытие
    if (duration > 0) {
        setTimeout(() => {
            if (message.parentNode) {
                message.remove();
            }
        }, duration);
    }
    
    return message;
}

// Копирование текста в буфер обмена
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showMessage('success', 'Текст скопирован в буфер обмена');
    }).catch(err => {
        console.error('Ошибка копирования: ', err);
        showMessage('error', 'Не удалось скопировать текст');
    });
}

// Получение параметров URL
function getUrlParameter(name) {
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(window.location.href);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Установка параметра URL
function setUrlParameter(key, value) {
    const url = new URL(window.location);
    url.searchParams.set(key, value);
    window.history.pushState({}, '', url);
}

// Удаление параметра URL
function removeUrlParameter(key) {
    const url = new URL(window.location);
    url.searchParams.delete(key);
    window.history.pushState({}, '', url);
}

// Тёмная/светлая тема
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    if (themeToggle) {
        // Проверяем сохранённую тему
        const currentTheme = localStorage.getItem('theme');
        
        if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
            document.body.classList.add('dark-theme');
            themeToggle.textContent = '☀️';
        }
        
        themeToggle.addEventListener('click', function() {
            if (document.body.classList.contains('dark-theme')) {
                document.body.classList.remove('dark-theme');
                localStorage.setItem('theme', 'light');
                this.textContent = '🌙';
            } else {
                document.body.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark');
                this.textContent = '☀️';
            }
        });
    }
}

// Отслеживание нажатия клавиши Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Закрываем все модальные окна
        document.querySelectorAll('.modal.show').forEach(modal => {
            modal.classList.remove('show');
        });
        
        // Закрываем все выпадающие меню
        document.querySelectorAll('.dropdown.show').forEach(dropdown => {
            dropdown.classList.remove('show');
        });
    }
});

// Предотвращение отправки формы по Enter в текстовых полях
document.querySelectorAll('input[type="text"], textarea').forEach(input => {
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && this.tagName === 'INPUT' && this.type === 'text') {
            e.preventDefault();
        }
    });
});
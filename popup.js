const translations = {
    ru: {
        title: '🎨 Настройка цветовой схемы Confluence',
        urlLabel: 'URL шаблон:',
        fontLabel: 'Шрифт:',
        darkTheme: '🌙 Тёмная тема',
        lightTheme: '☀️ Светлая тема',
        saveBtn: ' Сохранить',
        resetBtn: ' Сбросить',
        bodyBg: 'Основной фон страницы',
        headingColor: 'Цвет заголовков',
        topPanel: 'Верхняя Панель',
        breadcrumbs: 'Текст "Хлебные крошки"',
        btnHeaderBg: 'Фон заголовка кнопки',
        btnHeaderText: 'Текст заголовка кнопки',
        selectedMenuBg: 'Фон выбранного меню на верхней панели',
        selectedMenuText: 'Выделенный текст меню верхней панели',
        menuItemText: 'Текст Пункта Меню на Верхней Панели',
        selectedMenuItemBg: 'Фон Выбранного Пункта Меню',
        selectedMenuItemText: 'Текст Выбранного Пункта Меню',
        searchBg: 'Фон поля поиска',
        searchText: 'Текст поля поиска',
        pageMenuBg: 'Фон Выбранного Меню Страницы',
        pageMenuText: 'Текст Пункта Меню Страницы',
        titleText: 'Текст Заголовка',
        links: 'Ссылки',
        editorLinks: 'Ссылки в редакторе',
        sidebarBg: 'Фон левого меню',
        borders: 'Границы и Разделители'
    },
    en: {
        title: '🎨 Confluence Color Scheme',
        urlLabel: 'URL Pattern:',
        fontLabel: 'Font:',
        darkTheme: '🌙 Dark Theme',
        lightTheme: '☀️ Light Theme',
        saveBtn: '💾 Save',
        resetBtn: '↺ Reset',
        bodyBg: 'Main Page Background',
        headingColor: 'Heading Color',
        topPanel: 'Top Panel',
        breadcrumbs: 'Breadcrumbs Text',
        btnHeaderBg: 'Button Header Background',
        btnHeaderText: 'Button Header Text',
        selectedMenuBg: 'Selected Menu Background (Top)',
        selectedMenuText: 'Selected Menu Text (Top)',
        menuItemText: 'Menu Item Text (Top)',
        selectedMenuItemBg: 'Selected Menu Item Background',
        selectedMenuItemText: 'Selected Menu Item Text',
        searchBg: 'Search Field Background',
        searchText: 'Search Field Text',
        pageMenuBg: 'Selected Page Menu Background',
        pageMenuText: 'Page Menu Item Text',
        titleText: 'Title Text',
        links: 'Links',
        editorLinks: 'Editor Links',
        sidebarBg: 'Sidebar Background',
        borders: 'Borders and Dividers'
    }
};

const originalColors = [
    { hex: '#ffffff', name: 'bodyBg', key: '__body_bg__' },
    { hex: '#172B4D', name: 'headingColor', key: '__heading_color__' },
    { hex: '#ff6600', name: 'topPanel' },
    { hex: '#ffffff', name: 'breadcrumbs' },
    { hex: '#ba5009', name: 'btnHeaderBg' },
    { hex: '#ffffff', name: 'btnHeaderText' },
    { hex: '#994208', name: 'selectedMenuBg' },
    { hex: '#ffffff', name: 'selectedMenuText' },
    { hex: '#ffffff', name: 'menuItemText' },
    { hex: '#DFE1E6', name: 'selectedMenuItemBg' },
    { hex: '#505F79', name: 'selectedMenuItemText' },
    { hex: 'rgba(9, 30, 66, 0.48)', name: 'searchBg' },
    { hex: '#DEEBFF', name: 'searchText' },
    { hex: '#172B4D', name: 'pageMenuBg' },
    { hex: '#0052CC', name: 'pageMenuText' },
    { hex: '#172B4D', name: 'titleText' },
    { hex: '#0052CC', name: 'links' },
    { hex: '#FF6600', name: 'editorLinks', key: '__editor_links__' },
    { hex: '#ffffff', name: 'sidebarBg', key: '__sidebar_bg__' },
    { hex: '#d1793f', name: 'borders' }
];

const darkThemeColors = {
    '__body_bg__': '#1a202c',
    '__heading_color__': '#ffffff',
    '#ff6600': '#2d3748',
    '#ffffff': '#e2e8f0',
    '#ba5009': '#4a5568',
    '#ffffff': '#ffffff',
    '#994208': '#4a5568',
    '#ffffff': '#ffffff',
    '#ffffff': '#e2e8f0',
    '#DFE1E6': '#4a5568',
    '#505F79': '#ffffff',
    'rgba(9, 30, 66, 0.48)': '#2d3748',
    '#DEEBFF': '#e2e8f0',
    '#172B4D': '#4a5568',
    '#0052CC': '#63b3ed',
    '#172B4D': '#ffffff',
    '#0052CC': '#63b3ed',
    '__editor_links__': '#63b3ed',
    '__sidebar_bg__': '#2d3748',
    '#d1793f': '#4a5568'
};

const lightThemeColors = {
    '__body_bg__': '#ffffff',
    '__heading_color__': '#172B4D',
    '#ff6600': '#ff6600',
    '#ffffff': '#ffffff',
    '#ba5009': '#ba5009',
    '#ffffff': '#ffffff',
    '#994208': '#994208',
    '#ffffff': '#ffffff',
    '#ffffff': '#ffffff',
    '#DFE1E6': '#DFE1E6',
    '#505F79': '#505F79',
    'rgba(9, 30, 66, 0.48)': 'rgba(9, 30, 66, 0.48)',
    '#DEEBFF': '#DEEBFF',
    '#172B4D': '#172B4D',
    '#0052CC': '#0052CC',
    '#172B4D': '#172B4D',
    '#0052CC': '#0052CC',
    '__editor_links__': '#FF6600',
    '__sidebar_bg__': '#ffffff',
    '#d1793f': '#d1793f'
};

let currentLang = 'ru';

const colorList = document.getElementById('colorList');
const urlPatternInput = document.getElementById('urlPattern');
const fontSelect = document.getElementById('fontSelect');
const saveBtn = document.getElementById('saveBtn');
const resetBtn = document.getElementById('resetBtn');
const darkThemeBtn = document.getElementById('darkThemeBtn');
const lightThemeBtn = document.getElementById('lightThemeBtn');
const langToggle = document.getElementById('langToggle');

function normalizeHex(hex) {
    if (hex.startsWith('#') && hex.length === 4) {
        return '#' + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
    }
    return hex;
}

function translatePage() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
    
    document.querySelectorAll('.color-label').forEach(label => {
        const colorKey = label.dataset.colorKey;
        if (colorKey && translations[currentLang][colorKey]) {
            label.textContent = translations[currentLang][colorKey];
        }
    });
}

function renderColorList(colorMap) {
    colorList.innerHTML = '';
    
    originalColors.forEach(color => {
        const item = document.createElement('div');
        item.className = 'color-item';
        
        const label = document.createElement('div');
        label.className = 'color-label';
        label.dataset.colorKey = color.name;
        label.textContent = translations[currentLang][color.name] || color.name;
        
        const swatch = document.createElement('div');
        swatch.className = 'color-swatch';
        swatch.style.backgroundColor = color.hex;
        
        const inputWrapper = document.createElement('div');
        inputWrapper.className = 'color-input-wrapper';
        
        const textInput = document.createElement('input');
        textInput.type = 'text';
        textInput.dataset.original = color.hex;
        textInput.dataset.key = color.key || color.hex;
        textInput.value = colorMap[color.key || color.hex] || color.hex;
        
        const colorInput = document.createElement('input');
        colorInput.type = 'color';
        colorInput.dataset.original = color.hex;
        colorInput.dataset.key = color.key || color.hex;
        
        if (color.hex.startsWith('rgba')) {
            colorInput.disabled = true;
            colorInput.style.opacity = '0.3';
            colorInput.value = '#091e42';
        } else {
            colorInput.value = colorMap[color.key || color.hex] || normalizeHex(color.hex);
        }
        
        textInput.addEventListener('input', (e) => {
            const val = e.target.value;
            if (val.startsWith('#') && (val.length === 7 || val.length === 4)) {
                colorInput.value = normalizeHex(val);
            }
        });
        
        colorInput.addEventListener('input', (e) => {
            textInput.value = e.target.value;
        });
        
        inputWrapper.appendChild(textInput);
        inputWrapper.appendChild(colorInput);
        
        item.appendChild(label);
        item.appendChild(swatch);
        item.appendChild(inputWrapper);
        colorList.appendChild(item);
    });
}

chrome.storage.sync.get(['colorMap', 'urlPattern', 'selectedFont', 'language'], (result) => {
    const colorMap = result.colorMap || {};
    urlPatternInput.value = result.urlPattern || '*://*/*';
    fontSelect.value = result.selectedFont || 'Arial, sans-serif';
    currentLang = result.language || 'ru';
    langToggle.textContent = currentLang === 'ru' ? 'EN' : 'RU';
    
    renderColorList(colorMap);
    translatePage();
});

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'ru' ? 'en' : 'ru';
    langToggle.textContent = currentLang === 'ru' ? 'EN' : 'RU';
    translatePage();
    
    chrome.storage.sync.set({ language: currentLang });
});

darkThemeBtn.addEventListener('click', () => {
    renderColorList(darkThemeColors);
});

lightThemeBtn.addEventListener('click', () => {
    renderColorList(lightThemeColors);
});

saveBtn.addEventListener('click', () => {
    const colorMap = {};
    document.querySelectorAll('.color-input-wrapper input[type="text"]').forEach(input => {
        const key = input.dataset.key;
        colorMap[key] = input.value;
    });
    
    if (colorMap['#ff6600']) {
        colorMap['#FF6600'] = colorMap['#ff6600'];
    }
    if (colorMap['#FF6600']) {
        colorMap['#ff6600'] = colorMap['#FF6600'];
    }

    const selectedFont = fontSelect.value;

    chrome.storage.sync.set({
        colorMap: colorMap,
        urlPattern: urlPatternInput.value,
        selectedFont: selectedFont,
        language: currentLang
    }, () => {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            if (tabs[0]) {
                chrome.tabs.sendMessage(tabs[0].id, {action: 'refreshCSS'}).catch(() => {});
            }
        });
        window.close();
    });
});

resetBtn.addEventListener('click', () => {
    const confirmText = currentLang === 'ru' 
        ? 'Сбросить все настройки цветов и шрифта?' 
        : 'Reset all color and font settings?';
    
    if(confirm(confirmText)) {
        chrome.storage.sync.clear(() => {
            chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
                if (tabs[0]) {
                    chrome.tabs.sendMessage(tabs[0].id, {action: 'refreshCSS'}).catch(() => {});
                }
            });
            window.close();
        });
    }
});

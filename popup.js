const originalColors = [
    { hex: '#ff6600', name: 'Верхняя Панель' },
    { hex: '#ffffff', name: 'Текст "Хлебные крошки"' },
    { hex: '#ba5009', name: 'Фон заголовка кнопки' },
    { hex: '#ffffff', name: 'Текст заголовка кнопки' },
    { hex: '#994208', name: 'Фон выбранного меню на верхней панели' },
    { hex: '#ffffff', name: 'Выделенный текст меню верхней панели' },
    { hex: '#ffffff', name: 'Текст Пункта Меню на Верхней Панели' },
    { hex: '#DFE1E6', name: 'Фон Выбранного Пункта Меню' },
    { hex: '#505F79', name: 'Текст Выбранного Пункта Меню' },
    { hex: '#DFE1E6', name: 'Фон поля поиска' },
    { hex: '#DEEBFF', name: 'Текст поля поиска' },
    { hex: '#172B4D', name: 'Фон Выбранного Меню Страницы' },
    { hex: '#0052CC', name: 'Текст Пункта Меню Страницы' },
    { hex: '#172B4D', name: 'Текст Заголовка' },
    { hex: '#0052CC', name: 'Ссылки' },
    { hex: '#d1793f', name: 'Границы и Разделители' }
];

const colorList = document.getElementById('colorList');
const urlPatternInput = document.getElementById('urlPattern');
const fontSelect = document.getElementById('fontSelect');
const saveBtn = document.getElementById('saveBtn');
const resetBtn = document.getElementById('resetBtn');

function normalizeHex(hex) {
    if (hex.startsWith('#') && hex.length === 4) {
        return '#' + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
    }
    return hex;
}

chrome.storage.sync.get(['colorMap', 'urlPattern', 'selectedFont'], (result) => {
    const colorMap = result.colorMap || {};
    urlPatternInput.value = result.urlPattern || '*://*/*';
    fontSelect.value = result.selectedFont || 'Arial, sans-serif';

    originalColors.forEach(color => {
        const item = document.createElement('div');
        item.className = 'color-item';
        
        const label = document.createElement('div');
        label.className = 'color-label';
        label.textContent = color.name;
        
        const swatch = document.createElement('div');
        swatch.className = 'color-swatch';
        swatch.style.backgroundColor = color.hex;
        
        const inputWrapper = document.createElement('div');
        inputWrapper.className = 'color-input-wrapper';
        
        const textInput = document.createElement('input');
        textInput.type = 'text';
        textInput.dataset.original = color.hex;
        textInput.value = colorMap[color.hex] || color.hex;
        
        const colorInput = document.createElement('input');
        colorInput.type = 'color';
        colorInput.dataset.original = color.hex;
        
        if (color.hex.startsWith('rgba')) {
            colorInput.disabled = true;
            colorInput.style.opacity = '0.3';
        } else {
            colorInput.value = colorMap[color.hex] || normalizeHex(color.hex);
        }
        
        // Синхронизация text и color inputs
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
});

saveBtn.addEventListener('click', () => {
    const colorMap = {};
    document.querySelectorAll('.color-input-wrapper input[type="text"]').forEach(input => {
        colorMap[input.dataset.original] = input.value;
    });
    
    // Дублируем значение для регистра #ff6600 и #FF6600
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
        selectedFont: selectedFont
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
    if(confirm('Сбросить все настройки цветов и шрифта?')) {
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

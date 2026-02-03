// 应用主逻辑

class UnitConverterApp {
    constructor() {
        this.currentCategory = 'length';
        this.history = this.loadHistory();
        this.preferences = this.loadPreferences();
        this.init();
    }

    init() {
        this.cacheElements();
        this.setupEventListeners();
        this.initLanguage();
        
        // 检查URL hash来确定初始类别
        const hashCategory = window.location.hash.slice(1); // 移除 #
        const validCategories = ['length', 'weight', 'temperature', 'volume', 'area', 'speed', 'dataStorage', 'fuelMileage', 'power', 'pressure', 'time', 'currency'];
        const category = validCategories.includes(hashCategory) ? hashCategory : (this.preferences.category || 'length');
        
        this.setCategory(category);
        
        this.renderHistory();
    }

    cacheElements() {
        // 语言选择器
        this.languageSelect = document.getElementById('language-select');
        
        // 类别选择按钮
        this.categoryBtns = document.querySelectorAll('.category-btn');
        
        // 输入和单位
        this.inputValue = document.getElementById('input-value');
        this.fromUnit = document.getElementById('from-unit');
        this.toUnit = document.getElementById('to-unit');
        this.swapBtn = document.getElementById('swap-btn');
        
        // 结果显示
        this.resultValue = document.getElementById('result-value');
        this.resultUnit = document.getElementById('result-unit');
        this.copyBtn = document.getElementById('copy-btn');
        
        // 历史记录
        this.historyList = document.getElementById('history-list');
        this.clearHistoryBtn = document.getElementById('clear-history-btn');
        
        // 可翻译的元素
        this.appTitle = document.getElementById('app-title');
        this.appSubtitle = document.getElementById('app-subtitle');
        this.labelInput = document.getElementById('label-input');
        this.labelFrom = document.getElementById('label-from');
        this.labelTo = document.getElementById('label-to');
        this.btnCopy = document.getElementById('btn-copy');
        this.labelHistory = document.getElementById('label-history');
    }

    initLanguage() {
        // 设置当前语言
        this.languageSelect.value = i18n.getCurrentLanguage();
        this.updateLanguage();
    }

    updateLanguage() {
        // 更新页面文本
        this.appTitle.textContent = i18n.t('title');
        this.appSubtitle.textContent = i18n.t('subtitle');
        this.labelInput.textContent = i18n.t('inputLabel');
        this.inputValue.placeholder = i18n.t('inputPlaceholder');
        this.labelFrom.textContent = i18n.t('from');
        this.labelTo.textContent = i18n.t('to');
        this.btnCopy.textContent = i18n.t('copy');
        this.labelHistory.textContent = i18n.t('history');
        this.clearHistoryBtn.textContent = i18n.t('clearHistory');
        
        // 更新类别按钮
        this.categoryBtns.forEach(btn => {
            const category = btn.dataset.category;
            btn.textContent = i18n.t(`categories.${category}`);
        });
        
        // 更新单位选项
        this.updateUnitSelects();
        
        // 更新历史记录
        this.renderHistory();
    }

    setupEventListeners() {
        // 语言切换
        this.languageSelect.addEventListener('change', () => {
            i18n.setLanguage(this.languageSelect.value);
            this.updateLanguage();
            this.handleConvert();
        });
        
        // 类别选择
        this.categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.setCategory(btn.dataset.category);
            });
        });

        // 输入值变化
        this.inputValue.addEventListener('input', () => this.handleConvert());

        // 单位变化
        this.fromUnit.addEventListener('change', () => {
            this.saveUnitPreference();
            this.handleConvert();
        });
        this.toUnit.addEventListener('change', () => {
            this.saveUnitPreference();
            this.handleConvert();
        });

        // 交换单位
        this.swapBtn.addEventListener('click', () => this.swapUnits());

        // 复制结果
        this.copyBtn.addEventListener('click', () => this.copyResult());

        // 清空历史
        this.clearHistoryBtn.addEventListener('click', () => this.clearHistory());
    }

    setCategory(category) {
        this.currentCategory = category;

        // 更新按钮状态
        this.categoryBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.category === category);
        });

        // 隐藏货币更新时间提示
        if (category !== 'currency') {
            this.hideUpdateTime();
        }

        // 更新单位选项
        this.updateUnitSelects();

        // 保存类别偏好
        this.savePreference('category', category);

        // 重新计算
        setTimeout(() => this.handleConvert(), 10);
    }

    // 初始化时触发转换
    initializeConversion() {
        this.handleConvert();
    }

    updateUnitSelects() {
        const units = getUnits(this.currentCategory);
        const unitKeys = Object.keys(units);

        // 暂时移除事件监听器以避免多次触发
        const fromHandler = this.fromUnit.onchange;
        const toHandler = this.toUnit.onchange;
        this.fromUnit.onchange = null;
        this.toUnit.onchange = null;

        // 清空现有选项
        this.fromUnit.innerHTML = '';
        this.toUnit.innerHTML = '';

        // 添加新选项（使用多语言）
        unitKeys.forEach((key, index) => {
            const unitName = i18n.t(`units.${key}`) || units[key].name;
            
            const fromOption = document.createElement('option');
            fromOption.value = key;
            fromOption.textContent = unitName;
            this.fromUnit.appendChild(fromOption);

            const toOption = document.createElement('option');
            toOption.value = key;
            toOption.textContent = unitName;
            this.toUnit.appendChild(toOption);
        });

        // 检查是否有保存的单位偏好
        if (this.preferences.units && this.preferences.units[this.currentCategory]) {
            const savedUnits = this.preferences.units[this.currentCategory];
            this.fromUnit.value = savedUnits.from || unitKeys[0];
            this.toUnit.value = savedUnits.to || (unitKeys[1] || unitKeys[0]);
        } else {
            // 设置默认值
            this.fromUnit.value = unitKeys[0];
            this.toUnit.value = unitKeys[1] || unitKeys[0];
        }

        // 恢复事件监听器
        this.fromUnit.onchange = fromHandler;
        this.toUnit.onchange = toHandler;
    }

    async handleConvert() {
        const value = this.inputValue.value;
        const fromUnit = this.fromUnit.value;
        const toUnit = this.toUnit.value;

        if (!value || value === '') {
            this.resultValue.textContent = '0';
            this.resultUnit.textContent = i18n.t(`units.${toUnit}`) || getUnitName(this.currentCategory, toUnit);
            return;
        }

        // 显示加载状态（仅对货币）
        if (this.currentCategory === 'currency') {
            this.resultValue.textContent = '...';
        }

        try {
            const result = await convertValue(value, fromUnit, toUnit, this.currentCategory);
            this.resultValue.textContent = this.formatResult(result);
            this.resultUnit.textContent = i18n.t(`units.${toUnit}`) || getUnitName(this.currentCategory, toUnit);

            // 保存到历史
            if (parseFloat(value) !== 0) {
                this.addToHistory(value, fromUnit, result, toUnit);
            }
            
            // 显示汇率更新时间（仅货币）
            if (this.currentCategory === 'currency' && typeof currencyAPI !== 'undefined') {
                this.showLastUpdateTime();
            }
        } catch (error) {
            console.error('Conversion error:', error);
            this.resultValue.textContent = 'Error';
        }
    }

    showLastUpdateTime() {
        const updateTime = currencyAPI.getLastUpdateTime();
        if (updateTime) {
            const timeStr = updateTime.toLocaleString(i18n.getCurrentLanguage());
            const existingNote = document.getElementById('currency-update-note');
            
            if (existingNote) {
                existingNote.textContent = `${i18n.t('rateUpdate')}: ${timeStr}`;
            } else {
                const note = document.createElement('div');
                note.id = 'currency-update-note';
                note.className = 'currency-note';
                note.textContent = `${i18n.t('rateUpdate')}: ${timeStr}`;
                this.resultBox = document.querySelector('.result-box');
                if (this.resultBox && this.resultBox.parentNode) {
                    this.resultBox.parentNode.insertBefore(note, this.resultBox.nextSibling);
                }
            }
        }
    }

    hideUpdateTime() {
        const note = document.getElementById('currency-update-note');
        if (note) {
            note.remove();
        }
    }

    formatResult(value) {
        // 如果是整数，直接返回
        if (Number.isInteger(value)) {
            return value.toString();
        }

        // 否则最多显示6位小数
        const result = parseFloat(value.toFixed(6));
        return result.toString();
    }

    swapUnits() {
        const temp = this.fromUnit.value;
        this.fromUnit.value = this.toUnit.value;
        this.toUnit.value = temp;
        this.handleConvert();
    }

    copyResult() {
        const text = `${this.resultValue.textContent} ${this.resultUnit.textContent}`;
        navigator.clipboard.writeText(text).then(() => {
            // 显示复制成功反馈
            this.copyBtn.classList.add('copied');
            this.btnCopy.textContent = i18n.t('copied');
            
            setTimeout(() => {
                this.copyBtn.classList.remove('copied');
                this.btnCopy.textContent = i18n.t('copy');
            }, 2000);
        });
    }

    addToHistory(inputValue, fromUnit, resultValue, toUnit) {
        const item = {
            input: parseFloat(inputValue),
            from: fromUnit,
            result: resultValue,
            to: toUnit,
            category: this.currentCategory,
            time: new Date().getTime()
        };

        // 检查是否已存在相同的转换
        const isDuplicate = this.history.some(h => 
            h.input === item.input &&
            h.from === item.from &&
            h.to === item.to &&
            h.category === item.category
        );

        if (!isDuplicate) {
            this.history.unshift(item);
            
            // 保持历史记录最多50条
            if (this.history.length > 50) {
                this.history.pop();
            }

            this.saveHistory();
            this.renderHistory();
        }
    }

    renderHistory() {
        if (this.history.length === 0) {
            this.historyList.innerHTML = `<p class="empty-state">${i18n.t('emptyHistory')}</p>`;
            return;
        }

        this.historyList.innerHTML = this.history.map((item, index) => {
            const fromUnitName = i18n.t(`units.${item.from}`) || getUnitName(item.category, item.from);
            const toUnitName = i18n.t(`units.${item.to}`) || getUnitName(item.category, item.to);
            const timeStr = new Date(item.time).toLocaleTimeString(i18n.getCurrentLanguage());
            
            return `
                <div class="history-item" data-index="${index}">
                    <div class="history-item-text">
                        ${item.input} ${fromUnitName} = ${this.formatResult(item.result)} ${toUnitName}
                    </div>
                    <div class="history-item-time">${timeStr}</div>
                </div>
            `;
        }).join('');

        // 为历史项添加点击事件
        this.historyList.querySelectorAll('.history-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const index = e.currentTarget.dataset.index;
                const historyItem = this.history[index];
                
                this.setCategory(historyItem.category);
                setTimeout(() => {
                    this.inputValue.value = historyItem.input;
                    this.fromUnit.value = historyItem.from;
                    this.toUnit.value = historyItem.to;
                    this.handleConvert();
                }, 0);
            });
        });
    }

    clearHistory() {
        if (confirm(i18n.t('confirmClear'))) {
            this.history = [];
            this.saveHistory();
            this.renderHistory();
        }
    }

    // 加载偏好设置
    loadPreferences() {
        try {
            const saved = localStorage.getItem('converterPreferences');
            return saved ? JSON.parse(saved) : { category: 'length', units: {} };
        } catch (error) {
            console.error('Failed to load preferences', error);
            return { category: 'length', units: {} };
        }
    }

    // 保存偏好设置
    savePreferences() {
        try {
            localStorage.setItem('converterPreferences', JSON.stringify(this.preferences));
        } catch (error) {
            console.error('Failed to save preferences', error);
        }
    }

    // 保存单个偏好项
    savePreference(key, value) {
        this.preferences[key] = value;
        this.savePreferences();
    }

    // 保存当前单位选择
    saveUnitPreference() {
        if (!this.preferences.units) {
            this.preferences.units = {};
        }
        
        this.preferences.units[this.currentCategory] = {
            from: this.fromUnit.value,
            to: this.toUnit.value
        };
        
        this.savePreferences();
    }

    saveHistory() {
        localStorage.setItem('converterHistory', JSON.stringify(this.history));
    }

    loadHistory() {
        const saved = localStorage.getItem('converterHistory');
        return saved ? JSON.parse(saved) : [];
    }
}

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    new UnitConverterApp();
});

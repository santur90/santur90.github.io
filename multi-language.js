// 多语言页面通用脚本
// 用于所有单页面转换器 (cm-to-inch, kg-to-lbs, celsius-to-fahrenheit, m-to-ft, km-to-miles)

class MultiLanguagePage {
    constructor(translations) {
        this.translations = translations;
        this.currentLang = this.loadLanguage() || this.detectSystemLanguage() || 'en';
        this.init();
    }

    loadLanguage() {
        return localStorage.getItem('language');
    }

    saveLanguage(lang) {
        localStorage.setItem('language', lang);
    }

    detectSystemLanguage() {
        const browserLang = navigator.language || navigator.userLanguage || 'en';
        const langPrefix = browserLang.split('-')[0].toLowerCase();
        
        const supportedLangs = {
            'zh': 'zh',
            'en': 'en',
            'fr': 'fr',
            'es': 'es'
        };
        
        if (supportedLangs[langPrefix]) {
            return supportedLangs[langPrefix];
        }
        
        return 'en';
    }

    init() {
        this.setupLanguageSwitcher();
        this.applyLanguage();
    }

    setupLanguageSwitcher() {
        // 如果页面中没有语言选择器，就创建一个
        let switcher = document.getElementById('language-switcher');
        if (!switcher) {
            switcher = document.createElement('div');
            switcher.id = 'language-switcher';
            switcher.style.cssText = 'position: fixed; top: 20px; right: 20px; z-index: 999; background: white; padding: 8px 12px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);';
            
            const select = document.createElement('select');
            select.id = 'language-select';
            select.style.cssText = 'padding: 6px 10px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px; cursor: pointer; background-color: white; color: #333;';
            
            const languages = [
                { code: 'zh', name: '中文' },
                { code: 'en', name: 'English' },
                { code: 'fr', name: 'Français' },
                { code: 'es', name: 'Español' }
            ];
            
            languages.forEach(lang => {
                const option = document.createElement('option');
                option.value = lang.code;
                option.textContent = lang.name;
                select.appendChild(option);
            });
            
            select.value = this.currentLang;
            select.addEventListener('change', (e) => {
                this.currentLang = e.target.value;
                this.saveLanguage(this.currentLang);
                this.applyLanguage();
            });
            
            switcher.appendChild(select);
            document.body.appendChild(switcher);
        } else {
            const select = document.getElementById('language-select');
            if (select) {
                select.value = this.currentLang;
                select.addEventListener('change', (e) => {
                    this.currentLang = e.target.value;
                    this.saveLanguage(this.currentLang);
                    this.applyLanguage();
                });
            }
        }
    }

    t(key, defaultValue = key) {
        const keys = key.split('.');
        let value = this.translations[this.currentLang];
        
        for (const k of keys) {
            if (value && value[k] !== undefined) {
                value = value[k];
            } else {
                return defaultValue;
            }
        }
        
        return value;
    }

    applyLanguage() {
        // 更新所有带有 data-i18n 属性的元素
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translated = this.t(key);
            
            if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
                el.placeholder = translated;
            } else if (el.tagName === 'TEXTAREA' && el.hasAttribute('placeholder')) {
                el.placeholder = translated;
            } else {
                el.textContent = translated;
            }
        });

        // 更新带有 data-i18n-attr 属性的元素（用于属性）
        document.querySelectorAll('[data-i18n-attr]').forEach(el => {
            const attrs = el.getAttribute('data-i18n-attr').split('|');
            attrs.forEach(attr => {
                const [attrName, key] = attr.split(':');
                const translated = this.t(key);
                el.setAttribute(attrName, translated);
            });
        });

        // 调用自定义的语言更新回调（如果存在）
        if (typeof this.onLanguageChange === 'function') {
            this.onLanguageChange(this.currentLang);
        }
    }
}

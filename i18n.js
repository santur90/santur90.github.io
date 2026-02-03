// 多语言支持

const translations = {
    zh: {
        title: '单位换算',
        subtitle: 'Unit Converter',
        inputLabel: '输入值',
        inputPlaceholder: '输入数值',
        from: '从',
        to: '到',
        copy: '复制',
        copied: '已复制',
        history: '转换历史',
        clearHistory: '清空历史',
        emptyHistory: '暂无历史记录',
        confirmClear: '确认要清空所有历史记录吗?',
        rateUpdate: '汇率更新',
        linkCopied: '链接已复制',
        shareText: '看看这个超棒的单位换算工具！',
        scanToShare: '扫码分享到微信',
        wechatHint: '使用微信扫描此二维码分享',
        close: '关闭',
        categories: {
            length: '长度',
            weight: '重量',
            temperature: '温度',
            volume: '体积',
            area: '面积',
            speed: '速度',
            dataStorage: '数据存储',
            fuelMileage: '燃油效率',
            power: '功率',
            pressure: '压力',
            time: '时间',
            currency: '货币'
        },
        units: {
            // Length
            'm': '米 (m)',
            'km': '公里 (km)',
            'cm': '厘米 (cm)',
            'mm': '毫米 (mm)',
            'mi': '英里 (mi)',
            'yd': '码 (yd)',
            'ft': '英尺 (ft)',
            'in': '英寸 (in)',
            'nm': '海里 (nm)',
            'A': '埃 (Å)',
            // Weight
            'g': '克 (g)',
            'kg': '千克 (kg)',
            'mg': '毫克 (mg)',
            'oz': '盎司 (oz)',
            'lb': '磅 (lb)',
            't': '吨 (t)',
            'gr': '格令 (gr)',
            'st': '英石 (st)',
            // Temperature
            'C': '摄氏度 (°C)',
            'F': '华氏度 (°F)',
            'K': '开尔文 (K)',
            // Volume
            'L': '升 (L)',
            'mL': '毫升 (mL)',
            'gal': '加仑 (gal)',
            'bbl': '桶 (bbl)',
            'pint': '品脱 (pint)',
            'cup': '杯 (cup)',
            'tbsp': '汤匙 (tbsp)',
            'tsp': '茶匙 (tsp)',
            'm3': '立方米 (m³)',
            'cm3': '立方厘米 (cm³)',
            // Area
            'm2': '平方米 (m²)',
            'km2': '平方公里 (km²)',
            'cm2': '平方厘米 (cm²)',
            'mm2': '平方毫米 (mm²)',
            'mi2': '平方英里 (mi²)',
            'yd2': '平方码 (yd²)',
            'ft2': '平方英尺 (ft²)',
            'in2': '平方英寸 (in²)',
            'ha': '公顷 (ha)',
            'ac': '英亩 (ac)',
            // Speed
            'm/s': '米/秒 (m/s)',
            'km/h': '公里/小时 (km/h)',
            'mph': '英里/小时 (mph)',
            'knot': '节 (knot)',
            'ft/s': '英尺/秒 (ft/s)',
            'cm/s': '厘米/秒 (cm/s)',
            // Data Storage
            'B': '字节 (B)',
            'KB': '千字节 (KB)',
            'MB': '兆字节 (MB)',
            'GB': '吉字节 (GB)',
            'TB': '太字节 (TB)',
            'PB': '拍字节 (PB)',
            'KiB': '千字节 (KiB)',
            'MiB': '兆字节 (MiB)',
            'GiB': '吉字节 (GiB)',
            'TiB': '太字节 (TiB)',
            'bit': '比特 (bit)',
            // Fuel Mileage
            'L/100km': '升/100公里 (L/100km)',
            'mpg(US)': '英里/加仑(美) (mpg)',
            'mpg(UK)': '英里/加仑(英) (mpg)',
            'km/L': '公里/升 (km/L)',
            // Power
            'W': '瓦特 (W)',
            'kW': '千瓦 (kW)',
            'MW': '兆瓦 (MW)',
            'hp': '马力 (hp)',
            'BTU/h': '英热单位/小时 (BTU/h)',
            'ft-lbf/s': '英尺磅/秒 (ft-lbf/s)',
            'cal/s': '卡路里/秒 (cal/s)',
            // Pressure
            'Pa': '帕斯卡 (Pa)',
            'kPa': '千帕 (kPa)',
            'MPa': '兆帕 (MPa)',
            'bar': '巴 (bar)',
            'psi': '磅/平方英寸 (psi)',
            'atm': '标准大气压 (atm)',
            'torr': '托 (torr)',
            'mmHg': '毫米汞柱 (mmHg)',
            // Time
            's': '秒 (s)',
            'min': '分钟 (min)',
            'h': '小时 (h)',
            'd': '天 (d)',
            'week': '周 (week)',
            'month': '月 (month)',
            'year': '年 (year)',
            'ms': '毫秒 (ms)',
            'μs': '微秒 (μs)',
            // Currency
            'USD': '美元 (USD)',
            'EUR': '欧元 (EUR)',
            'GBP': '英镑 (GBP)',
            'CNY': '人民币 (CNY)',
            'JPY': '日元 (JPY)',
            'KRW': '韩元 (KRW)',
            'AUD': '澳元 (AUD)',
            'CAD': '加元 (CAD)',
            'CHF': '瑞士法郎 (CHF)',
            'HKD': '港币 (HKD)',
            'INR': '印度卢比 (INR)',
            'SGD': '新加坡元 (SGD)',
            'NZD': '新西兰元 (NZD)',
            'MXN': '墨西哥比索 (MXN)',
            'BRL': '巴西雷亚尔 (BRL)'
        }
    },
    en: {
        title: 'Unit Converter',
        subtitle: 'Convert units easily',
        inputLabel: 'Input Value',
        inputPlaceholder: 'Enter value',
        from: 'From',
        to: 'To',
        copy: 'Copy',
        copied: 'Copied',
        history: 'Conversion History',
        clearHistory: 'Clear History',
        emptyHistory: 'No history yet',
        confirmClear: 'Are you sure you want to clear all history?',
        rateUpdate: 'Rate Updated',
        linkCopied: 'Link copied!',
        shareText: 'Check out this awesome Unit Converter!',
        scanToShare: 'Scan to share on WeChat',
        wechatHint: 'Scan this QR code with WeChat to share',
        close: 'Close',
        categories: {
            length: 'Length',
            weight: 'Weight',
            temperature: 'Temperature',
            volume: 'Volume',
            area: 'Area',
            speed: 'Speed',
            dataStorage: 'Data Storage',
            fuelMileage: 'Fuel Mileage',
            power: 'Power',
            pressure: 'Pressure',
            time: 'Time',
            currency: 'Currency'
        },
        units: {
            'm': 'Meter (m)', 'km': 'Kilometer (km)', 'cm': 'Centimeter (cm)', 'mm': 'Millimeter (mm)',
            'mi': 'Mile (mi)', 'yd': 'Yard (yd)', 'ft': 'Foot (ft)', 'in': 'Inch (in)',
            'nm': 'Nautical Mile (nm)', 'A': 'Angstrom (Å)',
            'g': 'Gram (g)', 'kg': 'Kilogram (kg)', 'mg': 'Milligram (mg)', 'oz': 'Ounce (oz)',
            'lb': 'Pound (lb)', 't': 'Ton (t)', 'gr': 'Grain (gr)', 'st': 'Stone (st)',
            'C': 'Celsius (°C)', 'F': 'Fahrenheit (°F)', 'K': 'Kelvin (K)',
            'L': 'Liter (L)', 'mL': 'Milliliter (mL)', 'gal': 'Gallon (gal)', 'bbl': 'Barrel (bbl)',
            'pint': 'Pint', 'cup': 'Cup', 'tbsp': 'Tablespoon (tbsp)', 'tsp': 'Teaspoon (tsp)',
            'm3': 'Cubic Meter (m³)', 'cm3': 'Cubic Centimeter (cm³)',
            'm2': 'Square Meter (m²)', 'km2': 'Square Kilometer (km²)', 'cm2': 'Square Centimeter (cm²)',
            'mm2': 'Square Millimeter (mm²)', 'mi2': 'Square Mile (mi²)', 'yd2': 'Square Yard (yd²)',
            'ft2': 'Square Foot (ft²)', 'in2': 'Square Inch (in²)', 'ha': 'Hectare (ha)', 'ac': 'Acre (ac)',
            'm/s': 'Meter/Second (m/s)', 'km/h': 'Kilometer/Hour (km/h)', 'mph': 'Miles/Hour (mph)',
            'knot': 'Knot', 'ft/s': 'Feet/Second (ft/s)', 'cm/s': 'Centimeter/Second (cm/s)',
            'B': 'Byte (B)', 'KB': 'Kilobyte (KB)', 'MB': 'Megabyte (MB)', 'GB': 'Gigabyte (GB)',
            'TB': 'Terabyte (TB)', 'PB': 'Petabyte (PB)', 'KiB': 'Kibibyte (KiB)', 'MiB': 'Mebibyte (MiB)',
            'GiB': 'Gibibyte (GiB)', 'TiB': 'Tebibyte (TiB)', 'bit': 'Bit',
            'L/100km': 'Liter/100km', 'mpg(US)': 'Miles/Gallon (US)', 'mpg(UK)': 'Miles/Gallon (UK)',
            'km/L': 'Kilometer/Liter',
            'W': 'Watt (W)', 'kW': 'Kilowatt (kW)', 'MW': 'Megawatt (MW)', 'hp': 'Horsepower (hp)',
            'BTU/h': 'BTU/Hour', 'ft-lbf/s': 'Foot-pound/Second', 'cal/s': 'Calorie/Second',
            'Pa': 'Pascal (Pa)', 'kPa': 'Kilopascal (kPa)', 'MPa': 'Megapascal (MPa)', 'bar': 'Bar',
            'psi': 'PSI', 'atm': 'Atmosphere (atm)', 'torr': 'Torr', 'mmHg': 'mmHg',
            's': 'Second (s)', 'min': 'Minute (min)', 'h': 'Hour (h)', 'd': 'Day (d)',
            'week': 'Week', 'month': 'Month', 'year': 'Year', 'ms': 'Millisecond (ms)', 'μs': 'Microsecond (μs)',
            'USD': 'US Dollar (USD)', 'EUR': 'Euro (EUR)', 'GBP': 'British Pound (GBP)',
            'CNY': 'Chinese Yuan (CNY)', 'JPY': 'Japanese Yen (JPY)', 'KRW': 'Korean Won (KRW)',
            'AUD': 'Australian Dollar (AUD)', 'CAD': 'Canadian Dollar (CAD)', 'CHF': 'Swiss Franc (CHF)',
            'HKD': 'Hong Kong Dollar (HKD)', 'INR': 'Indian Rupee (INR)', 'SGD': 'Singapore Dollar (SGD)',
            'NZD': 'New Zealand Dollar (NZD)', 'MXN': 'Mexican Peso (MXN)', 'BRL': 'Brazilian Real (BRL)'
        }
    },
    fr: {
        title: 'Convertisseur d\'Unités',
        subtitle: 'Convertir facilement',
        inputLabel: 'Valeur d\'entrée',
        inputPlaceholder: 'Entrer une valeur',
        from: 'De',
        to: 'À',
        copy: 'Copier',
        copied: 'Copié',
        history: 'Historique',
        clearHistory: 'Effacer l\'historique',
        emptyHistory: 'Aucun historique',
        confirmClear: 'Voulez-vous vraiment effacer tout l\'historique?',
        rateUpdate: 'Taux mis à jour',
        linkCopied: 'Lien copié!',
        shareText: 'Découvrez ce convertisseur d\'unités génial!',
        scanToShare: 'Scanner pour partager sur WeChat',
        wechatHint: 'Scannez ce code QR avec WeChat pour partager',
        close: 'Fermer',
        categories: {
            length: 'Longueur',
            weight: 'Poids',
            temperature: 'Température',
            volume: 'Volume',
            area: 'Superficie',
            speed: 'Vitesse',
            dataStorage: 'Stockage de données',
            fuelMileage: 'Consommation de carburant',
            power: 'Puissance',
            pressure: 'Pression',
            time: 'Temps',
            currency: 'Devise'
        },
        units: {
            'm': 'Mètre (m)', 'km': 'Kilomètre (km)', 'cm': 'Centimètre (cm)', 'mm': 'Millimètre (mm)',
            'mi': 'Mile (mi)', 'yd': 'Yard (yd)', 'ft': 'Pied (ft)', 'in': 'Pouce (in)',
            'nm': 'Mille nautique (nm)', 'A': 'Angström (Å)',
            'g': 'Gramme (g)', 'kg': 'Kilogramme (kg)', 'mg': 'Milligramme (mg)', 'oz': 'Once (oz)',
            'lb': 'Livre (lb)', 't': 'Tonne (t)', 'gr': 'Grain (gr)', 'st': 'Stone (st)',
            'C': 'Celsius (°C)', 'F': 'Fahrenheit (°F)', 'K': 'Kelvin (K)',
            'L': 'Litre (L)', 'mL': 'Millilitre (mL)', 'gal': 'Gallon (gal)', 'bbl': 'Baril (bbl)',
            'pint': 'Pinte', 'cup': 'Tasse', 'tbsp': 'Cuillère à soupe', 'tsp': 'Cuillère à café',
            'm3': 'Mètre cube (m³)', 'cm3': 'Centimètre cube (cm³)',
            'm2': 'Mètre carré (m²)', 'km2': 'Kilomètre carré (km²)', 'cm2': 'Centimètre carré (cm²)',
            'mm2': 'Millimètre carré (mm²)', 'mi2': 'Mile carré (mi²)', 'yd2': 'Yard carré (yd²)',
            'ft2': 'Pied carré (ft²)', 'in2': 'Pouce carré (in²)', 'ha': 'Hectare (ha)', 'ac': 'Acre (ac)',
            'm/s': 'Mètre/Seconde (m/s)', 'km/h': 'Kilomètre/Heure (km/h)', 'mph': 'Miles/Heure (mph)',
            'knot': 'Nœud', 'ft/s': 'Pieds/Seconde (ft/s)', 'cm/s': 'Centimètre/Seconde (cm/s)',
            'B': 'Octet (B)', 'KB': 'Kilooctet (KB)', 'MB': 'Mégaoctet (MB)', 'GB': 'Gigaoctet (GB)',
            'TB': 'Téraoctet (TB)', 'PB': 'Pétaoctet (PB)', 'KiB': 'Kibioctet (KiB)', 'MiB': 'Mébioctet (MiB)',
            'GiB': 'Gibioctet (GiB)', 'TiB': 'Tébioctet (TiB)', 'bit': 'Bit',
            'L/100km': 'Litre/100km', 'mpg(US)': 'Miles/Gallon (US)', 'mpg(UK)': 'Miles/Gallon (UK)',
            'km/L': 'Kilomètre/Litre',
            'W': 'Watt (W)', 'kW': 'Kilowatt (kW)', 'MW': 'Mégawatt (MW)', 'hp': 'Chevaux (hp)',
            'BTU/h': 'BTU/Heure', 'ft-lbf/s': 'Pied-livre/Seconde', 'cal/s': 'Calorie/Seconde',
            'Pa': 'Pascal (Pa)', 'kPa': 'Kilopascal (kPa)', 'MPa': 'Mégapascal (MPa)', 'bar': 'Bar',
            'psi': 'PSI', 'atm': 'Atmosphère (atm)', 'torr': 'Torr', 'mmHg': 'mmHg',
            's': 'Seconde (s)', 'min': 'Minute (min)', 'h': 'Heure (h)', 'd': 'Jour (d)',
            'week': 'Semaine', 'month': 'Mois', 'year': 'Année', 'ms': 'Milliseconde (ms)', 'μs': 'Microseconde (μs)',
            'USD': 'Dollar US (USD)', 'EUR': 'Euro (EUR)', 'GBP': 'Livre sterling (GBP)',
            'CNY': 'Yuan chinois (CNY)', 'JPY': 'Yen japonais (JPY)', 'KRW': 'Won coréen (KRW)',
            'AUD': 'Dollar australien (AUD)', 'CAD': 'Dollar canadien (CAD)', 'CHF': 'Franc suisse (CHF)',
            'HKD': 'Dollar de Hong Kong (HKD)', 'INR': 'Roupie indienne (INR)', 'SGD': 'Dollar de Singapour (SGD)',
            'NZD': 'Dollar néo-zélandais (NZD)', 'MXN': 'Peso mexicain (MXN)', 'BRL': 'Réal brésilien (BRL)'
        }
    },
    es: {
        title: 'Convertidor de Unidades',
        subtitle: 'Convierte fácilmente',
        inputLabel: 'Valor de entrada',
        inputPlaceholder: 'Introducir valor',
        from: 'De',
        to: 'A',
        copy: 'Copiar',
        copied: 'Copiado',
        history: 'Historial',
        clearHistory: 'Borrar historial',
        emptyHistory: 'Sin historial',
        confirmClear: '¿Estás seguro de que quieres borrar todo el historial?',
        rateUpdate: 'Tasa actualizada',
        linkCopied: '¡Enlace copiado!',
        shareText: '¡Mira este increíble convertidor de unidades!',
        scanToShare: 'Escanear para compartir en WeChat',
        wechatHint: 'Escanea este código QR con WeChat para compartir',
        close: 'Cerrar',
        categories: {
            length: 'Longitud',
            weight: 'Peso',
            temperature: 'Temperatura',
            volume: 'Volumen',
            area: 'Área',
            speed: 'Velocidad',
            dataStorage: 'Almacenamiento de datos',
            fuelMileage: 'Consumo de combustible',
            power: 'Potencia',
            pressure: 'Presión',
            time: 'Tiempo',
            currency: 'Moneda'
        },
        units: {
            'm': 'Metro (m)', 'km': 'Kilómetro (km)', 'cm': 'Centímetro (cm)', 'mm': 'Milímetro (mm)',
            'mi': 'Milla (mi)', 'yd': 'Yarda (yd)', 'ft': 'Pie (ft)', 'in': 'Pulgada (in)',
            'nm': 'Milla náutica (nm)', 'A': 'Angstrom (Å)',
            'g': 'Gramo (g)', 'kg': 'Kilogramo (kg)', 'mg': 'Miligramo (mg)', 'oz': 'Onza (oz)',
            'lb': 'Libra (lb)', 't': 'Tonelada (t)', 'gr': 'Grano (gr)', 'st': 'Stone (st)',
            'C': 'Celsius (°C)', 'F': 'Fahrenheit (°F)', 'K': 'Kelvin (K)',
            'L': 'Litro (L)', 'mL': 'Mililitro (mL)', 'gal': 'Galón (gal)', 'bbl': 'Barril (bbl)',
            'pint': 'Pinta', 'cup': 'Taza', 'tbsp': 'Cucharada', 'tsp': 'Cucharadita',
            'm3': 'Metro cúbico (m³)', 'cm3': 'Centímetro cúbico (cm³)',
            'm2': 'Metro cuadrado (m²)', 'km2': 'Kilómetro cuadrado (km²)', 'cm2': 'Centímetro cuadrado (cm²)',
            'mm2': 'Milímetro cuadrado (mm²)', 'mi2': 'Milla cuadrada (mi²)', 'yd2': 'Yarda cuadrada (yd²)',
            'ft2': 'Pie cuadrado (ft²)', 'in2': 'Pulgada cuadrada (in²)', 'ha': 'Hectárea (ha)', 'ac': 'Acre (ac)',
            'm/s': 'Metro/Segundo (m/s)', 'km/h': 'Kilómetro/Hora (km/h)', 'mph': 'Millas/Hora (mph)',
            'knot': 'Nudo', 'ft/s': 'Pies/Segundo (ft/s)', 'cm/s': 'Centímetro/Segundo (cm/s)',
            'B': 'Byte (B)', 'KB': 'Kilobyte (KB)', 'MB': 'Megabyte (MB)', 'GB': 'Gigabyte (GB)',
            'TB': 'Terabyte (TB)', 'PB': 'Petabyte (PB)', 'KiB': 'Kibibyte (KiB)', 'MiB': 'Mebibyte (MiB)',
            'GiB': 'Gibibyte (GiB)', 'TiB': 'Tebibyte (TiB)', 'bit': 'Bit',
            'L/100km': 'Litro/100km', 'mpg(US)': 'Millas/Galón (US)', 'mpg(UK)': 'Millas/Galón (UK)',
            'km/L': 'Kilómetro/Litro',
            'W': 'Vatio (W)', 'kW': 'Kilovatio (kW)', 'MW': 'Megavatio (MW)', 'hp': 'Caballos de fuerza (hp)',
            'BTU/h': 'BTU/Hora', 'ft-lbf/s': 'Pie-libra/Segundo', 'cal/s': 'Caloría/Segundo',
            'Pa': 'Pascal (Pa)', 'kPa': 'Kilopascal (kPa)', 'MPa': 'Megapascal (MPa)', 'bar': 'Bar',
            'psi': 'PSI', 'atm': 'Atmósfera (atm)', 'torr': 'Torr', 'mmHg': 'mmHg',
            's': 'Segundo (s)', 'min': 'Minuto (min)', 'h': 'Hora (h)', 'd': 'Día (d)',
            'week': 'Semana', 'month': 'Mes', 'year': 'Año', 'ms': 'Milisegundo (ms)', 'μs': 'Microsegundo (μs)',
            'USD': 'Dólar estadounidense (USD)', 'EUR': 'Euro (EUR)', 'GBP': 'Libra esterlina (GBP)',
            'CNY': 'Yuan chino (CNY)', 'JPY': 'Yen japonés (JPY)', 'KRW': 'Won coreano (KRW)',
            'AUD': 'Dólar australiano (AUD)', 'CAD': 'Dólar canadiense (CAD)', 'CHF': 'Franco suizo (CHF)',
            'HKD': 'Dólar de Hong Kong (HKD)', 'INR': 'Rupia india (INR)', 'SGD': 'Dólar de Singapur (SGD)',
            'NZD': 'Dólar neozelandés (NZD)', 'MXN': 'Peso mexicano (MXN)', 'BRL': 'Real brasileño (BRL)'
        }
    }
};

// I18n 类
class I18n {
    constructor() {
        this.currentLang = this.loadLanguage() || this.detectSystemLanguage() || 'zh';
    }

    loadLanguage() {
        return localStorage.getItem('language');
    }

    saveLanguage(lang) {
        localStorage.setItem('language', lang);
    }

    detectSystemLanguage() {
        // 获取浏览器语言
        const browserLang = navigator.language || navigator.userLanguage || 'en';
        const langPrefix = browserLang.split('-')[0].toLowerCase();
        
        // 支持的语言列表
        const supportedLangs = {
            'zh': 'zh',
            'en': 'en',
            'fr': 'fr',
            'es': 'es'
        };
        
        // 如果浏览器语言完全匹配，使用它
        if (supportedLangs[langPrefix]) {
            return supportedLangs[langPrefix];
        }
        
        // 特殊情况处理
        if (langPrefix === 'pt') return 'es'; // 葡萄牙语用西班牙语
        if (langPrefix === 'de') return 'en'; // 德语用英语
        if (langPrefix === 'ja') return 'en'; // 日语用英语
        if (langPrefix === 'ko') return 'en'; // 韩语用英语
        
        return null; // 默认使用中文
    }

    setLanguage(lang) {
        if (translations[lang]) {
            this.currentLang = lang;
            this.saveLanguage(lang);
            return true;
        }
        return false;
    }

    t(key) {
        const keys = key.split('.');
        let value = translations[this.currentLang];
        
        for (const k of keys) {
            if (value && value[k] !== undefined) {
                value = value[k];
            } else {
                return key; // 如果找不到翻译，返回 key
            }
        }
        
        return value;
    }

    getCurrentLanguage() {
        return this.currentLang;
    }

    getAvailableLanguages() {
        return [
            { code: 'zh', name: '中文' },
            { code: 'en', name: 'English' },
            { code: 'fr', name: 'Français' },
            { code: 'es', name: 'Español' }
        ];
    }
}

// 创建全局实例
const i18n = new I18n();

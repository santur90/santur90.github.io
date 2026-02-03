// 单位换算数据和逻辑

const converters = {
    // 长度转换 (基准单位: 米)
    length: {
        name: '长度',
        units: {
            'm': { name: '米 (m)', factor: 1 },
            'km': { name: '公里 (km)', factor: 0.001 },
            'cm': { name: '厘米 (cm)', factor: 100 },
            'mm': { name: '毫米 (mm)', factor: 1000 },
            'mi': { name: '英里 (mi)', factor: 0.000621371 },
            'yd': { name: '码 (yd)', factor: 1.09361 },
            'ft': { name: '英尺 (ft)', factor: 3.28084 },
            'in': { name: '英寸 (in)', factor: 39.3701 },
            'nm': { name: '海里 (nm)', factor: 0.000539957 },
            'A': { name: '埃 (Å)', factor: 1e10 }
        }
    },

    // 重量转换 (基准单位: 克)
    weight: {
        name: '重量',
        units: {
            'g': { name: '克 (g)', factor: 1 },
            'kg': { name: '千克 (kg)', factor: 0.001 },
            'mg': { name: '毫克 (mg)', factor: 1000 },
            'oz': { name: '盎司 (oz)', factor: 0.035274 },
            'lb': { name: '磅 (lb)', factor: 0.00220462 },
            't': { name: '吨 (t)', factor: 0.000001 },
            'gr': { name: '格令 (gr)', factor: 15.4324 },
            'st': { name: '英石 (st)', factor: 0.000157473 }
        }
    },

    // 温度转换 (特殊处理)
    temperature: {
        name: '温度',
        units: {
            'C': { name: '摄氏度 (°C)', formula: null },
            'F': { name: '华氏度 (°F)', formula: null },
            'K': { name: '开尔文 (K)', formula: null }
        },
        convert: function(value, from, to) {
            // 转换为摄氏度
            let celsius;
            if (from === 'C') {
                celsius = value;
            } else if (from === 'F') {
                celsius = (value - 32) * 5/9;
            } else if (from === 'K') {
                celsius = value - 273.15;
            }

            // 从摄氏度转换为目标单位
            let result;
            if (to === 'C') {
                result = celsius;
            } else if (to === 'F') {
                result = celsius * 9/5 + 32;
            } else if (to === 'K') {
                result = celsius + 273.15;
            }

            return result;
        }
    },

    // 体积转换 (基准单位: 升)
    volume: {
        name: '体积',
        units: {
            'L': { name: '升 (L)', factor: 1 },
            'mL': { name: '毫升 (mL)', factor: 1000 },
            'gal': { name: '加仑 (gal)', factor: 0.264172 },
            'bbl': { name: '桶 (bbl)', factor: 0.00628981 },
            'pint': { name: '品脱 (pint)', factor: 2.11338 },
            'cup': { name: '杯 (cup)', factor: 4.22675 },
            'tbsp': { name: '汤匙 (tbsp)', factor: 67.628 },
            'tsp': { name: '茶匙 (tsp)', factor: 202.884 },
            'm3': { name: '立方米 (m³)', factor: 0.001 },
            'cm3': { name: '立方厘米 (cm³)', factor: 1000 }
        }
    },

    // 面积转换 (基准单位: 平方米)
    area: {
        name: '面积',
        units: {
            'm2': { name: '平方米 (m²)', factor: 1 },
            'km2': { name: '平方公里 (km²)', factor: 0.000001 },
            'cm2': { name: '平方厘米 (cm²)', factor: 10000 },
            'mm2': { name: '平方毫米 (mm²)', factor: 1000000 },
            'mi2': { name: '平方英里 (mi²)', factor: 3.861e-7 },
            'yd2': { name: '平方码 (yd²)', factor: 1.19599 },
            'ft2': { name: '平方英尺 (ft²)', factor: 10.7639 },
            'in2': { name: '平方英寸 (in²)', factor: 1550 },
            'ha': { name: '公顷 (ha)', factor: 0.0001 },
            'ac': { name: '英亩 (ac)', factor: 0.000247105 }
        }
    },

    // 速度转换 (基准单位: 米/秒)
    speed: {
        name: '速度',
        units: {
            'm/s': { name: '米/秒 (m/s)', factor: 1 },
            'km/h': { name: '公里/小时 (km/h)', factor: 3.6 },
            'mph': { name: '英里/小时 (mph)', factor: 2.23694 },
            'knot': { name: '节 (knot)', factor: 1.94384 },
            'ft/s': { name: '英尺/秒 (ft/s)', factor: 3.28084 },
            'cm/s': { name: '厘米/秒 (cm/s)', factor: 100 }
        }
    },

    // 数据存储转换 (基准单位: 字节)
    dataStorage: {
        name: '数据存储',
        units: {
            'B': { name: '字节 (B)', factor: 1 },
            'KB': { name: '千字节 (KB)', factor: 0.001 },
            'MB': { name: '兆字节 (MB)', factor: 0.000001 },
            'GB': { name: '吉字节 (GB)', factor: 1e-9 },
            'TB': { name: '太字节 (TB)', factor: 1e-12 },
            'PB': { name: '拍字节 (PB)', factor: 1e-15 },
            'KiB': { name: '千字节 (KiB)', factor: 1/1024 },
            'MiB': { name: '兆字节 (MiB)', factor: 1/(1024*1024) },
            'GiB': { name: '吉字节 (GiB)', factor: 1/(1024*1024*1024) },
            'TiB': { name: '太字节 (TiB)', factor: 1/(1024*1024*1024*1024) },
            'bit': { name: '比特 (bit)', factor: 8 }
        }
    },

    // 燃油效率转换 (基准单位: 升/100公里)
    fuelMileage: {
        name: '燃油效率',
        units: {
            'L/100km': { name: '升/100公里 (L/100km)', factor: null },
            'mpg(US)': { name: '英里/加仑(美) (mpg)', factor: null },
            'mpg(UK)': { name: '英里/加仑(英) (mpg)', factor: null },
            'km/L': { name: '公里/升 (km/L)', factor: null }
        },
        convert: function(value, from, to) {
            let base; // 转换为 L/100km
            
            if (from === 'L/100km') {
                base = value;
            } else if (from === 'mpg(US)') {
                base = 235.214583 / value;
            } else if (from === 'mpg(UK)') {
                base = 282.481053 / value;
            } else if (from === 'km/L') {
                base = 100 / value;
            }
            
            let result;
            if (to === 'L/100km') {
                result = base;
            } else if (to === 'mpg(US)') {
                result = 235.214583 / base;
            } else if (to === 'mpg(UK)') {
                result = 282.481053 / base;
            } else if (to === 'km/L') {
                result = 100 / base;
            }
            
            return result;
        }
    },

    // 功率转换 (基准单位: 瓦特)
    power: {
        name: '功率',
        units: {
            'W': { name: '瓦特 (W)', factor: 1 },
            'kW': { name: '千瓦 (kW)', factor: 0.001 },
            'MW': { name: '兆瓦 (MW)', factor: 0.000001 },
            'hp': { name: '马力 (hp)', factor: 0.00134102 },
            'BTU/h': { name: '英热单位/小时 (BTU/h)', factor: 3.41214 },
            'ft-lbf/s': { name: '英尺磅/秒 (ft-lbf/s)', factor: 0.737562 },
            'cal/s': { name: '卡路里/秒 (cal/s)', factor: 0.238846 }
        }
    },

    // 压力转换 (基准单位: 帕斯卡)
    pressure: {
        name: '压力',
        units: {
            'Pa': { name: '帕斯卡 (Pa)', factor: 1 },
            'kPa': { name: '千帕 (kPa)', factor: 0.001 },
            'MPa': { name: '兆帕 (MPa)', factor: 0.000001 },
            'bar': { name: '巴 (bar)', factor: 0.00001 },
            'psi': { name: '磅/平方英寸 (psi)', factor: 0.000145038 },
            'atm': { name: '标准大气压 (atm)', factor: 9.86923e-6 },
            'torr': { name: '托 (torr)', factor: 0.00750062 },
            'mmHg': { name: '毫米汞柱 (mmHg)', factor: 0.00750062 }
        }
    },

    // 时间转换 (基准单位: 秒)
    time: {
        name: '时间',
        units: {
            's': { name: '秒 (s)', factor: 1 },
            'min': { name: '分钟 (min)', factor: 1/60 },
            'h': { name: '小时 (h)', factor: 1/3600 },
            'd': { name: '天 (d)', factor: 1/86400 },
            'week': { name: '周 (week)', factor: 1/604800 },
            'month': { name: '月 (month)', factor: 1/2628000 },
            'year': { name: '年 (year)', factor: 1/31536000 },
            'ms': { name: '毫秒 (ms)', factor: 1000 },
            'μs': { name: '微秒 (μs)', factor: 1000000 }
        }
    },

    // 货币转换 (使用实时汇率API)
    currency: {
        name: '货币',
        units: {
            'USD': { name: '美元 (USD)', factor: null },
            'EUR': { name: '欧元 (EUR)', factor: null },
            'GBP': { name: '英镑 (GBP)', factor: null },
            'CNY': { name: '人民币 (CNY)', factor: null },
            'JPY': { name: '日元 (JPY)', factor: null },
            'KRW': { name: '韩元 (KRW)', factor: null },
            'AUD': { name: '澳元 (AUD)', factor: null },
            'CAD': { name: '加元 (CAD)', factor: null },
            'CHF': { name: '瑞士法郎 (CHF)', factor: null },
            'HKD': { name: '港币 (HKD)', factor: null },
            'INR': { name: '印度卢比 (INR)', factor: null },
            'SGD': { name: '新加坡元 (SGD)', factor: null },
            'NZD': { name: '新西兰元 (NZD)', factor: null },
            'MXN': { name: '墨西哥比索 (MXN)', factor: null },
            'BRL': { name: '巴西雷亚尔 (BRL)', factor: null }
        },
        convert: async function(value, from, to) {
            // 使用货币API进行转换
            if (typeof currencyAPI !== 'undefined') {
                try {
                    return await currencyAPI.convert(parseFloat(value), from, to);
                } catch (error) {
                    console.error('Currency conversion failed:', error);
                    // 降级到默认汇率
                    return this.convertWithDefaults(parseFloat(value), from, to);
                }
            }
            return this.convertWithDefaults(parseFloat(value), from, to);
        },
        convertWithDefaults: function(value, from, to) {
            // 使用默认汇率（基于USD）
            const defaultRates = {
                'USD': 1.0,
                'EUR': 0.847,
                'GBP': 0.732,
                'CNY': 7.24,
                'JPY': 155.48,
                'KRW': 1320.50,
                'AUD': 1.52,
                'CAD': 1.368,
                'CHF': 0.88,
                'HKD': 7.82,
                'INR': 83.25,
                'SGD': 1.34,
                'NZD': 1.63,
                'MXN': 17.12,
                'BRL': 5.08
            };
            
            if (from === to) return value;
            
            // 通过USD中转
            const inUSD = value / defaultRates[from];
            return inUSD * defaultRates[to];
        },
        note: '注：使用实时汇率数据，每10分钟自动更新'
    }
};

// 通用转换函数
async function convertValue(value, fromUnit, toUnit, category) {
    if (isNaN(value) || value === '') return 0;

    const converter = converters[category];
    
    // 特殊处理温度、燃油效率和货币
    if (category === 'temperature' || category === 'fuelMileage' || category === 'currency') {
        return await converter.convert(parseFloat(value), fromUnit, toUnit);
    }

    // 标准换算逻辑
    const fromFactor = converter.units[fromUnit].factor;
    const toFactor = converter.units[toUnit].factor;
    
    // 将输入值转换为基准单位，再转换为目标单位
    const baseValue = parseFloat(value) / fromFactor;
    const result = baseValue * toFactor;

    return parseFloat(result.toFixed(10)); // 去除浮点误差
}

// 获取类别的所有单位
function getUnits(category) {
    return converters[category].units;
}

// 获取所有类别
function getCategories() {
    return Object.keys(converters).map(key => ({
        key: key,
        name: converters[key].name
    }));
}

// 获取单位的显示名称
function getUnitName(category, unit) {
    return converters[category].units[unit].name;
}

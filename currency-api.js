// 货币汇率API服务

class CurrencyAPI {
    constructor() {
        // 使用免费的 ExchangeRate-API (每月1500次免费请求)
        this.apiBase = 'https://api.exchangerate-api.com/v4/latest/';
        // 备用API: https://open.er-api.com/v6/latest/
        this.fallbackApiBase = 'https://open.er-api.com/v6/latest/';
        
        this.rates = null;
        this.lastUpdate = null;
        this.baseCurrency = 'USD';
        // 缓存时间: 10分钟 (更接近实时更新)
        this.cacheTimeout = 10 * 60 * 1000;
        
        // 从localStorage加载缓存的汇率
        this.loadCachedRates();
    }

    // 获取汇率数据
    async fetchRates(baseCurrency = 'USD') {
        // 检查缓存是否仍然有效
        if (this.rates && this.baseCurrency === baseCurrency && this.isCacheValid()) {
            return this.rates;
        }

        try {
            // 尝试主API
            const response = await fetch(`${this.apiBase}${baseCurrency}`);
            if (!response.ok) {
                throw new Error('Primary API failed');
            }
            const data = await response.json();
            
            this.rates = data.rates;
            this.baseCurrency = baseCurrency;
            this.lastUpdate = Date.now();
            
            // 保存到localStorage
            this.saveRatesToCache();
            
            return this.rates;
        } catch (error) {
            console.warn('Primary API failed, trying fallback...', error);
            
            try {
                // 尝试备用API
                const response = await fetch(`${this.fallbackApiBase}${baseCurrency}`);
                if (!response.ok) {
                    throw new Error('Fallback API failed');
                }
                const data = await response.json();
                
                this.rates = data.rates;
                this.baseCurrency = baseCurrency;
                this.lastUpdate = Date.now();
                
                this.saveRatesToCache();
                
                return this.rates;
            } catch (fallbackError) {
                console.error('Both APIs failed', fallbackError);
                
                // 如果有缓存数据，即使过期也使用
                if (this.rates) {
                    console.warn('Using cached rates (may be outdated)');
                    return this.rates;
                }
                
                // 返回默认汇率（静态数据）
                return this.getDefaultRates();
            }
        }
    }

    // 检查缓存是否有效
    isCacheValid() {
        if (!this.lastUpdate) return false;
        return (Date.now() - this.lastUpdate) < this.cacheTimeout;
    }

    // 保存汇率到缓存
    saveRatesToCache() {
        try {
            const cacheData = {
                rates: this.rates,
                baseCurrency: this.baseCurrency,
                lastUpdate: this.lastUpdate
            };
            localStorage.setItem('currencyRates', JSON.stringify(cacheData));
        } catch (error) {
            console.error('Failed to save rates to cache', error);
        }
    }

    // 从缓存加载汇率
    loadCachedRates() {
        try {
            const cached = localStorage.getItem('currencyRates');
            if (cached) {
                const data = JSON.parse(cached);
                this.rates = data.rates;
                this.baseCurrency = data.baseCurrency;
                this.lastUpdate = data.lastUpdate;
            }
        } catch (error) {
            console.error('Failed to load cached rates', error);
        }
    }

    // 转换货币
    async convert(amount, fromCurrency, toCurrency) {
        if (fromCurrency === toCurrency) {
            return amount;
        }

        // 获取最新汇率
        const rates = await this.fetchRates(this.baseCurrency);

        // 如果基准货币是USD
        if (this.baseCurrency === 'USD') {
            if (fromCurrency === 'USD') {
                return amount * rates[toCurrency];
            } else if (toCurrency === 'USD') {
                return amount / rates[fromCurrency];
            } else {
                // 通过USD中转
                const inUSD = amount / rates[fromCurrency];
                return inUSD * rates[toCurrency];
            }
        }

        // 其他基准货币的处理
        return this.convertWithBase(amount, fromCurrency, toCurrency, rates);
    }

    // 使用指定基准货币转换
    convertWithBase(amount, fromCurrency, toCurrency, rates) {
        if (fromCurrency === this.baseCurrency) {
            return amount * rates[toCurrency];
        } else if (toCurrency === this.baseCurrency) {
            return amount / rates[fromCurrency];
        } else {
            // 通过基准货币中转
            const inBase = amount / rates[fromCurrency];
            return inBase * rates[toCurrency];
        }
    }

    // 获取汇率（用于显示）
    async getRate(fromCurrency, toCurrency) {
        if (fromCurrency === toCurrency) {
            return 1;
        }

        const rates = await this.fetchRates(this.baseCurrency);

        if (this.baseCurrency === 'USD') {
            if (fromCurrency === 'USD') {
                return rates[toCurrency];
            } else if (toCurrency === 'USD') {
                return 1 / rates[fromCurrency];
            } else {
                return rates[toCurrency] / rates[fromCurrency];
            }
        }

        return this.getRateWithBase(fromCurrency, toCurrency, rates);
    }

    getRateWithBase(fromCurrency, toCurrency, rates) {
        if (fromCurrency === this.baseCurrency) {
            return rates[toCurrency];
        } else if (toCurrency === this.baseCurrency) {
            return 1 / rates[fromCurrency];
        } else {
            return rates[toCurrency] / rates[fromCurrency];
        }
    }

    // 获取最后更新时间
    getLastUpdateTime() {
        if (!this.lastUpdate) return null;
        return new Date(this.lastUpdate);
    }

    // 手动刷新汇率
    async refreshRates() {
        this.lastUpdate = null; // 强制刷新
        return await this.fetchRates(this.baseCurrency);
    }

    // 获取默认汇率（备用静态数据 - 基于2026年2月2日）
    getDefaultRates() {
        return {
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
    }

    // 检查API是否可用
    async checkAPIStatus() {
        try {
            const response = await fetch(`${this.apiBase}USD`);
            return response.ok;
        } catch (error) {
            return false;
        }
    }
}

// 创建全局实例
const currencyAPI = new CurrencyAPI();

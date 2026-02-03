// Tip Jar 功能

class TipJar {
    constructor() {
        this.tipJar = document.getElementById('tip-jar');
        this.toggle = document.getElementById('tip-jar-toggle');
        this.content = document.getElementById('tip-jar-content');
        this.close = document.getElementById('tip-jar-close');
        
        this.isOpen = false;
        this.init();
    }

    init() {
        if (!this.toggle || !this.content || !this.close) {
            console.warn('Tip jar elements not found');
            return;
        }

        // 切换按钮
        this.toggle.addEventListener('click', () => this.toggleContent());

        // 关闭按钮
        this.close.addEventListener('click', () => this.closeContent());

        // 点击外部关闭
        document.addEventListener('click', (e) => {
            if (!this.tipJar.contains(e.target) && this.isOpen) {
                this.closeContent();
            }
        });

        // 恢复上次的状态
        this.loadState();
    }

    toggleContent() {
        if (this.isOpen) {
            this.closeContent();
        } else {
            this.openContent();
        }
    }

    openContent() {
        this.content.style.display = 'block';
        this.toggle.style.background = 'var(--primary-color)';
        this.toggle.style.color = 'white';
        this.isOpen = true;
        this.saveState();
    }

    closeContent() {
        this.content.style.display = 'none';
        this.toggle.style.background = 'white';
        this.toggle.style.color = 'inherit';
        this.isOpen = false;
        this.saveState();
    }

    saveState() {
        try {
            localStorage.setItem('tipJarState', JSON.stringify({ isOpen: this.isOpen }));
        } catch (error) {
            console.error('Failed to save tip jar state', error);
        }
    }

    loadState() {
        try {
            const saved = localStorage.getItem('tipJarState');
            if (saved) {
                const state = JSON.parse(saved);
                if (state.isOpen) {
                    this.openContent();
                }
            }
        } catch (error) {
            console.error('Failed to load tip jar state', error);
        }
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    new TipJar();
});

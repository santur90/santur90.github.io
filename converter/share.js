// 分享功能

const shareButtons = {
    init() {
        this.setupEventListeners();
    },

    setupEventListeners() {
        const copyBtn = document.getElementById('copy-link-btn');
        const twitterBtn = document.getElementById('share-twitter-btn');
        const redditBtn = document.getElementById('share-reddit-btn');
        const wechatBtn = document.getElementById('share-wechat-btn');

        copyBtn?.addEventListener('click', () => this.copyLink());
        twitterBtn?.addEventListener('click', () => this.shareToTwitter());
        redditBtn?.addEventListener('click', () => this.shareToReddit());
        wechatBtn?.addEventListener('click', () => this.shareToWeChat());
    },

    copyLink() {
        const url = window.location.href;
        const message = i18n.t('linkCopied') || 'Link copied!';

        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(url)
                .then(() => this.showToast(message))
                .catch(() => this.fallbackCopy(url, message));
        } else {
            this.fallbackCopy(url, message);
        }
    },

    fallbackCopy(url, message) {
        const input = document.createElement('input');
        input.value = url;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        this.showToast(message);
    },

    shareToTwitter() {
        const url = window.location.href;
        const text = i18n.t('shareText') || 'Check out this awesome Unit Converter!';
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        window.open(twitterUrl, '_blank', 'width=550,height=420');
    },

    shareToReddit() {
        const url = window.location.href;
        const title = i18n.t('shareText') || 'Unit Converter - Free Online Tool';
        const redditUrl = `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
        window.open(redditUrl, '_blank', 'width=800,height=600');
    },

    shareToWeChat() {
        const url = window.location.href;
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`;

        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
        `;

        modal.innerHTML = `
            <div style="background: white; padding: 2rem; border-radius: 12px; text-align: center; max-width: 90%; max-height: 90%; overflow: auto;">
                <h3>${i18n.t('scanToShare') || 'Scan to share on WeChat'}</h3>
                <img src="${qrUrl}" alt="QR Code" style="margin: 1rem 0; max-width: 100%;">
                <p style="color: #666; font-size: 0.9rem;">${i18n.t('wechatHint') || 'Scan this QR code with WeChat to share'}</p>
                <button id="wechat-close-btn" style="margin-top: 1rem; padding: 0.5rem 2rem; background: #4CAF50; color: white; border: none; border-radius: 6px; cursor: pointer;">
                    ${i18n.t('close') || 'Close'}
                </button>
            </div>
        `;

        document.body.appendChild(modal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });

        modal.querySelector('#wechat-close-btn')?.addEventListener('click', () => {
            modal.remove();
        });
    },

    showToast(message) {
        const toast = document.createElement('div');
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
            background: #333;
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 6px;
            z-index: 10000;
            animation: fadeInOut 2s ease-in-out;
        `;

        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2000);
    }
};

window.shareButtons = shareButtons;

if (!document.getElementById('toast-animation')) {
    const style = document.createElement('style');
    style.id = 'toast-animation';
    style.textContent = `
        @keyframes fadeInOut {
            0%, 100% { opacity: 0; transform: translateX(-50%) translateY(10px); }
            10%, 90% { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
    `;
    document.head.appendChild(style);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => shareButtons.init());
} else {
    shareButtons.init();
}

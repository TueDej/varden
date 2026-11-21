(() => {
    const toggleBtn = document.getElementById('themeToggle');
    const docEl = document.documentElement;

    function updateButtonText(theme) {
        if (!toggleBtn) return;
        toggleBtn.textContent = theme === 'dark' ? '[ LIGHT ]' : '[ DARK ]';
    }

    updateButtonText(docEl.getAttribute('data-theme') || 'dark');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const current = docEl.getAttribute('data-theme');
            const newTheme = current === 'dark' ? 'light' : 'dark';
            docEl.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateButtonText(newTheme);
        });
    }

    // Typing effect for welcome message (skipped when reduced motion is preferred)
    const welcomeMsg = document.querySelector('.welcome-msg');
    if (welcomeMsg && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const text = welcomeMsg.textContent;
        welcomeMsg.textContent = '';
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                welcomeMsg.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }

        typeWriter();
    }

    // Pause animations when tab is not visible
    document.addEventListener('visibilitychange', () => {
        document.body.classList.toggle('animations-paused', document.hidden);
    });
})();

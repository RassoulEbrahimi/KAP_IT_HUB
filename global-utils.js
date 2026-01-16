// Global Utilities for Kap IT Hub

// Toggle Theme Function
function toggleTheme() {
    const html = document.documentElement;
    const icon = document.getElementById('theme-icon');

    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        icon.innerText = 'dark_mode';
    } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        icon.innerText = 'light_mode';
    }
}

// Show Toast Notification
function showToast(message) {
    let toast = document.getElementById("toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        toast.className = "toast";
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.className = "toast show";
    setTimeout(function () { toast.className = toast.className.replace("show", ""); }, 3000);
}

// Immediate Theme Check (IIFE)
(function initTheme() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        // Note: Icon text will need to be updated by DOMContentLoaded event or inline script in HTML if blocking
        // We added a helper to update icon when DOM is ready in case this runs before body
        document.addEventListener('DOMContentLoaded', () => {
            const icon = document.getElementById('theme-icon');
            if (icon && document.documentElement.classList.contains('dark')) {
                icon.innerText = 'light_mode';
            }
        });
    }
})();

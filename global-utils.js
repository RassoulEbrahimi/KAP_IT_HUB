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


// Sidebar Click Outside to Close
document.addEventListener('click', function (event) {
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.getElementById('mobile-menu-btn');

    // If elements exist and sidebar is OPEN (doesn't have the hide class)
    if (sidebar && menuBtn && !sidebar.classList.contains('-translate-x-full')) {
        // If the click target is NOT the sidebar AND NOT the menu button
        if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
            // Close the sidebar
            sidebar.classList.add('-translate-x-full');
        }
    }
});


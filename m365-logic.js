let activeFilter = 'Alle';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Check if m365Tips is defined (loaded from m365-data.js)
    if (typeof m365Tips !== 'undefined') {
        renderCards(m365Tips);
    } else {
        console.error('m365Tips data not found. Ensure m365-data.js is loaded first.');
    }
});

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

// Initialize Theme
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    const icon = document.getElementById('theme-icon');
    if (icon) icon.innerText = 'light_mode';
}

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

// Render Function
function renderCards(data) {
    const container = document.getElementById('card-container');
    if (!container) return; // Guard clause
    container.innerHTML = '';

    data.forEach(tip => {
        const highlightClass = tip.highlight ? 'border-l-4 border-l-primary/50' : '';

        const html = `
            <div class="content-card bg-white dark:bg-[#1a2632] rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full ${highlightClass}">
                <div class="flex items-center justify-between mb-4">
                    <div class="size-10 rounded-lg ${tip.iconBgClass} ${tip.iconColorClass} flex items-center justify-center">
                        <span class="material-symbols-outlined">${tip.icon}</span>
                    </div>
                    <span class="px-2 py-1 rounded ${tip.tagClass} text-xs font-semibold">${tip.tagText}</span>
                </div>
                <h4 class="text-lg font-bold text-text-main dark:text-white mb-2">${tip.title}</h4>
                <p class="text-text-secondary text-sm ${tip.specialContent ? 'mb-4' : 'mb-6 flex-1'}">${tip.description}</p>
                ${tip.specialContent}
                <button onclick="${tip.detailedContent ? `openModal(${tip.id})` : `showToast('Anleitung öffnet sich in Kürze...')`}"
                    class="w-full h-10 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-text-main dark:text-white font-medium text-sm transition-colors flex items-center justify-center gap-2 ${tip.specialContent ? '' : 'mt-auto'}">
                    <span class="material-symbols-outlined" style="font-size: 18px;">menu_book</span>
                    <span>Anleitung öffnen</span>
                </button>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', html);
    });
}

// Modal Functions
function openModal(id) {
    const tip = m365Tips.find(t => t.id === id);
    if (!tip || !tip.detailedContent) return;

    const modal = document.getElementById('info-modal');
    const titleEl = document.getElementById('modal-title');
    const contentEl = document.getElementById('modal-content');

    if (modal && titleEl && contentEl) {
        titleEl.textContent = tip.title;
        contentEl.innerHTML = tip.detailedContent;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeModal() {
    const modal = document.getElementById('info-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Filter Function
function filterByApp(appName) {
    activeFilter = appName;

    // Update UI state of buttons
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        const btnApp = btn.getAttribute('data-app');
        if (btnApp === appName) {
            // Active state style
            btn.className = "px-4 py-1.5 text-sm font-medium rounded-full bg-text-main text-white transition-all shadow-sm filter-btn";
        } else {
            // Inactive state style
            btn.className = "px-4 py-1.5 text-sm font-medium rounded-full bg-white dark:bg-slate-800 text-text-secondary hover:bg-slate-100 dark:hover:bg-slate-700 transition-all shadow-sm border border-slate-200 dark:border-slate-700 flex items-center gap-2 filter-btn";
        }
    });

    // Filter data
    let filteredData = m365Tips;
    if (appName !== 'Alle') {
        filteredData = m365Tips.filter(tip => tip.app === appName);
    }

    // Re-apply search if any
    const searchVal = getSearchValue();
    if (searchVal) {
        filteredData = filteredData.filter(tip =>
            tip.title.toLowerCase().includes(searchVal) ||
            tip.description.toLowerCase().includes(searchVal)
        );
    }

    renderCards(filteredData);
}

function getSearchValue() {
    const headerSearch = document.getElementById('search-input');
    const pageSearch = document.getElementById('page-search-input');
    let query = "";
    if (headerSearch && headerSearch.value) query = headerSearch.value;
    if (pageSearch && pageSearch.value) query = pageSearch.value;
    return query.toLowerCase();
}

function handleSearch() {
    const query = getSearchValue();

    let filteredData = m365Tips;

    // Apply category filter first if active
    if (activeFilter !== 'Alle') {
        filteredData = filteredData.filter(tip => tip.app === activeFilter);
    }

    // Apply search filter
    if (query) {
        filteredData = filteredData.filter(tip =>
            tip.title.toLowerCase().includes(query) ||
            tip.description.toLowerCase().includes(query)
        );
    }

    renderCards(filteredData);
}

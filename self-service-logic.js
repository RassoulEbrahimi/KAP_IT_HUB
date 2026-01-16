document.addEventListener('DOMContentLoaded', () => {
    renderServices(serviceCatalog);
    setupModalListeners();
});

function renderServices(data) {
    const container = document.getElementById('service-container');
    if (!container) return;

    container.innerHTML = '';

    // Group by category
    const categories = {};
    data.forEach(item => {
        if (!categories[item.category]) {
            categories[item.category] = [];
        }
        categories[item.category].push(item);
    });

    // Render each category
    for (const [categoryName, items] of Object.entries(categories)) {
        // Section Container
        const section = document.createElement('div');
        section.className = 'flex flex-col gap-6 service-section';
        section.dataset.category = categoryName;

        // Header
        const headerDiv = document.createElement('div');
        headerDiv.className = 'flex items-center gap-2';

        // Icon for header (simplified logic based on category name)
        let headerIconName = 'category';
        if (categoryName.includes('Hardware')) headerIconName = 'devices';
        if (categoryName.includes('Personal')) headerIconName = 'person';

        headerDiv.innerHTML = `
            <span class="material-symbols-outlined text-primary">${headerIconName}</span>
            <h3 class="text-xl font-bold text-text-main dark:text-white">${categoryName}</h3>
        `;

        // Grid
        const grid = document.createElement('div');
        grid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';

        items.forEach(item => {
            const card = createServiceCard(item);
            grid.appendChild(card);
        });

        section.appendChild(headerDiv);
        section.appendChild(grid);
        container.appendChild(section);
    }
}

function createServiceCard(item) {
    const card = document.createElement('div');
    card.className = 'bg-white dark:bg-[#1a2632] rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full relative overflow-hidden';

    // Badge
    let badgeHtml = '';
    if (item.badge) {
        badgeHtml = `<div class="absolute top-4 right-4 ${item.badge.colorClass} text-xs font-bold px-2 py-1 rounded">${item.badge.text}</div>`;
    }

    // Action Button Logic
    let buttonAttr = '';
    let btnIcon = 'add_circle'; // Default
    if (item.actionType === 'modal') {
        buttonAttr = `onclick="openModal()"`;
    } else {
        buttonAttr = `onclick="showToast('${item.toastMessage || 'Aktion wird ausgeführt...'}')"`;
        btnIcon = item.icon === 'beach_access' ? 'send' : 'calendar_month'; // Specific icons for toast actions based on original
    }

    card.innerHTML = `
        ${badgeHtml}
        <div class="size-12 rounded-lg ${item.iconBgClass} ${item.iconColorClass} flex items-center justify-center mb-4">
            <span class="material-symbols-outlined" style="font-size: 32px;">${item.icon}</span>
        </div>
        <h4 class="text-lg font-bold text-text-main dark:text-white mb-2">${item.title}</h4>
        <p class="text-text-secondary text-sm mb-6 flex-1">${item.description}</p>
        <button ${buttonAttr} 
            class="w-full h-10 rounded-lg bg-primary hover:bg-blue-700 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2">
            <span class="material-symbols-outlined text-sm">${btnIcon}</span>
            <span>${item.actionText}</span>
        </button>
    `;

    return card;
}

function handleSearch() {
    const query = document.getElementById('search-input').value.toLowerCase();

    const filteredRequest = serviceCatalog.filter(item => {
        return item.title.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query);
    });

    renderServices(filteredRequest);

    // Optional: Handle empty state
    const container = document.getElementById('service-container');
    if (filteredRequest.length === 0) {
        container.innerHTML = `
            <div class="flex flex-col items-center justify-center py-12 text-center fade-in">
                <div class="bg-slate-100 dark:bg-slate-800 p-4 rounded-full mb-4">
                    <span class="material-symbols-outlined text-slate-400" style="font-size: 48px;">search_off</span>
                </div>
                <h3 class="text-lg font-semibold text-text-main dark:text-white">Keine Ergebnisse gefunden</h3>
                <p class="text-text-secondary max-w-md mt-2">Versuchen Sie es mit einem anderen Suchbegriff.</p>
            </div>
        `;
    }
}

// Modal Logic (Moved from HTML)
function openModal() {
    const modal = document.getElementById('service-modal');
    if (modal) {
        modal.classList.add('open');
        const input = document.getElementById('software-name');
        if (input) input.focus();
    }
}

function closeModal() {
    const modal = document.getElementById('service-modal');
    if (modal) {
        modal.classList.remove('open');
    }
}

function submitRequest(e) {
    e.preventDefault();
    closeModal();
    if (window.showToast) {
        window.showToast('✅ Ticket #2024-894 erstellt: Anfrage an Helpdesk übermittelt');
    } else {
        alert('Ticket erstellt!');
    }
    e.target.reset();
}

function setupModalListeners() {
    const modal = document.getElementById('service-modal');
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === this) {
                closeModal();
            }
        });
    }
}

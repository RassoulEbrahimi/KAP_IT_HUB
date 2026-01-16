document.addEventListener("DOMContentLoaded", () => {
    renderNews();
});

function renderNews() {
    renderTopStory(newsData.topStory);
    renderNewsGrid(newsData.articles);
    renderSidebar(newsData.events);
    renderTrending(newsData.trending);
}

function renderTopStory(story) {
    const container = document.getElementById("top-story-container");
    if (!container) return;

    container.innerHTML = `
        <div class="relative bg-[#1a2632] rounded-2xl overflow-hidden min-h-[400px] flex items-end">
            <div class="absolute inset-0 bg-cover bg-center" style='background-image: url("${story.image}");'></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div class="relative z-10 p-8 md:p-12 max-w-3xl">
                <span class="inline-block px-3 py-1 rounded bg-primary text-white text-xs font-bold mb-4">${story.tag}</span>
                <h2 class="text-3xl md:text-5xl font-black text-white leading-tight mb-4">${story.title}</h2>
                <p class="text-gray-300 text-lg mb-8 max-w-xl">${story.excerpt}</p>
                <div class="flex items-center gap-4 text-sm text-gray-400">
                    <div class="flex items-center gap-2">
                        <div class="size-6 rounded-full bg-cover bg-center" style='background-image: url("${story.authorImage}");'></div>
                        <span class="font-medium text-white">${story.author}</span>
                    </div>
                    <span>•</span>
                    <span>${story.time}</span>
                </div>
            </div>
        </div>
    `;
}

function renderNewsGrid(articles) {
    const container = document.getElementById("news-grid");
    if (!container) return;

    container.innerHTML = articles.map(article => `
        <div class="flex flex-col md:flex-row gap-6 bg-white dark:bg-[#1a2632] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
            <div class="w-full md:w-48 h-32 rounded-lg bg-cover bg-center shrink-0" style='background-image: url("${article.image}");'></div>
            <div class="flex flex-col justify-center">
                <div class="flex items-center gap-2 mb-2">
                    <span class="text-xs font-bold text-text-secondary">${article.category}</span>
                    <span class="text-xs text-text-secondary">•</span>
                    <span class="text-xs text-text-secondary">${article.date}</span>
                </div>
                <h3 class="text-xl font-bold text-text-main dark:text-white mb-2 group-hover:text-primary transition-colors">${article.title}</h3>
                <p class="text-text-secondary text-sm line-clamp-2">${article.excerpt}</p>
            </div>
        </div>
    `).join('');
}

function renderSidebar(events) {
    const container = document.getElementById("events-container");
    if (!container) return;

    const eventsHtml = events.map((event, index) => {
        const border = index < events.length - 1 ? '<div class="w-full h-px bg-slate-100 dark:bg-slate-800"></div>' : '';
        const bgClass = event.month === 'Okt' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400';

        return `
            <div class="flex gap-4 items-start">
                <div class="flex flex-col items-center justify-center ${bgClass} rounded-lg w-12 h-12 shrink-0">
                    <span class="text-xs font-bold uppercase">${event.month}</span>
                    <span class="text-lg font-bold">${event.day}</span>
                </div>
                <div>
                    <h4 class="font-bold text-text-main dark:text-white text-sm">${event.title}</h4>
                    <p class="text-xs text-text-secondary">${event.time}</p>
                    ${event.location ? `<p class="text-xs text-text-secondary mt-1">${event.location}</p>` : ''}
                </div>
            </div>
            ${border}
        `;
    }).join('');

    container.innerHTML = eventsHtml;
}

function renderTrending(tags) {
    const container = document.getElementById("trending-container");
    if (!container) return;

    container.innerHTML = tags.map(tag => `
        <span class="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium text-text-secondary hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer">${tag}</span>
    `).join('');
}

function handleSearch() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const articles = document.querySelectorAll('#news-grid > div');

    articles.forEach(article => {
        const title = article.querySelector('h3').textContent.toLowerCase();
        const excerpt = article.querySelector('p').textContent.toLowerCase();

        if (title.includes(query) || excerpt.includes(query)) {
            article.style.display = 'flex';
        } else {
            article.style.display = 'none';
        }
    });

    // Also filter top story if needed, or simple toast if searching globally
    // For now, simpler implementation for the grid
}

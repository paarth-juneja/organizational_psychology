/* ==============================================
   UI - DOM Manipulation & Interactions
   ============================================== */

/**
 * Generates HTML for a content section with toggle and accordion
 * @param {string} sectionId - The section identifier
 * @param {string} conceptsHTML - HTML content for concepts view
 * @param {Array} practiceData - Array of practice Q&A objects
 * @returns {string} Complete HTML for the section
 */
function createSectionHTML(sectionId, conceptsHTML, practiceData) {
    const practiceHTML = practiceData.map((item, index) => `
        <div class="bg-white rounded-lg shadow-md border border-slate-200">
            <button class="accordion-button w-full text-left p-4 font-semibold text-slate-800 flex justify-between items-center gap-4" data-target="accordion-${sectionId}-${index}">
                <div class="flex-grow">
                    <p>Q: ${item.q}</p>
                    <p class="text-xs font-normal text-slate-500 mt-2">${item.meta}</p>
                </div>
                <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div id="accordion-${sectionId}-${index}" class="accordion-content">
                <div class="prose prose-slate max-w-none"><strong class="text-slate-700">Answer:</strong> ${item.a}</div>
            </div>
        </div>
    `).join('');

    return `
        <div class="flex justify-center mb-6">
            <div class="inline-flex rounded-lg shadow-sm">
                <button class="section-toggle px-6 py-2 rounded-l-lg font-medium text-sm active-toggle" data-section="${sectionId}" data-view="concepts">Key Concepts</button>
                <button class="section-toggle px-6 py-2 rounded-r-lg font-medium text-sm inactive-toggle" data-section="${sectionId}" data-view="practice">Exam Practice</button>
            </div>
        </div>
        <div id="${sectionId}-concepts-view" class="view-content">
            ${conceptsHTML}
        </div>
        <div id="${sectionId}-practice-view" class="view-content hidden space-y-4">
            ${practiceHTML}
        </div>
    `;
}

/**
 * Initialize event listeners for toggles and accordions
 */
function initializeEventListeners() {
    // Section toggle buttons
    document.querySelectorAll('.section-toggle').forEach(button => {
        button.addEventListener('click', (e) => {
            const section = e.target.dataset.section;
            const view = e.target.dataset.view;

            document.querySelectorAll(`[data-section="${section}"]`).forEach(btn => {
                btn.classList.remove('active-toggle', 'inactive-toggle');
                if (btn.dataset.view === view) {
                    btn.classList.add('active-toggle');
                } else {
                    btn.classList.add('inactive-toggle');
                }
            });

            document.getElementById(`${section}-concepts-view`).classList.toggle('hidden', view !== 'concepts');
            document.getElementById(`${section}-practice-view`).classList.toggle('hidden', view !== 'practice');
        });
    });

    // Accordion buttons (event delegation)
    document.body.addEventListener('click', function (e) {
        if (e.target.closest('.accordion-button')) {
            const button = e.target.closest('.accordion-button');
            const content = document.getElementById(button.dataset.target);
            button.classList.toggle('open');
            content.classList.toggle('open');
        }
    });
}

/**
 * Initialize navigation observer for active link highlighting
 */
function initializeNavObserver() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active-nav', 'inactive-nav');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active-nav');
                    } else {
                        link.classList.add('inactive-nav');
                    }
                });
            }
        });
    }, { rootMargin: "-50% 0px -50% 0px" });

    sections.forEach(section => {
        observer.observe(section);
    });
}

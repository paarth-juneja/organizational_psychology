/* ==============================================
   Main - App Initialization & Charts
   ============================================== */

/**
 * Initialize Chart.js charts
 */
function initializeCharts() {
    // Commitment Doughnut Chart
    const commitmentCanvas = document.getElementById('commitmentChart');
    if (commitmentCanvas) {
        const ctxCommitment = commitmentCanvas.getContext('2d');
        new Chart(ctxCommitment, {
            type: 'doughnut',
            data: {
                labels: ['Affective (Want to stay)', 'Continuance (Need to stay)', 'Normative (Ought to stay)'],
                datasets: [{
                    label: 'Types of Organizational Commitment',
                    data: [50, 25, 25],
                    backgroundColor: [
                        'rgba(14, 165, 233, 0.8)',  // sky-500
                        'rgba(245, 158, 11, 0.8)', // amber-500
                        'rgba(168, 85, 247, 0.8)'  // purple-500
                    ],
                    borderColor: '#f8fafc',
                    borderWidth: 4
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                plugins: {
                    legend: { position: 'bottom' },
                    title: { display: true, text: 'The Three Components of Organizational Commitment' }
                }
            }
        });
    }
}

/**
 * Application entry point
 */
document.addEventListener('DOMContentLoaded', () => {
    // Render content sections
    document.getElementById('foundations-content').innerHTML =
        createSectionHTML('foundations', contentData.foundations.concepts, contentData.foundations.practice);
    document.getElementById('journey-content').innerHTML =
        createSectionHTML('journey', contentData.journey.concepts, contentData.journey.practice);
    document.getElementById('behaviors-content').innerHTML =
        createSectionHTML('behaviors', contentData.behaviors.concepts, contentData.behaviors.practice);

    // Initialize interactive features
    initializeEventListeners();
    initializeCharts();
    initializeNavObserver();
    setupAccordionContentStyling();
});

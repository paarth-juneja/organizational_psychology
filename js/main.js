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
        // Global defaults for premium look
        Chart.defaults.font.family = "'Inter', sans-serif";
        Chart.defaults.color = '#64748b'; // slate-500

        const ctxCommitment = commitmentCanvas.getContext('2d');
        new Chart(ctxCommitment, {
            type: 'doughnut',
            data: {
                labels: ['Affective (Want to stay)', 'Continuance (Need to stay)', 'Normative (Ought to stay)'],
                datasets: [{
                    label: 'Types of Organizational Commitment',
                    data: [50, 25, 25],
                    backgroundColor: [
                        'rgba(14, 165, 233, 0.9)',  // sky-500 (more opaque)
                        'rgba(245, 158, 11, 0.9)', // amber-500
                        'rgba(168, 85, 247, 0.9)'  // purple-500
                    ],
                    borderColor: '#ffffff',
                    borderWidth: 2,
                    hoverOffset: 10
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                cutout: '75%', // Thinner ring for modern look
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            usePointStyle: true,
                            padding: 20,
                            font: {
                                size: 12,
                                weight: 500
                            }
                        }
                    },
                    title: {
                        display: true,
                        text: 'The Three Components of Organizational Commitment',
                        padding: {
                            top: 10,
                            bottom: 30
                        },
                        font: {
                            size: 16,
                            weight: 600
                        },
                        color: '#334155' // slate-700
                    },
                    tooltip: {
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        titleColor: '#0f172a',
                        bodyColor: '#334155',
                        borderColor: '#e2e8f0',
                        borderWidth: 1,
                        padding: 12,
                        boxPadding: 4,
                        callbacks: {
                            labelTextColor: function () {
                                return '#334155';
                            }
                        }
                    }
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
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

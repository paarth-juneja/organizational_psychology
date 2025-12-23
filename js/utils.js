/* ==============================================
   Utils - Helper Functions
   ============================================== */

/**
 * Apply consistent styling to accordion answer content
 * Adds Tailwind classes for proper text formatting
 */
function setupAccordionContentStyling() {
    document.querySelectorAll('.accordion-content p').forEach(el => 
        el.classList.add('text-slate-600', 'leading-relaxed'));
    document.querySelectorAll('.accordion-content strong').forEach(el => 
        el.classList.add('text-slate-700'));
    document.querySelectorAll('.accordion-content ul').forEach(el => 
        el.classList.add('list-disc', 'list-inside', 'space-y-2', 'mt-2'));
    document.querySelectorAll('.accordion-content li').forEach(el => 
        el.classList.add('pl-2'));
}

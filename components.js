function loadNavbar() {
    const navbarHTML = `
    <!-- Navigation -->
    <nav class="navbar" id="navbar">
        <a href="index.html" class="logo-wrap">
            <img src="assets/Legionblanco.svg" alt="Legion Logo" class="logo-icon">
        </a>
        <div class="nav-right">
            <a href="index.html#home" class="nav-link">Home</a>
            <a href="cloud.html" class="nav-link">Cloud</a>
            <a href="staffing.html" class="nav-link">Staffing</a>
            <a href="quantum.html" class="nav-link">Quantum</a>
            <a href="index.html#about" class="nav-link">About us</a>
            <a href="index.html#cloud" class="nav-cta">Get Started</a>
        </div>
    </nav>
    `;

    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
}

// Auto-load on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    loadNavbar();
    initCloudAccordion();
});

/**
 * Cloud Services Accordion Logic
 * Handles the "Liquid Glass" accordion expansion and smooth transitions.
 */
function initCloudAccordion() {
    const accordionItems = document.querySelectorAll('.service-accordion-item');

    if (accordionItems.length === 0) return; // Exit if not on cloud page

    accordionItems.forEach(item => {
        const trigger = item.querySelector('.service-trigger');
        const content = item.querySelector('.service-content-panel');

        trigger.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other items
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherContent = otherItem.querySelector('.service-content-panel');
                    otherContent.style.maxHeight = null;
                }
            });

            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
                content.style.maxHeight = null;
            } else {
                item.classList.add('active');
                // Calculate accurate height including padding
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
}

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
            <a href="index.html#quantum" class="nav-link">Quantum</a>
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
});

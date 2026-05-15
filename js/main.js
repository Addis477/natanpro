// ============ MOBILE SIDE NAVIGATION ============
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const sideNav = document.getElementById('mobileSideNav');
    const closeBtn = document.getElementById('closeSideNav');
    const overlay = document.getElementById('sideNavOverlay');
    
    // Function to open menu
    function openMenu() {
        if (sideNav) sideNav.classList.add('open');
        if (overlay) overlay.classList.add('active');
        document.body.classList.add('menu-open');
    }
    
    // Function to close menu
    function closeMenu() {
        if (sideNav) sideNav.classList.remove('open');
        if (overlay) overlay.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
    
    // Open menu on hamburger click
    if (menuToggle) {
        menuToggle.addEventListener('click', openMenu);
    }
    
    // Close menu on close button
    if (closeBtn) {
        closeBtn.addEventListener('click', closeMenu);
    }
    
    // Close menu on overlay click
    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && sideNav && sideNav.classList.contains('open')) {
            closeMenu();
        }
    });
    
    // Close menu when a link is clicked
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});

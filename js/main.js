// ========== SCROLL REVEAL ANIMATION ==========
document.addEventListener('DOMContentLoaded', function() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });
    
    revealElements.forEach(el => observer.observe(el));
});

// ========== MOBILE MENU ==========
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn && navLinks) {
        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('show');
            }
        });
    }
});

// ========== CONTACT FORM SUBMISSION ==========
function submitContactForm() {
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();
    
    if (!name || !email || !message) {
        alert('Please fill in Name, Email, and Message fields.');
        return;
    }
    
    const subject = document.getElementById('contactSubject').value || 'General Inquiry';
    const phone = document.getElementById('contactPhone').value.trim();
    
    alert(`✅ Thank you, ${name}!\n\nYour ${subject} has been received. We'll get back to you within 24 hours.\n\n📞 Phone: ${phone || 'Not provided'}\n📧 Email: ${email}`);
    
    // Clear form
    document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select').forEach(el => {
        el.value = '';
    });
}

// ========== ACTIVE NAV LINK HIGHLIGHT ==========
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
});

// ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

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
        // Toggle menu on button click
        menuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            navLinks.classList.toggle('show');
        });
        
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
        
        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navLinks.classList.contains('show')) {
                navLinks.classList.remove('show');
            }
        });
    }
});

// ========== ACTIVE NAV LINK HIGHLIGHT ==========
document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';
    
    const navLinks = document.querySelectorAll('.nav-links a:not(.nav-cta-btn)');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Remove any existing active class
        link.classList.remove('active');
        
        // Check if this link matches current page
        if (href === currentPage) {
            link.classList.add('active');
        }
        // Handle index.html as default
        if (currentPage === '' && href === 'index.html') {
            link.classList.add('active');
        }
    });
});

// ========== CONTACT FORM SUBMISSION ==========
function submitContactForm() {
    const nameField = document.getElementById('contactName');
    const emailField = document.getElementById('contactEmail');
    const messageField = document.getElementById('contactMessage');
    
    if (!nameField || !emailField || !messageField) return;
    
    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const message = messageField.value.trim();
    
    if (!name || !email || !message) {
        alert('Please fill in Name, Email, and Message fields.');
        return;
    }
    
    const subjectField = document.getElementById('contactSubject');
    const phoneField = document.getElementById('contactPhone');
    const subject = subjectField ? subjectField.value || 'General Inquiry' : 'General Inquiry';
    const phone = phoneField ? phoneField.value.trim() : 'Not provided';
    
    alert(`✅ Thank you, ${name}!\n\nYour ${subject} has been received. We'll get back to you within 24 hours.\n\n📞 Phone: ${phone}\n📧 Email: ${email}`);
    
    // Clear form
    document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select').forEach(el => {
        el.value = '';
    });
}

// ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

// ========== LIGHTBOX FUNCTIONS (for gallery.html) ==========
function openLightbox(imgSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    if (lightbox && lightboxImg) {
        lightbox.classList.add('active');
        lightboxImg.src = imgSrc;
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close lightbox on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// ========== HEADER SCROLL EFFECT ==========
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.nav-bar');
    if (!header) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.5)';
        } else {
            header.style.boxShadow = '';
        }
    });
});

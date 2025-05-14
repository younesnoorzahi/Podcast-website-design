// Common JavaScript for all pages

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or use system preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    body.classList.add('dark-mode');
}

// Toggle theme when button is clicked
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Mobile menu functionality
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
    if (mobileMenu && mobileMenu.classList.contains('active') && 
        !mobileMenu.contains(event.target) && 
        event.target !== mobileMenuToggle) {
        mobileMenu.classList.remove('active');
    }
});

// Newsletter form submission
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        
        // Simple validation
        if (emailInput.value.trim() === '') {
            alert('Please enter your email address');
            return;
        }
        
        // Simulate form submission
        alert('Thank you for subscribing to our newsletter!');
        emailInput.value = '';
    });
}
// Contact page specific JavaScript

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');
    const sendAnother = document.getElementById('send-another');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Simulate form submission with loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        setTimeout(() => {
            // Hide form and show success message
            contactForm.classList.add('hidden');
            formSuccess.classList.remove('hidden');
            
            // Reset form
            contactForm.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 1500);
    });
    
    // Allow sending another message
    if (sendAnother) {
        sendAnother.addEventListener('click', () => {
            formSuccess.classList.add('hidden');
            contactForm.classList.remove('hidden');
        });
    }
});
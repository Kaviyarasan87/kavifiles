// Toggle the visibility of the form when CTA button is clicked
document.getElementById('cta-btn').addEventListener('click', function() {
    document.getElementById('form-section').classList.remove('hidden');
    this.style.display = 'none';
});

// Form submission behavior (can be customized to include form validation or AJAX)
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Simple form validation
    if (name && email) {
        alert(`Thank you for signing up, ${name}! The e-book is on its way.`);
    } else {
        alert('Please fill in all fields.');
    }
});

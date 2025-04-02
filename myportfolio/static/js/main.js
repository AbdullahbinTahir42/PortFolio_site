// Typewriter Effect for Hero Section
document.addEventListener('DOMContentLoaded', () => {
    const text = "Welcome to My Portfolio!";
    let index = 0;
    const heroText = document.querySelector('.hero h1');

    function typeWriter() {
        if (index < text.length) {
            heroText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 150);  // Speed of typing
        }
    }

    typeWriter();
});

// Smooth Scrolling Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple Form Validation Example
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', function (e) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            e.preventDefault();  // Prevent form submission
            alert('All fields must be filled out');
        }
    });
}

// Tooltip on Hover Example
const tooltipElements = document.querySelectorAll('.tooltip');
tooltipElements.forEach(tooltip => {
    tooltip.addEventListener('mouseover', function() {
        this.setAttribute('data-tooltip', 'Here is your tooltip text!');
    });
});

// Greeting function based on time of day
function updateGreeting() {
    const hour = new Date().getHours();
    const greetingElement = document.getElementById('greeting');
    let greeting;

    if (hour < 12) {
        greeting = 'Good morning!';
    } else if (hour < 18) {
        greeting = 'Good afternoon!';
    } else {
        greeting = 'Good evening!';
    }

    greetingElement.textContent = greeting;
}

// Theme toggle functionality
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Update current page
    body.setAttribute('data-theme', newTheme);
    
    // Save to localStorage
    localStorage.setItem('theme', newTheme);
    
    // Update theme toggle button text
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.textContent = `Switch to ${currentTheme === 'dark' ? 'Light' : 'Dark'} Mode`;
    }
}

// Initialize theme from localStorage
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    
    // Update theme toggle button text
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.textContent = `Switch to ${savedTheme === 'dark' ? 'Light' : 'Dark'} Mode`;
    }
}

// Initialize theme immediately when script loads
initializeTheme();

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize greeting
    updateGreeting();
    
    // Add theme toggle event listener
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
});

// Form validation for contact form
function validateContactForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const email = form.querySelector('input[type="email"]').value;
    const phone = form.querySelector('input[type="tel"]').value;
    const message = form.querySelector('textarea').value;
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    // Phone validation (basic)
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (phone && !phoneRegex.test(phone)) {
        alert('Please enter a valid phone number');
        return false;
    }
    
    // Message validation
    if (message.length < 10) {
        alert('Please enter a message of at least 10 characters');
        return false;
    }
    
    // If all validations pass
    alert('Form submitted successfully!');
    form.reset();
    return true;
}

// Add form validation to contact form if it exists
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', validateContactForm);
}

// Skills Slideshow
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.skills-slider');
    const prevBtn = document.getElementById('prev-skill');
    const nextBtn = document.getElementById('next-skill');
    const items = document.querySelectorAll('.skill-item');
    
    let currentIndex = 0;
    const itemWidth = 270; // Width of item + gap
    
    // Pause animation on hover
    slider.addEventListener('mouseenter', () => {
        items.forEach(item => {
            item.style.animationPlayState = 'paused';
        });
    });
    
    slider.addEventListener('mouseleave', () => {
        items.forEach(item => {
            item.style.animationPlayState = 'running';
        });
    });
    
    // Navigation buttons
    prevBtn.addEventListener('click', () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateSlider();
    });
    
    nextBtn.addEventListener('click', () => {
        currentIndex = Math.min(currentIndex + 1, items.length - 1);
        updateSlider();
    });
    
    function updateSlider() {
        const offset = -currentIndex * itemWidth;
        slider.style.transform = `translateX(${offset}px)`;
    }
    
    // Clone items for infinite scroll effect
    items.forEach(item => {
        const clone = item.cloneNode(true);
        slider.appendChild(clone);
    });
});

// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    // Create overlay element
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    body.appendChild(overlay);

    // Toggle menu function
    function toggleMenu() {
        mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    }

    // Event listeners
    mobileMenuBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Close menu on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
}); 
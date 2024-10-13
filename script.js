// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Scroll to the top of the target section
            });
        }
    });
});

// Alert when the profile image is clicked
document.getElementById('nav-profile').addEventListener('click', function() {
    alert('Profile image clicked!');
});

// Responsive Navigation Toggle
const navLinks = document.querySelector('nav ul'); // Corrected 'n av' to 'nav'
const navToggle = document.getElementById('nav-toggle');

// Toggle navigation visibility on button click
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Toggle the 'show' class on click
});

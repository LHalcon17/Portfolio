// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Use profile image as the toggle for responsive navigation
document.getElementById('nav-profile').addEventListener('click', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('show');
});

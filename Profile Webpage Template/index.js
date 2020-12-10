const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

// Open the Navbar
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

// Close the navbar
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

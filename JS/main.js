document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksHidden = document.querySelector('.nav-links.hidden');
    const header = document.querySelector('header');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        navLinksHidden.classList.toggle('active'); 
    });

    
    const links = document.querySelectorAll('.nav-links.hidden a'); 
    links.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active'); 
            navLinksHidden.classList.remove('active'); 
        });
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            header.classList.add('fixed'); 
        } else {
            header.classList.remove('fixed'); 
        }
    });
});

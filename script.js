document.addEventListener('DOMContentLoaded', function() {
    
    // GLIDE SLIDER (TO USE W/ VANILLA JS):
    new Glide('.glide', {
        type: 'carousel',
        autoplay: 5000,
        hoverpause: true,
        perView: 1,
    }).mount();


    // CONTACT FORM VALIDATION:
    var contactForm = document.querySelector('#contact-form');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        var name = document.querySelector('#name').value;
        var email = document.querySelector('#email').value;

        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var isEmailValid = emailPattern.test(email);

        // Check if the name field is filled
        var isNameFilled = name.trim() !== '';

        if (!isEmailValid || !isNameFilled) {
        if (!isNameFilled) {
            alert('Please enter your name.');
        }
        if (!isEmailValid) {
            alert('Please enter a valid email address.');
        }
        } else {
        alert('Form submitted successfully.');
        // contactForm.submit();
        }
    });

    // BACK TO TOP BUTTON:
    var backToTop = document.querySelector('#back-to-top');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
        backToTop.style.display = 'block';
        } else {
        backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // FIXED HEADER ON SCROLL:
    window.addEventListener('scroll', function() {
        const header = document.querySelector('#header');
        if (window.pageYOffset > 0) {
        header.classList.add('fixed-header');
        } else {
        header.classList.remove('fixed-header');
        }
    });
    
    // HAMBURGUER MENU:
    window.addEventListener('resize', function() {
        const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('nav');

        if (window.innerWidth > 768) {
        hamburger.style.display = 'none';
        nav.style.display = 'flex';
        } else {
        hamburger.style.display = 'flex';
        if (!hamburger.classList.contains('nav-open')) {
            nav.style.display = 'none';
        }
        }
    });


});


    // TOGGLE NAV MENU
    function toggleNav() {
        const nav = document.querySelector('nav');
        const hamburger = document.querySelector('.hamburger');

        if (nav.style.display === 'flex') {
        nav.style.display = 'none';
        hamburger.classList.remove('nav-open');
        } else {
        nav.style.display = 'flex';
        hamburger.classList.add('nav-open');
        }
    }
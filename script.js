// GOOGLE MAPS API
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
    position: uluru,
    map: map,
    });
}

$(document).ready(function(){

    // SLICK SLIDER:
    $('.slick-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        autoplay: true,
        autoplaySpeed: 3300,
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slick-content',
        dots: true,
        focusOnSelect: true
    });


    // CONTACT FORM VALIDATION:
    $('#contact-form').submit(function(e) {
        e.preventDefault();

        var name = $('#name').val();
        var email = $('#email').val();

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
            // $('#contact-form').submit();
        }
    });

    // BACK TO TOP BTN:
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });

    window.addEventListener('load', function() {
        initMap();
    });


});
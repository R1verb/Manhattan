document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector('.burger_menu');
    const headerNav = document.querySelector('.header_nav_mobile');
    const body = document.body;

    burgerMenu.addEventListener('click', function () {
        burgerMenu.classList.toggle('active');
        headerNav.classList.toggle('active');
        body.classList.toggle('body-overflow-hidden');
    });

    document.addEventListener('click', function (event) {
        if (!burgerMenu.contains(event.target) && !headerNav.contains(event.target ) ) {
            burgerMenu.classList.remove('active');
            headerNav.classList.remove('active');
            body.classList.remove('body-overflow-hidden');
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 786) {
            burgerMenu.classList.remove('active');
            headerNav.classList.remove('active');
            body.classList.remove('body-overflow-hidden');
        }
    });
});
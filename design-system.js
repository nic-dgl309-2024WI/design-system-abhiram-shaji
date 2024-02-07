document.getElementById('hamburger-btn').addEventListener('click', function () {
    var menu = document.getElementById('mobile-menu');
    if (menu.classList.contains('mobile-menu--active')) {
        menu.classList.remove('mobile-menu--active');
    } else {
        menu.classList.add('mobile-menu--active');
    }
});

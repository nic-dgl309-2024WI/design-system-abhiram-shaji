function showMenu() {
    document.querySelector('.navigation').classList.toggle('active');
    document.querySelector('.menu').classList.toggle('hide');
    document.querySelector('.close').classList.toggle('show');
}

function showMenu() {
    var body = document.body;
    var navigation = document.querySelector('.navigation');
    var menuIcon = document.querySelector('.menu');
    var closeIcon = document.querySelector('.close');

    // Toggle navigation menu visibility
    navigation.classList.toggle('active');

    // Check if the navigation menu is active
    if (navigation.classList.contains('active')) {
        // Menu is active, disable body scroll and show close icon
        body.style.overflow = 'hidden';
        menuIcon.style.display = 'none'; // Hide the hamburger menu icon
        closeIcon.style.display = 'block'; // Show the close icon
    } else {
        // Menu is not active, enable body scroll and show hamburger menu icon
        body.style.overflow = '';
        menuIcon.style.display = 'block'; // Show the hamburger menu icon
        closeIcon.style.display = 'none'; // Hide the close icon
    }
}

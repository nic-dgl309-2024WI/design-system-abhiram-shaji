function showMenu() {
    document.querySelector('.navigation').classList.toggle('active');
    document.querySelector('.menu').classList.toggle('hide');
    document.querySelector('.close').classList.toggle('show');
}

// Get the current URL path
var path = window.location.pathname;

// Get the filename from the URL path
var page = path.split("/").pop();

// Get the link elements
var aboutLink = document.getElementById("about-link");
var demoLink = document.getElementById("demo-link");

// Add 'active' class to the corresponding link based on the page
if (page === "about-me.html") {
  aboutLink.classList.add("active");
} else if (page === "demo-site.html") {
  demoLink.classList.add("active");
}

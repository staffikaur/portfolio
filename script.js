// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Thank you! Your message has been received.");

    contactForm.reset();

});
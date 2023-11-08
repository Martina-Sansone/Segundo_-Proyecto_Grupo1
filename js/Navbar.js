const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click" , () => {
    navMenu.classList.toggle("nav-menu_visible")
})

window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".Navbar");
    if (window.scrollY > navbar.offsetTop) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});
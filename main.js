const navLinks = document.querySelector(".nav__links");
const openNav = document.querySelector("#open");
const closeNav = document.querySelector("#close");

openNav.addEventListener('click', () => {
    navLinks.classList.add('__visible')
})

closeNav.addEventListener('click', () => {
    navLinks.classList.remove('__visible')
})


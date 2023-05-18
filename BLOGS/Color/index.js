const menu = document.querySelector("#mobile-menu");
const menulist = document.querySelector(".nav_menu");

const mobileMenu = () => {
    menu.classList.toggle("is-active");
    menulist.classList.toggle("active");
};

menu.addEventListener('click',mobileMenu);
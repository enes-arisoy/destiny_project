const menuBtn =document.querySelector("#menu-btn");
const openNav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    openNav.classList.toggle("open-nav");
});
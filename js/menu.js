const menu = document.getElementById("menu");
const menuToggle = document.getElementById("menuToggle");

const toggleMenu = () => {
  menuToggle.classList.toggle("active");
};

menu.addEventListener("click", toggleMenu);

console.log(menuToggle);


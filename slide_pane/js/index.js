const menuTitle = document.querySelector('.menu-title');
const menu = document.querySelector('.menu');

console.log(menuTitle);
console.log(menu);

menuTitle.addEventListener('click', (event) => {
    menu.classList.toggle('open-left-menu');
});
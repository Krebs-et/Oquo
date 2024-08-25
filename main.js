const navToggle = document.querySelector('.nav_toggle');
const navMenu = document.querySelector('.nav_menu');


navToggle.addEventListener('click', () => {
    navMenu.classList.toggle("nav_menu_visible");
})

// const COLOR_DEFAULT = '#f7f6f6'
// const VISIBILITY_DEFAULT = 'none'

// function changeColor (elemento, color, tarjeta, visibilidad) {
//     changeTodosColor();
//     elemento.style.backgroundColor = color;
//     tarjeta.style.display = visibilidad;
// }

// function changeTodosColor(){
//     document.querySelectorAll('.catalog_menu > li').forEach(e => {
//         e.style.backgroundColor = COLOR_DEFAULT;
//     });
//     document.querySelectorAll('.area_wellness_cards > .area_wellness_card').forEach(i => {
//         i.style.display = VISIBILITY_DEFAULT;
//     });
// }




let menu = document.querySelector('#menu-icon');
let leftSide = document.querySelector('.left-side');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    leftSide.classList.toggle('open');
}
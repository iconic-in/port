let menuBar = document.querySelector('#menu-bar');
let navBar = document.querySelector('.navbar');

menuBar.addEventListener('click',() => {

    menuBar.classList.toggle('fa-times');
    navBar.classList.toggle('nav-toggle');

});

window.onscroll = () => {
    menuBar.classList.remove('fa-times');
    navBar.classList.remove('nav-toggle');
}
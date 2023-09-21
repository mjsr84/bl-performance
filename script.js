const menuToggle = document.getElementById('menuToggle')
const navMenu = document.querySelector('#nav-bar')
const logo = document.querySelector('.imgContainer')
const header = document.querySelector('header')
const closeMenu = document.getElementById('closeMenu')


menuToggle.addEventListener('click', function () {
    navMenu.classList.toggle('show-nav-menu')
    header.classList.toggle('show-nav-menu')
    logo.classList.toggle('show-nav-menu')
    closeMenu.classList.toggle('show-nav-menu')
})

closeMenu.addEventListener('click', function () {
    navMenu.classList.toggle('show-nav-menu')
    header.classList.toggle('show-nav-menu')
    logo.classList.toggle('show-nav-menu')
    closeMenu.classList.toggle('show-nav-menu')
})
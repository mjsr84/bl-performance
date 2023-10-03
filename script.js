const menuToggle = document.getElementById('menuToggle')
const mobileMenu = document.querySelector('.mobileMenu')
const navBar = document.querySelector('.navBar')
const navBarList = document.getElementById('navBar')
const header = document.querySelector('header')
const headerLogo = document.querySelector('.headerImgContainer')
const closeMenu = document.getElementById('closeMenu')



menuToggle.addEventListener('click', function () {
    menuToggle.classList.toggle('show-nav-menu')
    mobileMenu.classList.toggle('show-nav-menu')
    navBar.classList.toggle('show-nav-menu')
    navBarList.classList.toggle('show-nav-menu')
    header.classList.toggle('show-nav-menu')
    headerLogo.classList.toggle('show-nav-menu')
    closeMenu.classList.toggle('show-nav-menu')
})

closeMenu.addEventListener('click', function () {
    menuToggle.classList.toggle('show-nav-menu')
    mobileMenu.classList.toggle('show-nav-menu')
    navBar.classList.toggle('show-nav-menu')
    navBarList.classList.toggle('show-nav-menu')
    header.classList.toggle('show-nav-menu')
    headerLogo.classList.toggle('show-nav-menu')
    closeMenu.classList.toggle('show-nav-menu')
})
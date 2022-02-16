const toggle = document.querySelector('.toggle')
toggle.addEventListener('click', () => {
    const menu = document.querySelector('.menu-principal')
    const header = document.querySelector('.header')
    toggle.classList.toggle('active')
    menu.classList.toggle('active')
    header.classList.toggle('active')
})
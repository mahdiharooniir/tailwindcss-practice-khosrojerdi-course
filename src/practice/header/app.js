window.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('#show-menu')
    const mobileMenu = document.querySelector('#mobile-menu')
    button.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden')
    })
})
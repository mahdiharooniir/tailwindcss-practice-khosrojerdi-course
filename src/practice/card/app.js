const button = document.querySelector('#button')
const sun = document.querySelector('#sun')
const moon = document.querySelector('#moon')

button.addEventListener('click', function() {
    document.documentElement.classList.toggle('dark')
    if(document.documentElement.classList.contains('dark')) {
        moon.classList.add('hidden')
        sun.classList.remove('hidden')
    } else {
        sun.classList.add('hidden')
        moon.classList.remove('hidden')
    }
})
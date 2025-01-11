const menuIcon = document.querySelector("#menuIcon")
const menuContainer = document.querySelector("#menuContainer")

const toggleMenu = () => {
    menuIcon.classList.toggle('open')
    menuContainer.classList.toggle('show')
}

menuIcon.addEventListener('click', toggleMenu)
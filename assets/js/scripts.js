const menuContent = document.querySelector('.menu-content')
const head = document.querySelector('.header-flex')

console.log(head)
menuContent.addEventListener('click', e => {
    const classNameOfClickedElement = e.target.classList[0];
    if (classNameOfClickedElement === 'close-menu'){
        menuContent.style.display = "none"
    }
    console.log(classNameOfClickedElement)
})

head.addEventListener('click', e => {
    const classNameOfClickedElement = e.target.classList[0];
    if (classNameOfClickedElement === 'open-menu'){
        menuContent.style.display = "flex"
    }

    console.log(classNameOfClickedElement)
})
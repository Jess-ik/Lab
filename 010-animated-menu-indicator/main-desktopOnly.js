const menu = document.querySelector('.menu')
const menuItems = Array.from(document.querySelectorAll('a'))
let activeItem = menu.querySelector('[aria-selected]')

const indicator = document.createElement('span')
indicator.classList.add('indicator')
menu.appendChild(indicator)
if (activeItem) {
    indicator.style.setProperty('transform', getTransform(activeItem))
}

function getTransform(element) {
    const transform = {
        x: element.offsetLeft,
        scaleX: element.offsetWidth / 100
    }
    return `translateX(${transform.x}px) scaleX(${transform.scaleX})`
}

function onItemClick(e) {
    if (e.currentTarget === activeItem) {
        return;
    }
    activeItem?.removeAttribute('aria-selected')
    e.currentTarget.setAttribute('aria-selected', 'true')

    indicator.animate([
        {transform: getTransform(e.currentTarget)}
    ], {
        fill: 'both',
        duration: 600,
        easing: 'cubic-bezier(.48,1.55,.28,1)'
    })
    activeItem = e.currentTarget
}

menuItems.forEach((item) => {
    item.addEventListener('click', onItemClick)
})
const menu = document.querySelector('.menu')
const menuItems = Array.from(document.querySelectorAll('a'))
let activeItem = menu.querySelector('[aria-selected]')

menuItems.forEach((item) => {
    const indicator = document.createElement('span')
    indicator.classList.add('indicator')
    item.appendChild(indicator)
})

function getTransform(fromElement, toElement) {
    const fromItem = fromElement.getBoundingClientRect()
    const toItem = toElement.getBoundingClientRect()
    const transform = {
        x: fromItem.x - toItem.x,
        y: fromItem.y - toItem.y,
        scaleX: fromItem.width / toItem.width,
        scaleY: fromItem.height / toItem.height
    }
    return `translate3d(${transform.x}px, ${transform.y}px, 0)
    scale(${transform.scaleX}, ${transform.scaleY})`
}

function onItemClick(e) {
    if (e.currentTarget === activeItem) {
        return;
    }
    activeItem?.removeAttribute('aria-selected')
    e.currentTarget.setAttribute('aria-selected', 'true')
    
    if (activeItem) {
        const prevIndicator = activeItem.querySelector('.indicator')
        const currentIndicator = e.currentTarget.querySelector('.indicator')
        currentIndicator.animate([
            { transform: getTransform(prevIndicator, currentIndicator) },
            {transform: 'translate3d(0,0,0) scale(1,1)'}
        ], {
            fill: 'none',
            duration: 600,
            easing: 'cubic-bezier(.48,1.55,.28,1)'
    })
    }
    
    
    activeItem = e.currentTarget
    
    
    
}

menuItems.forEach((item) => {
    item.addEventListener('click', onItemClick)
})
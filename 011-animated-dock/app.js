function between(val, min, max) {
    return Math.max(min, Math.min(val, max))
}

function scaling(dist) {
    return Math.max(Math.min(-0.2 * Math.pow(dist, 2) + 1.05, 1), 0);
}

const transformOrigins = {
    '-1': 'right',
    '0': 'center',
    '1': 'left'
}


class Dock {

    scale = 1

    constructor(el) {
        this.root = el;
        this.icons = Array.from(el.children);
        this.iconSize = this.icons[0].offsetWidth;
        el.addEventListener('mousemove', this.handleMouseMove.bind(this));
        el.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
        el.addEventListener('mouseenter', this.handleMouseEnter.bind(this));
    }

    handleMouseMove(e) {
        this.mousePosition = between((e.clientX - this.root.offsetLeft) / this.iconSize, 0, this.icons.length);
        this.scaleIcons();
    }

    handleMouseLeave() {
        this.root.classList.add("animated");
        this.icons.forEach((icon) => {
            icon.style.removeProperty('transform');
            icon.style.removeProperty('transform-origin');
        })
    }

    handleMouseEnter() {;
        this.root.classList.add("animated");
        window.setTimeout(() => {
            this.root.classList.remove("animated");
        }, 100)
    }

    scaleIcons() {
        const selectedIndex = Math.floor(this.mousePosition);
        const centerOffset = this.mousePosition - selectedIndex - 0.5;
        let baseOffset = this.scaleFromDirection(selectedIndex, 0, -centerOffset * this.iconSize);
        let offset = baseOffset * (0.5 - centerOffset);
        for (let i = selectedIndex + 1; i < this.icons.length; i++) {
            offset += this.scaleFromDirection(i, 1, offset)

        }
        offset = baseOffset * (0.5 + centerOffset);
        for (let i = selectedIndex - 1; i >= 0 ; i--) {
            offset += this.scaleFromDirection(i, -1, -offset)

        }
    }

    scaleFromDirection(index, direction, offset) {
        const center = index + 0.5;
            const distanceFromPointer = this.mousePosition - center;
            const scale = scaling(distanceFromPointer) * this.scale;
            const icon = this.icons[index];
            icon.style.setProperty("transform", `translateX(${offset}px) scale(${scale + 1})`)
            icon.style.setProperty(
                'transform-origin',
                `${transformOrigins[direction.toString()]} bottom`
            )
            return scale * this.iconSize
    }
}

new Dock(document.querySelector(".dock"))
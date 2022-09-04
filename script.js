let swiper = null
let screenWidth = window.screen.width
const isMobile = (screenWidth) => {
    return screenWidth <= 767
}

const slidesPerView = () => {
    const slide = document.getElementsByClassName('swiper-button')[0].clientWidth
    return (screenWidth) / (slide + 8)
}


if (isMobile(screenWidth)) {
    swiper = new Swiper('.swiper', {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        slidesPerView: slidesPerView(),
        spaceBetween: 16,
    });
}


const resize = () => {
    screenWidth = window.screen.width
    if (swiper != null) {
        if (isMobile(screenWidth)) {
            swiper = new Swiper('.swiper', {
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                },
                slidesPerView: slidesPerView(),
                spaceBetween: 16,
            });
        } else {
            swiper.destroy(true, true)
            swiper.disable()
        }
    }
}

window.addEventListener('resize', resize)

let buttonState = false

const buttonMoreInfo = document.querySelector('.button-more-info')
const extraLinks = document.getElementsByClassName('last-elems-slides')

const clickHandler = (clickEvent) => {
    const [arrows, text] = buttonMoreInfo.children
    const toggle = (state) => {
        if (!state) {
            text.innerHTML = 'Скрыть'
            arrows.style.transform = 'rotate(180deg)'
            buttonMoreInfo.style.top = '400px'
            Array.from(extraLinks).forEach(el => {
                el.style.display = 'block'
            });
        } else {
            text.innerHTML = 'Показать все'
            arrows.style.transform = 'rotate(0)'
            buttonMoreInfo.style.top = '300px'
            Array.from(extraLinks).forEach(el => {
                el.style.display = 'none'
            });
        }
        buttonState = !buttonState
    }
    toggle(buttonState)
}

buttonMoreInfo.addEventListener('click', clickHandler)








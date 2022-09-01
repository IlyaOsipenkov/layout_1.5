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






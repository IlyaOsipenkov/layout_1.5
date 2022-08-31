
const swiper = new swiper('.swiper', {
    modules: [Navigation, Pagination],

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});


setInterval(() => {
    swiper.slideNext()
}, 500)

console.log('test')
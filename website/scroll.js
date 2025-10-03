const carousel = document.querySelector('.carousel');

carousel.innerHTML += carousel.innerHTML;

const half = carousel.scrollWidth / 2;
carousel.scrollLeft = half;

carousel.addEventListener('scroll', () => {
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    const half = maxScroll / 2;

    if (carousel.scrollLeft >= maxScroll) {
        console.log("Hit rightmost edge.");
        carousel.scrollLeft = half;
    } else if (carousel.scrollLeft <= 5) {
        console.log("Hit leftmost edge.")
        carousel.scrollLeft = half;
    }
});
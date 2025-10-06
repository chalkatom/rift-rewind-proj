const carousel = document.querySelector('.carousel');

// infinite loop scroll
/*
i dont know why 4 extra copies makes it work
hopefully that doesnt cause any crazy load times in future...
 */
carousel.innerHTML += carousel.innerHTML;
carousel.innerHTML += carousel.innerHTML;
carousel.innerHTML += carousel.innerHTML;
carousel.innerHTML += carousel.innerHTML;

let halfWidth = carousel.scrollWidth / 2;
carousel.scrollLeft = 0;

carousel.addEventListener('scroll', () => {
    if (carousel.scrollLeft >= halfWidth) {
        console.log("Hit rightmost edge.");
        carousel.scrollLeft -= halfWidth;
    } else if (carousel.scrollLeft <= 0) {
        console.log("Hit leftmost edge.")
        carousel.scrollLeft += halfWidth;
    }
});
/**/

//click and drag scroll

let isDown = false;
let startX;
let scrollLeft;

document.querySelectorAll('.carousel img').forEach(img => {
  img.addEventListener('dragstart', e => e.preventDefault());
});

carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    carousel.classList.add('active');
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
  isDown = false;
  carousel.classList.remove('active');
});

carousel.addEventListener('mouseup', () => {
  isDown = false;
  carousel.classList.remove('active');
});

carousel.addEventListener('mousemove', (e) => {
  if(!isDown) return;  // stop if mouse not pressed
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 1; // multiplier for speed
  carousel.scrollLeft = scrollLeft - walk;
});
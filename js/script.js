document.addEventListener('DOMContentLoaded', function() {
  let currentIndex = 0;
  const itemsPerSlide = 7;

  function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const slideCount = document.querySelectorAll('.carousel-slide').length;

    // Correct the currentIndex logic
    if (index >= slideCount) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = slideCount - 1;
    } else {
      currentIndex = index;
    }

    const offset = -currentIndex * 100; // This ensures the slides move in full percentages
    carousel.style.transform = `translateX(${offset}%)`;
    console.log(`Showing slide ${currentIndex} with offset ${offset}%`);
  }

  function nextSlide() {
    console.log('Next slide');
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    console.log('Previous slide');
    showSlide(currentIndex - 1);
  }

  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;

  let startX = 0;
  let endX = 0;
  const carouselWrap = document.querySelector('.carousel-wrap');

  carouselWrap.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  carouselWrap.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
  });

  carouselWrap.addEventListener('touchend', () => {
    if (startX > endX + 50) {
      nextSlide();
    } else if (startX < endX - 50) {
      prevSlide();
    }
  });

  document.querySelector('.carousel-nav.prev').addEventListener('click', prevSlide);
  document.querySelector('.carousel-nav.next').addEventListener('click', nextSlide);
});



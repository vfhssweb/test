let currentIndex = 0;

function slideImages() {
    const sliderTrack = document.getElementById('sliderTrack');
    const items = document.querySelectorAll('.slider-item');
    const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight);
    
    currentIndex++;
    
    if (currentIndex >= items.length) {
        currentIndex = 0;
    }

    sliderTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

setInterval(slideImages, 1000);

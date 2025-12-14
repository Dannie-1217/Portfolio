"use strict";


document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector("#carousel");
    const leftBtn = document.querySelector(".carousel-btn.left");
    const rightBtn = document.querySelector(".carousel-btn.right");

    let currentIndex = 0;
    const totalCards = carousel.children.length;

    let cardWidth = 0;
    updateCardWidth();

    rightBtn.addEventListener("click", () => {
        if (currentIndex < totalCards - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    leftBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    function updateCardWidth(){
        const firstCard = carousel.querySelector(".card");
        const styles = getComputedStyle(carousel);
        const gap = parseFloat(styles.gap) || 0;
        
        cardWidth = firstCard.offsetWidth + gap;
    }

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    window.addEventListener("resize", () => {
        const oldWidth = cardWidth;
        
        const newWidth=updateCardWidth();
        
        if (newWidth !== cardWidth) {
            updateCarousel();
        }
    });
});
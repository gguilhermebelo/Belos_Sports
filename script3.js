const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");
const carouselSlide = document.querySelector(".carousel-slide");

let counter = 0;

nextButton.addEventListener("click", () => {
    if (counter < 3) {
        counter++;
    }
    carouselSlide.style.transform = `translateX(-${counter * 100}%)`;
});

prevButton.addEventListener("click", () => {
    if (counter > 0) {
        counter--;
    }
    carouselSlide.style.transform = `translateX(-${counter * 100}%)`;
});
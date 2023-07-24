document.addEventListener("DOMContentLoaded", function () {
    // Скрипт для табів
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    function showTab(tabIndex) {
        tabButtons.forEach((button, index) => {
            if (index === tabIndex) {
                button.classList.add("active");
            } else {
                button.classList.remove("active");
            }
        });

        tabContents.forEach((content, index) => {
            if (index === tabIndex) {
                content.classList.add("active");
            } else {
                content.classList.remove("active");
            }
        });
    }

    tabButtons.forEach((button, index) => {
        button.addEventListener("click", () => showTab(index));
    });

    // Скрипт для акордеону
    const accordionButton = document.querySelector(".accordion-button");
    const accordionContent = document.querySelector(".accordion-content");

    accordionButton.addEventListener("click", function () {
        accordionContent.classList.toggle("active");
    });

    // Скрипт для слайдера
    const slider = document.querySelector(".slider");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");

    let currentIndex = 0;
    const slides = slider.children;
    const totalSlides = slides.length;
    const slideWidth = slides[0].clientWidth;

    prevButton.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalSlides - 1;
        }
        updateSliderPosition();
    });

    nextButton.addEventListener("click", function () {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSliderPosition();
    });

    function updateSliderPosition() {
        const newPosition = -currentIndex * slideWidth;
        slider.style.transform = `translateX(${newPosition}px)`;
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    const indicators = document.querySelectorAll(".indicator");
    const images = document.querySelectorAll(".slider img");
    let currentIndex = 0;

    // Función para actualizar el slider
    function updateSlider(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle("active", i === index);
        });
    }

    // Función para avanzar automáticamente
    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider(currentIndex);
    }

    // Cambiar slide automáticamente cada 8 segundos
    let interval = setInterval(nextSlide, 8000);

    // Agregar eventos a los indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
            clearInterval(interval); // Detener el autoplay al hacer clic
            currentIndex = index;
            updateSlider(currentIndex);
            interval = setInterval(nextSlide, 5000); // Reiniciar el autoplay
        });
    });
});
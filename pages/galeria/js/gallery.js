document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const modal = document.getElementById("galleryModal");
    const modalImage = document.getElementById("modalImage");
    const infoPanel = document.getElementById("infoPanel");
    const closeModal = document.querySelector(".close-modal");

    // Filtrar imágenes
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            // Desactivar todos los botones
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Mostrar/ocultar imágenes según el filtro
            galleryItems.forEach(item => {
                const info = item.getAttribute("data-info").toLowerCase();
                if (filter === "all" || info.includes(filter.toLowerCase())) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    // Abrir modal al hacer clic en una imagen
    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            const imgSrc = item.querySelector("img").src;
            const info = item.getAttribute("data-info");
            modalImage.src = imgSrc;
            infoPanel.textContent = info;
            modal.style.display = "flex";
        });
    });

    // Cerrar modal al hacer clic en la "X"
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Cerrar modal al hacer clic fuera de la imagen
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
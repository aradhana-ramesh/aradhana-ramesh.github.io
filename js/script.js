

const projectCards = document.querySelectorAll(".project-card");

const modal = document.getElementById("project-modal");
const modalImage = document.getElementById("modal-image");
const closeModal = document.querySelector(".close-modal");

projectCards.forEach(card => {
    card.addEventListener("click", () => {
        const image = card.dataset.image;

        modalImage.src = image;
        modal.style.display = "flex";
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close when clicking outside the image
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Close when pressing Escape
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        modal.style.display = "none";
    }
});

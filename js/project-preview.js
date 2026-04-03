console.log("project-preview.js loaded");
document.addEventListener("DOMContentLoaded", () => {
  const previewButtons = document.querySelectorAll(".preview-button");
  const modal = document.getElementById("image-modal");
  const modalImage = document.getElementById("modal-image");
  const modalCaption = document.getElementById("modal-caption");
  const modalClose = document.querySelector(".modal-close");

  // Add click event to each preview button
  previewButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const projectCard = button.closest(".project-card");
      const imageSrc = projectCard.querySelector("img").getAttribute("src");
      const captionText = projectCard.querySelector("h4").textContent;

      // Set modal image and caption
      modalImage.setAttribute("src", imageSrc);
      modalCaption.textContent = captionText;

      // Show the modal
      modal.style.display = "block";
      modal.setAttribute("aria-hidden", "false");
    });
  });

  // Close the modal when the close button is clicked
  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
  });

  // Close the modal when clicking outside the image
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
      modal.setAttribute("aria-hidden", "true");
    }
  });
});

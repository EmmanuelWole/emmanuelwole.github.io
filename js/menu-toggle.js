document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuButton.addEventListener("click", () => {
    const isExpanded =
      mobileMenuButton.getAttribute("aria-expanded") === "true";

    // Toggle the menu visibility
    mobileMenuButton.setAttribute("aria-expanded", !isExpanded);
    mobileMenu.setAttribute("aria-hidden", isExpanded ? "true" : "false");

    // Add or remove a class to show/hide the menu
    mobileMenu.classList.toggle("open");
  });
});

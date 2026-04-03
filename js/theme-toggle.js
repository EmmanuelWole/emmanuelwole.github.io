document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.getElementById("theme-toggle");
  const body = document.body;

  // Check for saved user preference in localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.toggle("dark-mode", savedTheme === "dark");
  }

  // Toggle dark mode on button click
  themeToggleButton.addEventListener("click", () => {
    const isDarkMode = body.classList.toggle("dark-mode");

    // Save user preference to localStorage
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");

    // Update the button icon
    themeToggleButton.innerHTML = isDarkMode
      ? '<i class="fa fa-sun-o"></i>'
      : '<i class="fa fa-moon-o"></i>';
  });

  // Set the initial icon based on the current theme
  themeToggleButton.innerHTML = body.classList.contains("dark-mode")
    ? '<i class="fa fa-sun-o"></i>'
    : '<i class="fa fa-moon-o"></i>';
});

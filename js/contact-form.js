document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");
  const submitButton = document.getElementById("submit");
  const loadingIcon = document.getElementById("loading-icon");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Show the loading icon and disable the button
    loadingIcon.style.display = "inline-block";
    submitButton.disabled = true;

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate form inputs
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      loadingIcon.style.display = "none"; // Hide the loading icon
      submitButton.disabled = false; // Re-enable the button
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      loadingIcon.style.display = "none"; // Hide the loading icon
      submitButton.disabled = false; // Re-enable the button
      return;
    }

    // Send email using EmailJS
    emailjs
      .send("service_gze3h3x", "template_vk25fnx", {
        name: name,
        email: email,
        message: message,
      })
      .then(
        (response) => {
          showToast("Message sent successfully!", "success");
          contactForm.reset(); // Clear the form
          loadingIcon.style.display = "none"; // Hide the loading icon
          submitButton.disabled = false; // Re-enable the button
        },
        (error) => {
          showToast("Failed to send message. Please try again later.", "error");
          console.error("EmailJS Error:", error);
          loadingIcon.style.display = "none"; // Hide the loading icon
          submitButton.disabled = false; // Re-enable the button
        },
      );
  });

  // Helper function to display toast message
  function showToast(message, type = "success") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(-10px)";
      setTimeout(() => {
        toast.remove();
      }, 200);
    }, 3500);
  }

  // Scroll reveal using IntersectionObserver
  const revealElements = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    },
  );

  revealElements.forEach((el) => {
    revealObserver.observe(el);
  });

  // Helper function to validate email addresses
  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
});

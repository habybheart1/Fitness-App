document.getElementById(
  "footer-buttom"
).textContent = `© ${new Date().getFullYear()} Fitness App by Akintobi Abibat. All rights reserved.`;

// Add functionality to hamburger menu
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent click from propagating to document
  mobileMenu.classList.toggle("open");
});

// Close mobile menu when clicking outside
document.addEventListener("click", (event) => {
  if (!mobileMenu.contains(event.target) && !menuBtn.contains(event.target)) {
    mobileMenu.classList.remove("open");
  } else {
    mobileMenu.classList.remove("open");
  }
});

// Add functionality to FAQ categories
function toggleFAQ(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector("span:last-child");
  const isOpen = content.classList.contains("active");

  // Close after open
  document
    .querySelectorAll(".faq-answer")
    .forEach((c) => c.classList.remove("active"));
  document.querySelectorAll(".faq-icon").forEach((i) => (i.textContent = "+"));

  // Open if closed
  if (!isOpen) {
    content.classList.add("active");
    icon.textContent = "-";
  }
}

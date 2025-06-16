// Theme toggle logic
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// Scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll(".section").forEach(section => {
  observer.observe(section);
});

// Form stub (can be extended)
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("📨 Message sent!");
});

// scripts.js

// Toggle mobile menu
document.querySelector(".menu-toggle").addEventListener("click", () => {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("active");
});

// Smooth scroll for links
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Select the dropdown and description container
const dropdown = document.getElementById('tech-options');
const description = document.getElementById('description');

// Define the descriptions for each option
const descriptions = {
    "data-driven": "VoltUp has one of the most technologically advanced charging infrastructures with the ability to monitor the battery’s health and availability with real-time data to ensure optimum usage and maximum lifespan.",
    "real-time-updates": "BMS (Battery Management System) ensures the safety, performance, and reliability of batteries through efficient management and monitoring.",
    "efficient-products": "Telematics provides remote monitoring and diagnostics for enhanced efficiency and operational insights."
};

// Event listener to update the description when an option is selected
dropdown.addEventListener('change', () => {
    const selectedValue = dropdown.value; // Get selected option value
    if (descriptions[selectedValue]) {
        description.textContent = descriptions[selectedValue]; // Update description
    } else {
        description.textContent = ""; // Clear description if no valid selection
    }
});

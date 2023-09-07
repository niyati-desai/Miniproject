// Get references to the elements
const welcomeText = document.getElementById("welcome-text");
const optionsContainer = document.getElementById("options-container");

// Toggle the options when clicking on the welcome text
welcomeText.addEventListener("click", () => {
    // Toggle the class that controls the height and overflow
    optionsContainer.classList.toggle("hidden-options");
});
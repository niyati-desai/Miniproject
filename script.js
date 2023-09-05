document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get user input
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Here, you would typically send this data to your server for authentication
    // For a basic example, we'll just display the inputs in an alert
    alert(`Email: ${email}, Password: ${password}`);
});

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get user input
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Here, you would typically send this data to your server for authentication
    // Assume successful authentication for demonstration purposes
    if (email === "hd1@somaiya.edu" && password === "password") {
        // Redirect to the main website or dashboard upon successful login
        window.location.href = "Viewer_page.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
});

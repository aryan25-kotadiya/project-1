function login(event) {
    event.preventDefault(); // Prevent form submission
    document.querySelector(".container").style.display = "none"; // Hide login form
    document.getElementById("logout-btn").style.display = "inline-block"; // Show logout button
    alert("Login Successful!");
}

function logout() {
    document.querySelector(".container").style.display = "flex"; // Show login form
    document.getElementById("logout-btn").style.display = "none"; // Hide logout button
}
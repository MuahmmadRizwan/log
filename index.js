
function signup() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    
    // Save the user information to local storage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("email", email);
    
    alert("Signup successful!");
}

function login() {
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    var email = document.getElementById("ema").value;
    
    // Retrieve the saved user information from local storage
    var savedUsername = localStorage.getItem("username");
    var savedPassword = localStorage.getItem("password");
    var savedEmail = localStorage.getItem("email");
    
    // Check if the entered information matches the saved information
    if (username === savedUsername &&
        password === savedPassword &&
        email === savedEmail) {
        alert("Login successful!");
    } else {
        alert("Incorrect information entered");
    }
}

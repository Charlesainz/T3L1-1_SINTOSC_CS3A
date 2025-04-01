document.addEventListener("DOMContentLoaded", () => {
    const formTitle = document.getElementById("form-title");
    const authForm = document.getElementById("auth-form");
    const nameField = document.getElementById("name-field");
    const toggleForm = document.getElementById("toggle-form");

    let isSignup = false;

    toggleForm.addEventListener("click", (e) => {
        e.preventDefault();
        isSignup = !isSignup;

        if (isSignup) {
            formTitle.textContent = "Sign Up";
            nameField.style.display = "block";
            toggleForm.innerHTML = `Already have an account? <a href="#">Login</a>`;
        } else {
            formTitle.textContent = "Login";
            nameField.style.display = "none";
            toggleForm.innerHTML = `Don't have an account? <a href="#">Sign Up</a>`;
        }
    });

    authForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert(isSignup ? "Signed Up Successfully!" : "Logged In Successfully!");
    });
});

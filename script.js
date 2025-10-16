// script.js
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  loginBtn.addEventListener("click", (event) => {
    event.preventDefault(); // stop page from refreshing

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    const validUser = "magic";
    const validPass = "mob123";

    if (username === validUser && password === validPass) {
      alert("✅ Login successful! Welcome " + username + "!");
      // Redirect to another page
      window.location.href = "dashboard.html";
    } else {
      alert("❌ Invalid username or password!");
    }
  });
});

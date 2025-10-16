document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  // ✅ Multiple valid users (like a mini database)
  const users = [
    { username: "Magic", password: "123" },
    { username: "Star", password: "123" },
    { username: "Gokul", password: "123" },
    { username: "Amnish", password: "123" }
  ];

  loginBtn.addEventListener("click", (event) => {
    event.preventDefault(); // stop page refresh

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // ✅ Check if user exists in array
    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      alert("✅ Login successful! Welcome " + foundUser.username + "!");
      // Redirect to another page
      window.location.href = "dashboard.html";
    } else {
      alert("❌ Invalid username or password!");
    }
  });
});

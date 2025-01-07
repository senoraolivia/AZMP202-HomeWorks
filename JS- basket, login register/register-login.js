let registeredUsers = [];

const registerPage = document.getElementById("register-page");
const loginPage = document.getElementById("login-page");

const registerName = document.getElementById("register-name");
const registerEmail = document.getElementById("register-email");
const registerPassword = document.getElementById("register-password");
const registerBtn = document.getElementById("register-btn");
const goToLogin = document.getElementById("go-to-login");

const loginName = document.getElementById("login-name");
const loginPassword = document.getElementById("login-password");
const loginBtn = document.getElementById("login-btn");


goToLogin.addEventListener("click", () => {
  registerPage.classList.add("hidden");
  loginPage.classList.remove("hidden");
});


registerBtn.addEventListener("click", () => {
  const name = registerName.value.trim();
  const email = registerEmail.value.trim();
  const password = registerPassword.value.trim();

  if (!name || !email || !password) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "All fields are required!",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
    return;
  }

  const userExists = registeredUsers.some(
    (user) => user.name === name || user.email === email
  );

  if (userExists) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Email or Name already registered!",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
    return;
  }

  registeredUsers.push({ name, email, password });
  Swal.fire({
    icon: "success",
    title: "Success!",
    text: "You have registered successfully!",
  });

  registerName.value = "";
  registerEmail.value = "";
  registerPassword.value = "";

 
  registerPage.classList.add("hidden");
  loginPage.classList.remove("hidden");
});

loginBtn.addEventListener("click", () => {
  const name = loginName.value.trim();
  const password = loginPassword.value.trim();

  const user = registeredUsers.find(
    (user) => user.name === name && user.password === password
  );

  if (!user) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Invalid Name or Password!",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
    return;
  }

  Swal.fire({
    icon: "success",
    title: "Welcome!",
    text: `Hello, ${user.name}!`,
  });

  
  window.location.href = "homepage.html";
});

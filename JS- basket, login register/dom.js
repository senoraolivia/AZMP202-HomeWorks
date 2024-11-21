const form = document.getElementById("registerForm");
const submitButton = document.getElementById("submitBtn");

const formDataArray = JSON.parse(localStorage.getItem("formData")) || [];

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (username === "" || email === "" || password === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "All fields are required!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    } else {
        formDataArray.push({ username, email, password });

        localStorage.setItem("formData", JSON.stringify(formDataArray));

        console.log(formDataArray);

        Swal.fire({
            icon: 'success',
            title: 'Registration Successful!',
            text: 'You will be redirected to the homepage.',
        }).then(() => {
            window.location.href = "homepage.html";
        });
    }
});

document.getElementById("loginBtn").addEventListener("click", function(event) {
    event.preventDefault(); 

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (username === "" || email === "" || password === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Login successful!");
        window.location.href = "homepage.html";
    }
});

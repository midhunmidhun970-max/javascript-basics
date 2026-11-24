
let form = document.getElementById("myForm");

let name = document.getElementById("name");
let email = document.getElementById("email");
let mobile = document.getElementById("mobile");
let course = document.getElementById("course");

let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let mobileError = document.getElementById("mobileError");
let genderError = document.getElementById("genderError");
let courseError = document.getElementById("courseError");

name.addEventListener("input", function() {
    if (name.value.trim() == "") {
        nameError.textContent = "Enter your name";
    }
    else {
        nameError.textContent = "";
    }
});

email.addEventListener("input", function() {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        emailError.textContent = "Enter valid email";
    }
    else {
        emailError.textContent = "";
    }
});

document.querySelectorAll('input[name="gender"]').forEach(function(g) {
    g.addEventListener("change", function() {
        genderError.textContent = "";
    });
});

course.addEventListener("change", function() {
    if (course.value == "") {
        courseError.textContent = "Select a course";
    }
    else {
        courseError.textContent = "";
    }
});

document.getElementById("btn").addEventListener("click", function() {
    document.getElementById("message").textContent = "";
});

form.addEventListener("submit", function(e) {

e.preventDefault();

let valid = true;

nameError.textContent = "";
emailError.textContent = "";
mobileError.textContent = "";
genderError.textContent = "";
courseError.textContent = "";

if (name.value.trim() == "") {
    nameError.textContent = "Name is required";
    valid = false;
}

if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    emailError.textContent = "Invalid email";
    valid = false;
}

if (!/^[0-9]{10}$/.test(mobile.value)) {
    mobileError.textContent = "Enter 10 digit mobile number";
    valid = false;
}

let gender = document.querySelector('input[name="gender"]:checked');

if (!gender) {
    genderError.textContent = "Select your gender";
    valid = false;
}

if (course.value == "") {
    courseError.textContent = "Select your course";
    valid = false;
}

if (valid) {
    document.getElementById("message").textContent =
        "Registration Successful!";

    document.getElementById("message").className = "success";

    form.reset();
}

});

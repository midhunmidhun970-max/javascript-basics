
let form = document.getElementById("myForm");

let name = document.getElementById("name");
let email = document.getElementById("email");
let mobile = document.getElementById("mobile");
let dob = document.getElementById("dob");

let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let mobileError = document.getElementById("mobileError");
let dobError = document.getElementById("dobError");
let genderError = document.getElementById("genderError");
let workshopError = document.getElementById("workshopError");
let skillsError = document.getElementById("skillsError");
let termsError = document.getElementById("termsError");

name.addEventListener("input", function() {

    if (name.value.trim().length < 3) {
        nameError.textContent = "Enter at least 3 characters";
        name.classList.add("invalid");
    } else {
        nameError.textContent = "";
        name.classList.remove("invalid");
    }

});

form.addEventListener("submit", function(e) {

e.preventDefault();

let valid = true;

nameError.textContent = "";
emailError.textContent = "";
mobileError.textContent = "";
dobError.textContent = "";
genderError.textContent = "";
workshopError.textContent = "";
skillsError.textContent = "";
termsError.textContent = "";

if (name.value.trim().length < 3) {
    nameError.textContent = "Enter a valid name";
    valid = false;
}

if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    emailError.textContent = "Enter a valid email";
    valid = false;
}

if (!/^[0-9]{10}$/.test(mobile.value)) {
    mobileError.textContent = "Enter 10 digit mobile number";
    valid = false;
}

if (dob.value == "" || dob.value > new Date().toISOString().split("T")[0]) {
    dobError.textContent = "Select a valid date";
    valid = false;
}

let gender = document.querySelector('input[name="gender"]:checked');

if (!gender) {
    genderError.textContent = "Select your gender";
    valid = false;
}

if (document.getElementById("workshop").value == "") {
    workshopError.textContent = "Select a workshop";
    valid = false;
}

let skills = document.querySelectorAll('input[name="skills"]:checked');

if (skills.length == 0) {
    skillsError.textContent = "Select at least one skill";
    valid = false;
}

if (!document.getElementById("terms").checked) {
    termsError.textContent = "Accept the terms";
    valid = false;
}

if (valid) {
    document.getElementById("message").textContent =
        "Registration Successful!";

    document.getElementById("message").className = "success";

    form.reset();
}

}
);

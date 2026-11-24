let heading = document.getElementById("mainHeading");
heading.textContent = "Employee Details";

let designation = document.querySelector(".designation");
designation.textContent = "Designation: Full Stack Developer";

let info = document.getElementsByClassName("employee-info");

for (let i = 0; i < info.length; i++) {
    info[i].style.color = "blue";
}

let name = document.getElementById("name");
name.textContent = "Name: Midhun";
name.style.fontSize = "22px";

let department = document.getElementById("department");
department.innerHTML = "Department: <b>IT</b>";

let contact = document.getElementById("contact");
let contactDetails = contact.innerText;

document.getElementById("contactDisplay").innerText = contactDetails;

document.querySelector(".profile").style.backgroundColor = "lightblue";

document.getElementById("salary").style.color = "green";

document.querySelector(".details").style.padding = "15px";
document.querySelector(".details").style.border = "2px solid gray";
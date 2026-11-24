let students = [
    {
        id: 101,
        name: "Anu",
        age: 20,
        department: "CSE",
        english: 95,
        mathematics: 92,
        science: 88
    },
    {
        id: 102,
        name: "Rahul",
        age: 21,
        department: "ECE",
        english: 75,
        mathematics: 82,
        science: 78
    },
    {
        id: 103,
        name: "Meera",
        age: 20,
        department: "CSE",
        english: 65,
        mathematics: 55,
        science: 72
    },
    {
        id: 104,
        name: "Arun",
        age: 22,
        department: "ECE",
        english: 35,
        mathematics: 45,
        science: 50
    },
    {
        id: 105,
        name: "Neha",
        age: 21,
        department: "IT",
        english: 90,
        mathematics: 96,
        science: 94
    }
];

let optionalDetail = null;
let extraDetail;
let passed = true;

function displayStudentDetails(student) {
    console.log("\nStudent ID:", student.id);
    console.log("Name:", student.name);
    console.log("Age:", student.age);
    console.log("Department:", student.department);
    console.log("English:", student.english);
    console.log("Mathematics:", student.mathematics);
    console.log("Science:", student.science);
    console.log("Total:", calculateTotal(student));
    console.log("Average:", calculateAverage(student).toFixed(2));
}

function calculateTotal(student) {
    return student.english + student.mathematics + student.science;
}

function calculateAverage(student) {
    return calculateTotal(student) / 3;
}

function calculateGrade(average) {
    if (average >= 90) {
        return "A+";
    } else if (average >= 80) {
        return "A";
    } else if (average >= 70) {
        return "B";
    } else if (average >= 60) {
        return "C";
    } else if (average >= 50) {
        return "D";
    } else {
        return "F";
    }
}

function checkResult(student) {
    return student.english >= 40 &&
           student.mathematics >= 40 &&
           student.science >= 40;
}

function findTopper() {
    let topper = students[0];

    for (let student of students) {
        if (calculateTotal(student) > calculateTotal(topper)) {
            topper = student;
        }
    }

    console.log("\nTopper:", topper.name);
    console.log("Total Marks:", calculateTotal(topper));
}

function displayFailedStudents() {
    console.log("\nFailed Students:");

    let found = false;

    for (let student of students) {
        if (!checkResult(student)) {
            console.log(student.name);
            found = true;
        }
    }

    if (!found) {
        console.log("All students have passed.");
    }
}

function filterByDepartment(department) {
    console.log("\nStudents in", department, ":");

    let found = false;

    for (let student of students) {
        if (student.department === department) {
            console.log(student.name, "-", student.id);
            found = true;
        }
    }

    if (!found) {
        console.log("No students found.");
    }
}

function generateReport() {
    console.log("\n===== STUDENT PERFORMANCE REPORT =====");

    for (let student of students) {
        let total = calculateTotal(student);
        let average = calculateAverage(student);
        let grade = calculateGrade(average);
        let result = checkResult(student);

        console.log("\nID:", student.id);
        console.log("Name:", student.name);
        console.log("Total:", total);
        console.log("Average:", average.toFixed(2));
        console.log("Grade:", grade);
        console.log("Result:", result ? "PASS" : "FAIL");
    }
}

console.log("===== STUDENT DETAILS =====");

for (let student of students) {
    displayStudentDetails(student);
}

findTopper();

displayFailedStudents();

filterByDepartment("CSE");

generateReport();
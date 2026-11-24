
var studentName = "Midhun";
let math = 85;
let science = 78;
let english = 92;
const maxMark = 100;
let age = 22;
let className = "B.Tech IT";

let isPassed = true;       
let remarks;               
let optionalRemarks = null; 
math += 5;  
let total = math + science + english;

let average = total / 3;
let percentage = (total / (maxMark * 3)) * 100;
let mathPass = math >= 40;
let sciencePass = science >= 40;
let englishPass = english >= 40;

let averagePass = average >= 50;

let allSubjectsPass = mathPass && sciencePass && englishPass;

isPassed = allSubjectsPass && averagePass;

let outstanding = math > 90 || science > 90 || english > 90;
let failed = !isPassed;

console.log("== STUDENT ACADEMIC PERFORMANCE ==");

console.log("Student Name:", studentName);
console.log("Age:", age);
console.log("Class:", className);

console.log("\n-- SUBJECT MARKS ---");

console.log("Mathematics:", math);
console.log("Science:", science);
console.log("English:", english);

console.log("\n--- RESULT SUMMARY --");

console.log("Total Marks:", total);
console.log("Average Marks:", average);
console.log("Percentage:", percentage + "%");

console.log("\n--PASS STATUS --");

console.log("Mathematics Passed:", mathPass);
console.log("Science Passed:", sciencePass);
console.log("English Passed:", englishPass);
console.log("Average Above 50:", averagePass);
console.log("Final Result:", isPassed);
console.log("Failed:", failed);
console.log("\nOutstanding Score:", outstanding);
console.log("Remarks:", remarks);
console.log("Optional Remarks:", optionalRemarks);

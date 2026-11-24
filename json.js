// JSON format

let person={
    "name":"john",
    "age":40,
    "city":"New York"
}
let jsondata=JSON.stringify(person);
console.log(jsondata)
let obj=JSON.parse(jsondata);
console.log(obj);

// conditional statements

let age=20;
let gender="male";
if(age>18){
    console.log("adult");
}else if(age==18){
    console.log(" an adult and age is 18");
}else{
    console.log("minor");
}

// Multiple Conditional Statement

if (age > 18 && gender === "male") {
  console.log("adult and male");
} else if (age > 18 && gender === "female") {
  console.log("adult and female");
} else {
  console.log("minor");
}

let a=18;
let b=1;
if(a==18 || b==19){
    console.log("yes")
}else{
    console.log("not");
}

let agree=true;
if(agree){
    console.log("go ahead");
}else{
    console.log("reconsider");
}

// Ternary Operator

(agree)?console.log('i agree'):console.log('disagree');

        // Control Statements or loops

// for loop

for(let i=0;i<10;i++){
    console.log(i+1)
}

// for of loop

let fruits=["apple","pear","orange"];
let str ='javascript';
for(let item of fruits){
    console.log(item);
}
for(let x of str){
    console.log(x);
}

// for in loop

for(let key in person){
    console.log(person[key]);
}

// while loop

let ind=0;
while(ind<10){
    console.log(ind+1);
    ind++;
}

// do while loop

let value=0;
do{
    console.log(value+1);
    value++;
}while(value<15);




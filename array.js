// Arrays
let array=[1,2,3,4,5,'aaa','bbb','ccc'];
console.log(array);

console.log(array.length);
console.log(array[2]);

array.push('yellow');
console.log(array);

array.pop('');
console.log(array);

array.unshift('yooo');
console.log(array);

array.shift('');
console.log(array);

// Extract a portion of an array

let array1=array.slice(2,5);
console.log(array1);

// splice
array1.splice(2,3,'qwerty','asdfghj');
console.log(array1);

//objects

let person={
    firstName:'ravi',
    age:34,
    place:'tvm'
}
console.log(person);

let footballer={
    Name:'Neymar',
    Age:34,
    Place:'Brazil'
}
console.log(footballer);

// another way of creating an object

let cricket=new Object();
cricket.name='Virat Kholi',
cricket.age=40,
cricket.place='mumbai'
console.log(cricket);

// ECMA 6--Classes

class student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
let obj_stu=new student('Zara',20);
console.log(obj_stu);

class bike{
    constructor(model,color){
        this.model=model;
        this.color=color;
    }
}
let bike1=new bike(' XR Rally 300','Red');
console.log(bike1);
let bike2=new bike('KLX','Green');
console.log(bike2);

// array of objects

let students=[{firstname:'mohan',age:12},{firstname:'neha',age:14}];
console.log(students[1].firstname);

// object inside object

let person1={
    address:{
        street:'Thambannor',
        city:'Trivandrum',
        state:'Kerala'
    }
};
console.log(person1)

// Function

// function addnum(a,b){
//     var sum=a+b;
//     // console.log(`sum of 2 numbers is ${sum}`);
//     return sum;
// }
// // addnum(5,10);
// var result=addnum(44,66);
// console.log(`sum of 2 numbers is ${result}`);

// function multiplynum(x,y){
//     var mul=x*y;
//     return mul;
// }
// var result1=multiplynum(33,77);
// console.log(`value is ${result1}`);

let addnum=(a,b)=>{
    return a+b;
}
let result=addnum(33,66);
console.log(`value is ${result}`);

// objects methods

let person2={
    firstName:'Rohan',
    lastName:"RR",
    fullName:()=>{
        return person2.firstName + " " + person2.lastName;
    }
}
console.log(person2.fullName());

// Array ES6 method foreach----result are in boolean

let numbers=[1,2,3,4,5,6,7];
numbers.forEach((item,ind,arr3)=>{
    arr3[ind]=item>2;
})
console.log(numbers);

// filter function

let ages=[12,4,66,88,89];
let adult=ages.filter(age=>{
    return age>=18;
})
console.log(adult);

// Array Destructuring

let [x,y,z,]=[,,30];
console.log(x);
console.log(y);
console.log(z);

// Array Spread operator

let arr1=[1,23,4];
let [a,b]=[...arr1,20];
// let arr2=[...arr1,40];
// let arr3=[...arr1,...arr2];
console.log(a,b);
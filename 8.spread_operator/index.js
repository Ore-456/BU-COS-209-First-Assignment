//defining two arrays
let class1 = ["Vivian", "Chieto", "Latifah"];
let class2 = ["Joshua", "Seun", "Emmanuel"];

//merging the arrays using the spread operator
let merged = [...class1, ...class2];
//printing out the merged arrays
console.log(merged);

//copying an array into another using the spread operator
let class1copy = [...class1];
console.log(class1copy);

//defining a function
function concatenate(a, b, c){
    return a + b + c;
}
//using spread operator to pass an argument into the function
console.log(concatenate(...class1));

//defining two objects
let student1 = {name: "Vivian", age: 16, school: "Babcock"};
let classinfo = {course: "Software Engineering", CGPA: 4.98};
//merging the two objects
let totalinfo = {...student1, ...classinfo};
console.log(totalinfo);

//declaring an array
let ages = [16, 17, 18, 19];
//destructuring the array
let [a, b, c, d] = ages;
//printing out each element
console.log(a, b, c, d);

//defining an object
let student = {
    name: "Vivian",
    age: 16,
    school: "Babcock"
};
//destructuring the object
let{name, age, school} = student;
//printing it out
console.log(name, age, school);
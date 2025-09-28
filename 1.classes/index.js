//defining a class called Vivian
class Vivian {
    constructor(age, school){
        this.age = age;
        this.school = school;
    }
    //Defining a method(function) that Vivian uses to introduce herself
    introduction(){
        console.log(`My name is Vivian. I am ${this.age} years old and I go to ${this.school} University.`);
    }
}

//Creating an object(instance) of Vivian
const viv = new Vivian(18, "Babcock");

//using the method so that Vivian can introduce herself
viv.introduction();
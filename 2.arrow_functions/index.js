//program to calculate area of a circle
let r = prompt("What is the radius of the circle?");
//defining a normal function to calculate area of a circle
function circlearea (rad){
    return 3.14*rad*rad;
}
//redefining the function as an arrow function
const area_of_circle = (radius) => 3.14*radius*radius;

//printing the area of the circle on the page
document.write("The area of the circle with radius ", r, " is ", area_of_circle(r));
//printing the area of the circle in the console
console.log("The area of the circle with radius", r, "is", area_of_circle(r));

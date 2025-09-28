//declaring the array to be worked on
let names = ["Vivian", "Ifunanya", "Chisom", "Chigoziri", "Dominic"];

//performing different methods on the array
//using the push method to add an element
names.push("Nancy");
//printing out the updated array
console.log(names);

//using the pop method to remove the late element in the array
names.pop();
//printing out the updated array
console.log(names);

//using the forEach method to print out the elements of the array individually
names.forEach(function(name){
    console.log(name);
})

//sorting the array alphabetically
names.sort();
//printing out the sorted array
console.log(names);
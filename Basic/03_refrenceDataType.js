//Refrence Data Type
// 1. Object
let person = {
    name: "Golu",
    age: 30,
    city: "New York"
}
console.log(person.name); // Output: Golu
console.log(person.age); // Output: 30
console.log(person.city); // Output: New York
console.log(person); // Output: { name: 'Golu', age: 30, city: 'New York' }
console.log(typeof person); // Output: object



// 2. Array
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana
console.log(fruits[2]); // Output: Mango
console.log(fruits); // Output: [ 'Apple', 'Banana', 'Mango' ]
console.log(typeof fruits); // Output: object

// 3. Function
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Aprajita")); // Output: Hello, Aprajita!
console.log(typeof greet); // Output: function

// Alert is not working in Node
// alert("Hello, Aprajita "); // Output: Hello, Aprajita!
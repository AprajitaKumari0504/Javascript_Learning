let name = "Aprajita";
console.log(name); // Output: Aprajita
console.log(typeof name); // Output: string

let age = 25;
console.log(age); // Output: 25
console.log(typeof age); // Output: number

//boolean
let isStudent = true;
console.log(isStudent); // Output: true
console.log(typeof isStudent); // Output: boolean

//null
let address = null;
console.log(address); // Output: null
console.log(typeof address); // Output: object (this is a known quirk in JavaScript)

//undefined
let phoneNumber;
console.log(phoneNumber); // Output: undefined
console.log(typeof phoneNumber); // Output: undefined

//symbol
let uniqueId = Symbol("id");
console.log(uniqueId); // Output: Symbol(id)
console.log(typeof uniqueId); // Output: symbol

//bigint
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber); // Output: 1234567890123456789012345678901234567890n
console.log(typeof bigNumber); // Output: bigint

//object
let person = {
    name: "Aprajita",
    age: 25
};
console.log(person); // Output: { name: 'Aprajita', age: 25 }
console.log(typeof person); // Output: object   

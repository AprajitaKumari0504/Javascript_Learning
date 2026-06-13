//Lexical Scope
function outer() {
  let name = "Aprajita Kumari";
  function inner() {
    console.log(name);
  }
  inner();
// console.log(name);
}
outer();

//Closure
function greet(name) {
  return function () {
    console.log(`Hello, ${name}`);
  };
}
const greetAprajita = greet("Aprajita");
greetAprajita(); 
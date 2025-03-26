
// 'var' keyword 

//1-->it has no  block scope (Can be accessed outside a block)
//2--> can be redeclared and upadated 
//3--> can be reassined

// 'let' keyword 

//1--> it has block level scope;
//2--> cannot be redeclared but can be updated
//3--> can be reassined

// 'const' keyword

//1--> it has also block level scope
//2--> cannot be redeclared and cannot be updated;
//3--> cannot be reassined

// var
var x = 10;
x = 20; // Allowed
var x = 30; // Allowed

// let
let y = 10;
y = 20; // Allowed
// let y = 30; // Error: 'y' has already been declared

// const
const z = 10;
// z = 20; // Error: Assignment to constant variable
// const z = 30; // Error: 'z' has already been declared

// Block scope example
{
  var a = 1;  // Accessible outside the block
  let b = 2;  // Block-scoped
  const c = 3; // Block-scoped
}
console.log(a); // 1
// console.log(b); // Error: b is not defined
// console.log(c); // Error: c is not defined




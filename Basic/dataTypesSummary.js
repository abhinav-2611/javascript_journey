/*
Return type of variables in JavaScript (typeOf)
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

 */

//point to remember 

/* 1--> javascript is dynamically typed language as we don't need to declare the type of variable explicitly , the type of varialble 
 is decided at the run time based on the value assingned to it 
 
 2--> console.log(NaN===NaN); // False  :NaN is the only value in JavaScript that's not equal to itself 
 */


 /*
  🔹 What is Symbol in JavaScript?
  
A Symbol is a primitive data type introduced in ES6 (ECMAScript 2015).
It represents a unique and immutable value.
Symbols are often used to create unique property keys for objects, which helps avoid property name conflicts.

🔹 How to create a Symbol?

let sym1 = Symbol();               // A unique symbol
let sym2 = Symbol("description"); // Symbol with optional description


Even if two symbols have the same description, they are still different:
let a = Symbol("id");
let b = Symbol("id");
console.log(a === b); // false

🔹 Why use Symbols?
Symbols are mainly used to:

- Avoid naming conflicts in objects (especially when adding properties to objects you don’t own)

- Define "hidden" properties that won’t show up in normal loops like for...in or Object.keys()

🔹 Using Symbols as Object Keys

let user = {
  name: "Abhinav"
};

let id = Symbol("id");
user[id] = 123;

console.log(user);         // { name: "Abhinav", [Symbol(id)]: 123 }
console.log(user[id]);     // 123

Note: Symbol keys don’t show up in:

for...in loop
Object.keys()
JSON.stringify()

But they can be accessed with:
Object.getOwnPropertySymbols(user);


🔹 Global Symbols (via Symbol.for)

let globalSym = Symbol.for("globalId");
let sameSym = Symbol.for("globalId");

console.log(globalSym === sameSym); // true
Symbol.for() checks a global symbol registry to reuse symbols by key.

You can get the key back using Symbol.keyFor().


 */ 
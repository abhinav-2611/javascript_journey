// nullish coalescing operator(??)

//  syntax : let result = value1 ?? value2;

/*
  The nullish coalescing operator (??) in JavaScript is used to provide a default value when dealing with null or undefined. 
  It is a logical operator that returns the right-hand operand when the left-hand operand is null or undefined; otherwise, 
  it returns the left-hand operand. 
  
  How It Works:

 If value1 is not nullish (not null or undefined), result is value1.
 If value1 is nullish, result is value2.

*/

//example 

let deposit =  null ?? 200;
console.log(deposit); // output: 200 

const userInput = null;
const defaultValue = "Default";
const finalValue = userInput ?? defaultValue;
console.log(finalValue); // Output: "Default"

/* The || operator returns the second operand if the first is falsy , whereas ?? only checks for null or undefined.*/

let count = 0;

// Using ||
console.log(count || 10); // Output: 10 (because 0 is falsy)

// Using ??
console.log(count ?? 10); // Output: 0 (because 0 is not nullish)

//Precautions:

//Avoid using ?? with operators like && or || without parentheses, as it can cause syntax errors due to operator precedence.

// This will throw an error
let value1=10;
let value2=20;
let defaultVal=50;
 // let result = value1 ?? value2 || defaultVal; // This will throw an error

// Correct usage with parentheses
   let result = (value1 ?? value2) || defaultVal;


//________________________________________________________________________________________________________________________________
   
//Additional

let values = [false, 0, "", null, undefined, NaN, true, 42, "hello", [], {}];

values.forEach(value => {
  console.log(`${value} is ${Boolean(value) ? "truthy" : "falsy"}`);
});

// Output:
// false is falsy
// 0 is falsy
//  is falsy
// null is falsy
// undefined is falsy
// NaN is falsy
// true is truthy
// 42 is truthy
// hello is truthy
// [object Object] is truthy
// [object Object] is truthy





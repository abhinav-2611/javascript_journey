
//ways to declare Arrays

const myName= ["a","b","h","i","n","a","v"]
//  OR 
const mySurname= Array("s","r","i","v","a","s","t","a","v")

console.log(mySurname); 

//++++++++ methods we can use with the  Arrays +++++++++ 

//1--> slice()

const originalArray = [1, 2, { a: 10, b: 20 }];
const shallowCopy = originalArray.slice(1,3);

console.log(shallowCopy); // [ 2, { a: 10, b: 20 }]

// Modifying the object in the copied array
shallowCopy[1].a = 99;

// Reflects in the original array as well
console.log(originalArray); // [1, 2, { a: 99, b: 20 }] 


// edge cases of slice() method

// 1--> Negative Indices Larger than Length
// If the negative start or end index is less than the negative length of the array or string, they are treated as 0.


const arr = [1, 2, 3, 4];
console.log(arr.slice(-10)); // [1, 2, 3, 4] (treated as slice(0))
console.log(arr.slice(-10, -6)); // [] (start=0, end=0) 
// -------------------------------------------------------------------------------------------------------------------------------
// 2--> start Greater than end
// If the start index is greater than the end index, the result is an empty array or string.


const arr1 = [1, 2, 3, 4];
console.log(arr1.slice(3, 1)); // [] (nothing is extracted)
console.log("hello".slice(4, 2)); // "" (empty string)
// -----------------------------------------------------------------------------------------------------------------------------------
// 3--> start or end Out of Bounds
// If the start index is greater than or equal to the length of the array or string, or if the end index is greater than the length,
//  the method adjusts appropriately.


const arr2= [1, 2, 3, 4];
console.log(arr2.slice(5)); // [] (start >= array length)
console.log(arr2.slice(2, 10)); // [3, 4] (end adjusted to array length)
console.log("hello".slice(10)); // "" (out of bounds for strings)
// -------------------------------------------------------------------------------------------------------------------------------------
// 4. Omitting end
// If the end parameter is omitted, it defaults to the length of the array or string.


const arr3 = [1, 2, 3, 4];
console.log(arr3.slice(2)); // [3, 4] (extracts from index 2 to the end)

const str = "hello";
console.log(str.slice(2)); // "llo" (same for strings)
// --------------------------------------------------------------------------------------------------------------------------------------
// 5--> Array with Holes (Sparse Arrays)

// For sparse arrays, slice() includes undefined for any "holes" in the array.

const arr4 = [1, , 3, 4]; // Sparse array with a hole at index 1
console.log(arr.slice(0, 3)); // [1, undefined, 3]
// -------------------------------------------------------------------------------------------------------------------------------------
// 6--> Non-Array-Like Objects
// If slice() is called on objects that resemble arrays (like objects with a length property), it tries to extract based on indices.

const obj = { 0: "a", 1: "b", length: 2 };
console.log(Array.prototype.slice.call(obj, 0, 2)); // ["a", "b"]
// --------------------------------------------------------------------------------------------------------------------------------------
// 7--> Immutable Original Data
// The slice() method does not modify the original array or string, even when parameters are invalid or out of bounds.


const arr5 = [1, 2, 3];
arr5.slice(1, 2);
console.log(arr5); // [1, 2, 3] (unchanged)
// ----------------------------------------------------------------------------------------------------------------------------------------
// 8--> Empty Array or String
// For empty arrays or strings, slice() always returns an empty result, regardless of the arguments.


console.log([].slice(0, 5)); // []
console.log("".slice(1, 2)); // ""
// ---------------------------------------------------------------------------------------------------------------------------------------
// 9. Non-Numeric start or end Values
// If start or end is non-numeric, it is coerced into a number. NaN is treated as 0.


const arr6 = [1, 2, 3, 4];
console.log(arr.slice("1", "3")); // [2, 3] (coerced to numbers)
console.log(arr.slice("foo", "bar")); // [1, 2, 3, 4] (treated as slice(0, 0))
// These edge cases highlight the importance of understanding how slice() handles invalid, omitted, or unexpected input to avoid unintended results. Let me know if you'd like further clarification!

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 2--> splice()
// Purpose: Used to add, remove, or replace elements in an array.

// Modifies the Original Array? Yes, it modifies the original array.

// Returns: A new array containing the removed elements.

//Syntax:
//array.splice(start, deleteCount, item1, item2, ...);

//start: The index at which to start modifying the array.
//deleteCount: The number of elements to remove (optional, defaults to 0 if not specified).
//item1, item2, ...: Elements to add to the array starting at the start index (optional).

//Examples:

//__Removing elements:

// let arr = [1, 2, 3, 4, 5];
// let removed = arr.splice(2, 2); // Removes 2 elements starting from index 2
// console.log(arr);      // [1, 2, 5] (original array modified)
// console.log(removed);  // [3, 4] (removed elements)

//__Adding elements:

// let arr = [1, 2, 3];
// arr.splice(1, 0, "a", "b"); // Adds "a", "b" at index 1
// console.log(arr); // [1, "a", "b", 2, 3]

//__Replacing elements:

// let arr = [1, 2, 3, 4];
// arr.splice(1, 2, "x", "y"); // Replaces 2 elements starting at index 1 with "x", "y"
// console.log(arr); // [1, "x", "y", 4]
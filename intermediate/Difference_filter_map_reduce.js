// Difference between filter(), map(), and reduce() in JavaScript
/*
| Feature                  | filter()                                        | map()                                            | reduce()                                         |
|--------------------------|-------------------------------------------------|--------------------------------------------------|--------------------------------------------------|
| Purpose                  | Creates a new array with elements that pass a   | Creates a new array by transforming each         | Reduces the array to a single value by applying  |
|                          | test (condition).                               | element of the original array.                   | a callback function.                             |
| Use Case                 | Filtering elements based on a condition.        | Transforming or mapping array elements to        | Aggregating or accumulating data (e.g., summing, |
|                          |                                                 | a new value.                                     | concatenating, etc.).                            |
| Return Value             | A new array containing only the elements that   | A new array with the transformed elements.       | A single value (number, string, object, etc.).   |
|                          | satisfy the condition.                          |                                                  |                                                  |
| Callback Function        | Must return a boolean (`true` for inclusion,    | Must return a transformed value for each         | Must return the accumulated result.              |
|                          | `false` for exclusion).                         | element.                                         |                                                  |
| Original Array           | Does not modify the original array.             | Does not modify the original array.              | Does not modify the original array.              |
| Number of Outputs        | Output array length is ≤ input array length     | Output array length is the same as the           | Produces a single output value.                  |
|                          | (depending on condition).                       | input array.                                     |                                                  |
*/
// Examples

// 1. filter()
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((num)=> num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]

// 2. map()
const squares = numbers.map((num) => num * num);
console.log(squares); // Output: [1, 4, 9, 16, 25, 36]

// 3. reduce()
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 21

// Combining Methods
const result = numbers
  .filter(num => num % 2 === 0) // [2, 4, 6]
  .map(num => num * num)        // [4, 16, 36]
  .reduce((sum, num) => sum + num, 0); // 56
console.log(result); // Output: 56

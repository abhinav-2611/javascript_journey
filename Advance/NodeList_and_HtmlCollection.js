/*
====================================================
NodeList and HTMLCollection in JavaScript
====================================================
*/

// ------------------
// 1. NodeList
// ------------------
// Definition: A NodeList is a collection of nodes, including:
// - Element nodes
// - Text nodes
// - Comments

// Properties and Methods:
// - Access using an index: nodeList[0]
// - Has a `length` property
// - Can be live (e.g., childNodes) or static (e.g., querySelectorAll)

// How to Obtain:
// - `document.querySelectorAll()` (static)
// - `childNodes` (live)

// Iteration:
// - Can use `forEach`, `for...of`, or traditional `for` loops

// Example:
const nodes = document.querySelectorAll('div');
nodes.forEach(node => console.log(node));

// ------------------
// 2. HTMLCollection
// ------------------
// Definition: An HTMLCollection is a collection of Element nodes (HTML elements only).

// Properties and Methods:
// - Access using an index: htmlCollection[0]
// - Has a `length` property
// - Always live (updates automatically when DOM changes)

// How to Obtain:
// - `document.getElementsByTagName()`
// - `document.getElementsByClassName()`
// - `document.forms`, `document.images`

// Iteration:
// - Cannot use `forEach` directly
// - Use `for...of` or traditional `for` loops

// Example:
const elements = document.getElementsByTagName('div');
for (const element of elements) {
  console.log(element);
}

// ------------------
// 3. Key Differences Between NodeList and HTMLCollection
// ------------------
/*
| Feature          | NodeList                        | HTMLCollection                |
|------------------|---------------------------------|--------------------------------|
| Content          | Can contain any type of nodes  | Only contains Element nodes   |
| Live/Static      | Can be live or static          | Always live                   |
| Iteration        | Supports forEach (ES6+)        | No direct forEach support     |
| How to Obtain    | querySelectorAll, childNodes   | getElementsBy*, document.*    |
*/

// ------------------
// 4. HTMLCollection is Always Live
// ------------------
// HTMLCollection updates automatically when the DOM changes.
// Example:

/*<!DOCTYPE html>
<html>
<body>
  <div>First</div>
  <div>Second</div>
  <button onclick="addDiv()">Add Div</button>

  <script>
    const divs = document.getElementsByTagName('div');
    console.log('Initial Divs:', divs.length); // Outputs: 2

    function addDiv() {
      const newDiv = document.createElement('div');
      newDiv.textContent = 'New Div';
      document.body.appendChild(newDiv);

      console.log('Updated Divs:', divs.length); // Outputs: 3
    }
  </script>
</body>
</html>
*/

// ------------------
// 5. Differences Between HTMLCollection/NodeList and Arrays
// ------------------
/*
| Feature           | HTMLCollection/NodeList         | Array                             |
|-------------------|----------------------------------|-----------------------------------|
| Type              | Collection (not a true array)   | True array (Array object)         |
| Methods           | Limited (length, index access)  | Full array methods (map, filter)  |
| Convertibility    | Needs conversion to an array    | Already an array                  |
| Iterability       | Limited (for, for...of)         | Fully iterable (forEach, map)     |
| Live Updates      | HTMLCollection: Live            | Not live, fixed once created      |
*/

// ------------------
// 6. Converting HTMLCollection/NodeList to Arrays
// ------------------

// Using `Array.from()`
const divsFromArray = Array.from(document.querySelectorAll('div'));
divsFromArray.map(div => console.log(div.textContent));

// Using Spread Operator
const divsSpread = [...document.querySelectorAll('div')];
divsSpread.forEach(div => console.log(div.textContent));

// ------------------
// 7. Key Takeaway
// ------------------
// - NodeList and HTMLCollection are DOM-specific collections for accessing elements on a web page.
// - Arrays are general-purpose data structures with advanced methods like `map` and `filter`.
// - Convert NodeList or HTMLCollection to arrays when array features are needed.

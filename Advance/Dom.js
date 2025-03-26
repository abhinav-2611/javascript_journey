/*
 What is the DOM?
----------------

Definition: The DOM is a tree-like representation of a web document (HTML or XML) where each element is a node in the tree.

Purpose: It allows JavaScript to interact with the document to update content, modify styles, and respond to user events.

DOM Structure
-------------
Document: The root node representing the entire document.
Elements: HTML tags (e.g., <div>, <p>, <h1>) are element nodes.
Attributes: Properties of elements (e.g., id, class).
Text: Content inside the elements.
Comments: Nodes representing comments in the document. 


  Example HTML:
  ------------
  <html>
    <body>
      <h1>Hello, DOM!</h1>
      <p>This is a paragraph.</p>
    </body>
  </html>

  DOM Tree Representation:
  -----------------------
  Document
  └── html
      ├── head
      └── body
          ├── h1
          │   └── "Hello, DOM!"
          └── p
              └── "This is a paragraph."



   /*
  Use Cases of DOM Manipulation
  -----------------------------
  1. Dynamic Content Updates:
     Update text, images, or styles on the webpage without reloading it, e.g., displaying new data after an API call.

  2. Form Validation:
     Validate user inputs (e.g., checking email format) and provide instant feedback like error messages or highlights.

  3. Interactive Features:
     Implement dynamic UI components like dropdown menus, modals, sliders, or tabs for better user experience.

  4. Responsive UI Adjustments:
     Dynamically adjust layout or styles based on screen size, orientation, or user interactions.
*/

  
/*
  Core DOM Methods
  ----------------
*/

// Accessing Elements
let elementById = document.getElementById('myId');
let elementsByClass = document.getElementsByClassName('myClass');
let elementsByTag = document.getElementsByTagName('p');
let singleElement = document.querySelector('.myClass'); // First matching element
let allElements = document.querySelectorAll('div');     // All matching elements

// Manipulating Content
elementById.innerHTML = '<strong>Updated!</strong>';
elementById.textContent = 'Updated text';

// Modifying Attributes
elementById.setAttribute('class', 'newClass');
let classValue = elementById.getAttribute('class'); 
elementById.removeAttribute('class');

// Styling Elements
elementById.style.color = 'red';
elementById.style.fontSize = '20px';

/*
  DOM Events
  ----------
*/

// Adding Event Listeners
elementById.addEventListener('click', function () {
  alert('Element clicked!');
});

// Removing Event Listeners
function sayHello() {
  console.log('Hello!');
}
elementById.addEventListener('click', sayHello);
elementById.removeEventListener('click', sayHello);

/*
  Creating and Modifying Nodes
  ----------------------------
*/

// Create New Elements
let newDiv = document.createElement('div');
newDiv.textContent = 'I am a new div!';
document.body.appendChild(newDiv);

// Remove Elements
let elementToRemove = document.getElementById('myId');
elementToRemove.remove();

// Append Child
parentElement.appendChild(newChild);

// Insert Before
parentElement.insertBefore(newChild, referenceChild);

/*
  Traversing the DOM
  ------------------
*/

let parent = elementById.parentNode;
let children = elementById.childNodes;
let firstChild = elementById.firstChild;
let lastChild = elementById.lastChild;
let nextSibling = elementById.nextSibling;
let previousSibling = elementById.previousSibling;

/*
  Best Practices
  --------------
  1. Minimize DOM Access: Store references to frequently accessed elements.
  2. Use `querySelector` and `querySelectorAll` for flexibility.
  3. Leverage Event Delegation for better performance.
  4. Clean up unused nodes and event listeners to optimize memory usage.
*/


 


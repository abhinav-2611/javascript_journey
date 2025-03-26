// ================================
// Normal Function vs Arrow Function in JavaScript
// ================================

// 1. Syntax

// Normal Function
function greet() {
    console.log("Hello, World!");
  }
  greet();
  
  // Arrow Function
  const greet = () => {
    console.log("Hello, World!");
  };
  greet();
  
  // - Arrow functions use => (arrow syntax) instead of function keyword.
  // - For single-line functions, you can omit the braces {} and return for implicit returns.
  const add = (a, b) => a + b;
  console.log(add(2, 3)); // Output: 5
  
  
  // 2. `this` Keyword Behavior
  
  // Normal Function
  const obj = {
    value: 10,
    showValue: function () {
      console.log(this.value); // Output: 10
    },
  };
  obj.showValue();
  
  // Arrow Function
  const obj2 = {
    value: 10,
    showValue: () => {
      console.log(this.value); // Output: undefined (lexical `this`)
    },
  };
  obj2.showValue();
  
  
  // 3. `arguments` Object
  
  // Normal Function
  function showArgs() {
    console.log(arguments); // Output: [1, 2, 3]
  }
  showArgs(1, 2, 3);
  
  // Arrow Function
  const showArgsArrow = (...args) => {
    console.log(args); // Output: [1, 2, 3]
  };
  showArgsArrow(1, 2, 3);
  
  
  // 4. Constructors
  
  // Normal Function (can be used as a constructor)
  function Person(name) {
    this.name = name;
  }
  const person1 = new Person("Abhinav");
  console.log(person1.name); // Output: Abhinav
  
  // Arrow Function (cannot be used as a constructor)
  const PersonArrow = (name) => {
    this.name = name;
  };
  // const person2 = new PersonArrow("Abhinav"); // TypeError: PersonArrow is not a constructor
  
  
  // 5. Implicit Return
  
  // Normal Function
  function add(a, b) {
    return a + b;
  }
  
  // Arrow Function
  // Implicit return for single-line functions
  const addArrow = (a, b) => a + b;
  console.log(addArrow(2, 3)); // Output: 5
  
  // For multi-line functions, still need `return`
  const addArrowMultiLine = (a, b) => {
    return a + b;
  };
  
  
  // 6. Hoisting
  
  // Normal Function (hoisted)
  sayHello();
  
  function sayHello() {
    console.log("Hello!");
  }
  
  // Arrow Function (not hoisted)
  sayHelloArrow(); // Error: Cannot access 'sayHelloArrow' before initialization
  
  const sayHelloArrow = () => {
    console.log("Hello!");
  };
  
  
  // ================================
  // Summary of Key Differences
  // ================================
  
  // Feature                 | Normal Function           | Arrow Function
  // ----------------------- | ------------------------- | -----------------------------
  // Syntax                  | Uses function keyword     | Uses => (arrow syntax)
  // `this` Binding          | Dynamic (depends on caller)| Lexical (inherits from scope)
  // `arguments` Object      | Available                 | Not available
  // Constructor Support     | Can be used as constructor| Cannot be used as a constructor
  // Hoisting                | Hoisted                   | Not hoisted
  // Implicit Return         | Needs return keyword      | Optional for single-line return
  
  
  // ================================
  // When to Use Which?
  // ================================
  
  // Use Arrow Functions for:
  // - Concise, short functions
  // - No need for `this` binding
  
  // Use Normal Functions for:
  // - Dynamic `this` binding
  // - Access to `arguments` object
  // - Function hoisting or constructor functionality
  
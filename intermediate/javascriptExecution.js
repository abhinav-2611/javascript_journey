//  https://chatgpt.com/share/6750afad-2ee0-8012-a741-afdd68b54a74
//  https://chatgpt.com/share/6750afe7-0ed0-8012-a538-02a41018fb03

/*JavaScript Code Execution: Memory Allocation and Execution Phases


JavaScript code execution is divided into two main phases:
1. Memory Allocation Phase (also known as the Creation Phase).
2. Execution Phase.

The Call Stack plays a critical role in managing the execution of functions.

___________PHASE 1: Memory Allocation Phase (Creation Phase)_____________________________________

This is the first phase, where the JavaScript engine allocates memory for variables, functions, and objects. It prepares the environment for code execution.
What Happens in the Memory Allocation Phase?

1. Global Execution Context (GEC) Creation:
- JavaScript starts by creating the Global Execution Context.
- This contains:
  - A reference to the global object (window in browsers, global in Node.js).
  - A special reference this, which points to the global object in this context.

2. Hoisting:
- Function Declarations:
  - Entire functions (not just their names) are hoisted to the top of their scope.
  - These functions are fully initialized and can be called before they appear in the code.
- Variable Declarations:
  - Variables declared using var are hoisted to the top of their scope but initialized with undefined.

  // hoisting 
                 console.log(ab);  // output :undefined
                  var ab =5;
                 console.log(ab)  // output : 5

  - Variables declared using let and const are hoisted but remain uninitialized until the code execution reaches them, causing the Temporal Dead Zone if accessed earlier.

Example: Memory Allocation Phase

console.log(a); // undefined
var a = 10;
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
function myFunction() {
  console.log('Inside function');
}

Memory Allocation:
- a is hoisted and initialized with undefined.
- b is hoisted but remains uninitialized (in the Temporal Dead Zone).
- myFunction is hoisted and fully defined.

___________________________PHASE 2: Execution Phase________________________________________________

This is the second phase, where JavaScript executes the code line by line.
What Happens in the Execution Phase?

1. Code Execution:
- The JavaScript engine starts executing the code from the top, line by line, using the allocated memory.

2. Variable Initialization:
- During this phase, variables that were hoisted in the Memory Allocation Phase get their assigned values.

3. Function Calls and Execution Context:
- When a function is called, a new Function Execution Context (FEC) is created and pushed onto the Call Stack.
- This new execution context contains:
  - Local Variables: Variables declared inside the function.
  - Parameters: Values passed to the function.
  - this: The this keyword for the function.

4. Call Stack Management:
- Functions are executed in the order they are called.
- When a function is invoked, its execution context is pushed onto the Call Stack.
- When the function finishes, its execution context is popped off the stack, and execution resumes from the previous context.

 ___CALL STACK___

The Call Stack is a stack data structure that tracks the execution of functions. It follows the Last In, First Out (LIFO) principle.
How the Call Stack Works:
1. When the program starts, the Global Execution Context is pushed onto the stack.
2. When a function is called, a new Function Execution Context is created and pushed onto the stack.
3. Once the function completes, its context is popped off the stack, and execution resumes from the previous context.
4. The program ends when the stack is empty.
 */


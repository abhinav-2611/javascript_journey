/* 
========================================
📚 ASYNCHRONOUS JAVASCRIPT NOTES
========================================
*/

/* 
🎯 1. What is Asynchronous JavaScript?
----------------------------------------
- In JavaScript, asynchronous means that certain tasks can run in the background without stopping the rest of the code.

👉 Synchronous:
- JavaScript normally runs line by line (one after another).
- It waits for one task to finish before starting the next.

👉 Asynchronous:
- JavaScript can perform long tasks (like API calls or file reading) without waiting for them to finish.
- Other code continues to run while those tasks finish in the background.
*/


/* 
📚 2. Why is Asynchronous Important?
----------------------------------------
👉 Imagine you’re ordering pizza online:
- Synchronous: You order the pizza and wait at the door until it arrives. You can’t do anything else.
- Asynchronous: You order the pizza, go back to watching TV, and when the pizza arrives, you get a notification. 🍕📱

✅ Asynchronous JavaScript works like that—letting other tasks run while waiting for a response.
*/


/* 
🎯 3. Understanding How JavaScript Works (Synchronous by Default)
-------------------------------------------------------------------
- JavaScript is single-threaded and synchronous by default.
👉 This means it can handle one task at a time in the order they appear.

📝 Example:
console.log("Start");
console.log("Processing...");
console.log("End");

👉 Output:
Start
Processing...
End

✅ The code runs from top to bottom—line by line.
*/


/* 
🎯 4. What Happens When There’s a Time-Consuming Task?
-------------------------------------------------------
- If you introduce a task that takes time (like fetching data from an API), it would block the rest of the code.

📝 Example:
console.log("Start");

// Simulating a time-consuming task
for (let i = 0; i < 1000000000; i++) {
  // Time-consuming task
}

console.log("End");

👉 Problem:
- The for loop blocks the entire page until it’s done. 😢
- This means the user can’t interact with the page during this time.

✅ To fix this, JavaScript uses asynchronous programming.
*/


/* 
🎯 5. What is Asynchronous JavaScript?
----------------------------------------
- Asynchronous JavaScript allows certain tasks to run in the background without blocking the main thread.
✅ While JavaScript continues to execute other code, asynchronous tasks (like API requests, timers, or file reading) run in the background.
*/


/* 
🎯 6. Event Loop: The Heart of Asynchronous JavaScript
--------------------------------------------------------
✅ Main Components:
1. Call Stack:
   - Holds the functions that are currently being executed.
   - Executes functions in a LIFO (Last In, First Out) order.

2. Web APIs:
   - Handles asynchronous tasks like:
     - setTimeout()
     - fetch()
     - DOM events
   - These APIs run in the background.

3. Callback Queue (Task Queue):
   - Stores the callbacks waiting to be executed.
   - Once the call stack is empty, the event loop moves tasks from the queue to the call stack.

4. Event Loop:
   - Continuously checks if the call stack is empty.
   - If the call stack is empty, it moves tasks from the callback queue to the call stack for execution.
*/


/* 
🎯 7. How Does It Work Together? (Step-by-Step)
------------------------------------------------
📝 Example:
console.log("Start");

setTimeout(() => {
  console.log("Callback executed!");
}, 2000);

console.log("End");

👉 Step-by-step Execution:
1. console.log("Start"); → Added to call stack → Executes immediately.
2. setTimeout() → Passed to Web APIs → Timer starts counting (2 seconds).
3. console.log("End"); → Added to call stack → Executes immediately.
4. After 2 seconds, the callback (console.log("Callback executed!")) moves to the callback queue.
5. Event Loop checks if the call stack is empty.
6. The callback is moved from the queue to the call stack and executed.

https://chatgpt.com/share/67e0fee0-cd50-8012-bab3-7b76a68474c0

👉 Output:
Start
End
Callback executed!
*/


/* 
🎯 8. Visualizing the Process
------------------------------
✅ Process Overview:
1. Call Stack:
   - console.log("Start")
   - console.log("End")

2. Web APIs:
   - setTimeout() → Timer starts (2 seconds)

3. Callback Queue:
   - After 2 seconds → Callback is added to queue

4. Event Loop:
   - Checks if Call Stack is empty
   - Moves callback to Call Stack
*/


/* 
🎯 9. Different Types of Asynchronous Tasks
---------------------------------------------
✅ JavaScript performs different types of asynchronous tasks using Web APIs:
1. ⏰ setTimeout() and setInterval() – Delay execution.
2. 🌐 fetch() – Makes HTTP requests.
3. 📡 XMLHttpRequest (XHR) – Old method for AJAX requests.
4. 🎭 DOM events – Handles user actions like clicks, typing, etc.
*/


/* 
🎯 10. TL;DR: Summary of Asynchronous JavaScript
-------------------------------------------------
✅ JavaScript is synchronous but can handle asynchronous tasks.
✅ The Event Loop ensures that tasks are executed in the correct order.
✅ Use asynchronous techniques like:
   - Callbacks
   - Promises
   - Async/Await
✅ Allows tasks to run in the background without blocking the main thread.
*/

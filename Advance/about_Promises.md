# To Understand promises first we have to understand Callback hell 
 call back hell is the situation where we use nested callbacks to execute our asynchronous code , nested callbacks make code look so messy
 and confusing

## Example of callbacks hell

 console.log("Start");

// Simulating a user login
setTimeout(function loginUser() {
    console.log("User logged in");

    // Fetching user data
    setTimeout(function getUserData() {
        console.log("Fetching user data...");

        // Getting user orders
        setTimeout(function getUserOrders() {
            console.log("Fetching user orders...");

            // Processing order details
            setTimeout(function processOrder() {
                console.log("Processing order...");
                console.log("Order processed successfully!");
            }, 1000);

        }, 1000);

    }, 1000);

}, 1000);

console.log("End");

*  setTimeout() is used to simulate asynchronous operations.

* Each task depends on the completion of the previous task, which leads to nested callbacks.

* This nesting of functions is called callback hell or Pyramid of Doom, making the code harder to read and maintain.

=> To avoid this, we can use Promises or async/await, which makes the code cleaner and more readable. Want me to show the improved version? 😊
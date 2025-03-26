// ===========================
// 📚 Async and Await in JavaScript
// ===========================

// ✅ What is async and await?
// - async makes a function return a Promise.
// - await pauses the execution of the function until the promise is resolved.

// ===========================
// 🕐 Why do we need async/await?
// ===========================
// - Solves callback hell and makes promises easier to handle.
// - Makes asynchronous code look synchronous and clean.

// ===========================
// ⚡️ How async Works
// ===========================
async function fetchData() {
    return "Data fetched successfully!";
}
console.log(fetchData()); // Returns a Promise

// Accessing the result
fetchData().then((data) => console.log(data));

// ===========================
// ⏳ How await Works
// ===========================
async function fetchDataWithDelay() {
    let data = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data fetched successfully!"), 2000);
    });

    let result = await data; // Wait for the promise to resolve
    console.log(result); // Logs after 2 seconds
}
fetchDataWithDelay();

// ===========================
// 🎯 Real-life Example: Fetching User Data
// ===========================

// Simulating API call to fetch user data
function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ userId: 1, name: "Abhinav Srivastava" });
        }, 1000);
    });
}

// Simulating another API call to get user orders
function getUserOrders(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["Order1", "Order2", "Order3"]);
        }, 1500);
    });
}

// Using async/await to handle promises
async function displayUserInfo() {
    try {
        let user = await getUserData();
        console.log("User data:", user);

        let orders = await getUserOrders(user.userId);
        console.log("User orders:", orders);
    } catch (error) {
        console.log("Error:", error);
    }
}
displayUserInfo();

// ===========================
// 💡 Key Points to Remember
// ===========================
// 1. async always returns a promise.
async function getValue() {
    return 42;
}
getValue().then(console.log); // 42

// 2. await waits for the promise to resolve or reject.
async function demo() {
    let value = await Promise.resolve("Hello");
    console.log(value); // Hello
}
demo();

// 3. Error handling with try...catch
async function fetchAPIData() {
    try {
        let response = await fetch("https://api.example.com/data");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}
fetchAPIData();

// ===========================
// ⚠️ Handling Multiple Promises Using await
// ===========================
async function getDetails() {
    let userPromise = getUserData();
    let orderPromise = getUserOrders(1);

    let [user, orders] = await Promise.all([userPromise, orderPromise]);
    console.log("User:", user);
    console.log("Orders:", orders);
}
getDetails();

// ===========================
// 🚨 Common Mistakes to Avoid
// ===========================
// ❌ Using await outside an async function
// let data = await getUserData(); // ❌ This will throw an error

// ❌ Forgetting try...catch to handle errors
async function fetchDataWithError() {
    let data = await fetch("invalid-url"); // May throw an error
    console.log(data);
}

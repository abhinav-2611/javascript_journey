/* 🚀 JavaScript fetch() – Complete Guide */

// The fetch() function in JavaScript is used to make HTTP requests and handle responses.
// It is part of the modern Fetch API, which provides a cleaner and easier way to make network requests.

// 📚 Basic Syntax
fetch(url, options)
  .then(response => {
    // Handle the response
  })
  .catch(error => {
    // Handle errors
  });

/* 🔥 Step-by-Step Explanation
1. 🎯 fetch(url) – Basic Request
   - url – The URL you want to request.
   - options (optional) – An object that configures the request (like method, headers, etc.).

2. 📩 Handling the Response
   - fetch() returns a Promise that resolves to a Response object.
   - The Response object provides methods like:
     - response.json() – Parses the response body as JSON.
     - response.text() – Parses as plain text.
     - response.blob() – Returns raw binary data.
*/

// 🎯 Basic Example: GET Request
fetch('https://api.github.com/users/abhinav-2611')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse response as JSON
  })
  .then(data => {
    console.log('User Data:', data); // Handle the JSON data
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });

// ✅ Explanation:
// - fetch() makes a GET request to the given URL.
// - response.json() converts the response to a JavaScript object.
// - data contains the JSON data, which is logged in the console.
// - Errors are caught and logged with .catch().

/* 🔥 Making a POST Request
   To send data to a server, use the POST method with fetch():
*/
fetch('https://api.example.com/data', {
  method: 'POST', // Specify the HTTP method
  headers: {
    'Content-Type': 'application/json', // Specify JSON data
  },
  body: JSON.stringify({
    name: 'Abhinav',
    role: 'Developer',
  }),
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to send data');
    }
    return response.json();
  })
  .then(data => {
    console.log('Data saved:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// ✅ Explanation:
// - method – Specifies the HTTP method (POST).
// - headers – Defines the content type as JSON.
// - body – Converts JavaScript data to a JSON string using JSON.stringify().

/* ⚡️ Handling Different Response Types */
fetch('https://api.example.com/data')
  .then(response => response.text()) // Get data as text
  .then(text => console.log(text));

fetch('https://api.example.com/image')
  .then(response => response.blob()) // Get binary data (image)
  .then(blob => console.log(blob));

/* 🎉 Using async/await for Cleaner Code */
async function getUserData() {
  try {
    const response = await fetch('https://api.github.com/users/abhinav-2611');
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    const data = await response.json(); // Convert response to JSON
    console.log('User Data:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

getUserData();

/* ⚡️ Handling Errors Correctly
   fetch() only rejects when:
   - There’s a network error.
   - The request is blocked by CORS policy.
   Otherwise, even 4xx and 5xx status codes don’t reject the promise.
*/
fetch('https://api.github.com/users/invalid-user')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

  // 🚀 Understanding if (!response.ok) in fetch()
// In JavaScript, when you make an HTTP request using fetch(), 
// it returns a Response object. This object contains various properties, 
// one of which is:

// ✅ response.ok Property
// response.ok is a Boolean value (true or false).
// It indicates whether the HTTP request was successful or not.

// It returns:
// true – If the HTTP status code is between 200 and 299 (indicating success).
// false – For any other status codes, including:
// 400 – Bad Request
// 401 – Unauthorized
// 403 – Forbidden
// 404 – Not Found
// 500 – Internal Server Error

// 🎯 Usage of if (!response.ok)
fetch('https://api.github.com/users/invalid-user')
.then(response => {
  // Check if the response status is NOT OK
  if (!response.ok) {
    throw new Error(`HTTP Error! Status: ${response.status}`);
  }
  return response.json(); // Convert response to JSON
})
.then(data => {
  console.log('User Data:', data);
})
.catch(error => {
  console.error('Error:', error.message);
});

// 💡 Explanation:
// - fetch() sends a GET request to the given URL.
// - response.ok is checked:
//    - If response.ok is false (status code not in 200–299 range), it throws an error.
//    - The error message includes the status code, like 404 or 500.
// - If the request is successful, the response is converted to JSON.
// - Errors are caught in the .catch() block and logged.

// 🛑 When response.ok is false
// Example: Invalid or missing API URL
// URL: https://api.github.com/users/invalid-user
// ✅ Output:
// Error: HTTP Error! Status: 404

// ✅ When response.ok is true
// Example: Valid URL and successful response
// URL: https://api.github.com/users/abhinav-2611
// ✅ Output:
// {
//   "login": "abhinav-2611",
//   "id": 8288846,
//   "avatar_url": "https://avatars.githubusercontent.com/u/8288846?v=4",
//   "url": "https://api.github.com/users/abhinav-2611",
//   ...
// }

// ⚡️ Why Do We Use if (!response.ok)?
// It ensures that HTTP errors (like 404, 500, etc.) don’t go unnoticed.
// Without it, even if the server returns an error, fetch() will not reject the promise.
// To manually throw an error and handle it correctly, we check response.ok.

// 📝 Best Practice: Always Check response.ok
async function fetchData(url) {
try {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error: ${response.status} - ${response.statusText}`);
  }
  const data = await response.json();
  console.log('Data:', data);
} catch (error) {
  console.error('Fetch failed:', error.message);
}
}

// Calling the function with a valid URL
fetchData('https://api.github.com/users/abhinav-2611');


/* 📚 Options/Parameters in fetch()
   Option	Description	Example Value
   method	HTTP method (GET, POST, PUT, DELETE)	'POST'
   headers	HTTP headers	{ 'Content-Type': 'application/json' }
   body	Data to send in POST/PUT requests	JSON.stringify(data)
   mode	CORS mode (cors, same-origin, etc.)	'cors'
   credentials	Include cookies (omit, same-origin, include)	'same-origin'
*/

/* 🎁 Advanced Example: PUT Request with Authentication */
fetch('https://api.example.com/user/123', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_TOKEN_HERE',
  },
  body: JSON.stringify({
    name: 'Abhinav Srivastava',
    role: 'Software Developer',
  }),
})
  .then(response => response.json())
  .then(data => console.log('Updated:', data))
  .catch(error => console.error('Error:', error));

/* 🕰️ Timeout with fetch() (Custom)
   fetch() doesn’t have a built-in timeout, but you can create one:
*/
function fetchWithTimeout(url, timeout = 5000) {
  return Promise.race([
    fetch(url),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Request timed out')), timeout)
    ),
  ]);
}

fetchWithTimeout('https://api.github.com/users/abhinav-2611', 3000)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

/* 📝 Key Points to Remember
   - fetch() returns a Promise that resolves to a Response object.
   - Always check response.ok to handle HTTP errors properly.
   - Use async/await for cleaner and more readable code.
   - Handle different data formats using response.json(), response.text(), or response.blob().
*/


/* 
Introduction to Events
========================
Events are actions or occurrences detected by the browser that can be handled using JavaScript. Examples include:
1. Clicking a button
2. Pressing a key
3. Resizing the window
4. Submitting a form
5. Playing or pausing a video

When an event occurs, the browser "fires" a signal, and you can write code to respond to it. 

Prerequisites:
---------------
- Basic knowledge of HTML, CSS, and JavaScript.
- Familiarity with functions, methods, and DOM manipulation.

Learning Outcomes:
-------------------
1. Understand what events are.
2. Learn how to attach event handlers using `addEventListener()` and remove them using `removeEventListener()`.
3. Avoid using inline event handlers.
4. Learn about event objects and their usage.
*/

/* 
What are Events?
-----------------
An event is any significant action or occurrence that happens in the browser, such as:
- User interactions like clicks, hover, or key presses.
- System-generated events like page load or errors.

Common types of events:
------------------------
1. User clicks a button.
2. Cursor hovers over an element.
3. Keyboard key is pressed.
4. Form submission.
5. Media (video/audio) play or pause.

Example:
--------
Below is a button example where clicking the button changes the background color to a random one:
*/
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});

/* 
Using addEventListener():
--------------------------
The `addEventListener()` method is the recommended way to attach event handlers.
Syntax:
-------
element.addEventListener(event, handlerFunction);

- `event`: The type of event (e.g., "click", "mouseover").
- `handlerFunction`: The function to execute when the event occurs.

You can also use a named function as the handler:
*/
function changeBackground() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}
btn.addEventListener("click", changeBackground);

/* 
Listening for Other Events:
----------------------------
You can attach different event types to elements. Examples:
- "focus" and "blur": Triggered when an element gains or loses focus.
- "dblclick": Triggered on double-click.
- "mouseover" and "mouseout": Triggered when the mouse pointer hovers over or moves off an element.
*/

/* 
Removing Event Listeners:
--------------------------
To remove an event handler attached using `addEventListener()`, use `removeEventListener()`.

Example:
--------
btn.removeEventListener("click", changeBackground);

Using AbortController for Dynamic Cleanup:
-------------------------------------------
An event handler can also be removed dynamically using `AbortController`.
*/
const controller = new AbortController();
btn.addEventListener(
  "click",
  () => {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
  },
  { signal: controller.signal }
);

// Later, you can remove all handlers linked to this controller:
controller.abort();

/* 
Other Ways to Attach Event Handlers:
-------------------------------------
1. Event Handler Properties:
   - Example: element.onclick = handlerFunction;
   - Limitation: Only one handler can be attached at a time.

2. Inline Event Handlers (Avoid Using These!):
   - Example: `<button onclick="alert('Hello!')">Click me</button>`
   - Inline handlers mix HTML and JavaScript, which is hard to manage and maintain.
*/

/* 
Event Objects:
---------------
When an event is triggered, the browser passes an "event object" to the handler function, providing details about the event.
Example:
*/
btn.addEventListener("click", (e) => {
  console.log(e); // Logs event details
  e.target.style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
});

/* 
Preventing Default Behavior:
-----------------------------
Some events have default behaviors. You can prevent them using `preventDefault()`.

Example: Form Validation
-------------------------
Below is an example where a form submission is blocked if required fields are empty:
*/
const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.querySelector("p");

form.addEventListener("submit", (e) => {
  if (fname.value === "" || lname.value === "") {
    e.preventDefault(); // Stops the form from submitting
    para.textContent = "You need to fill in both names!";
  }
});

/* 
Key Takeaways:
--------------
1. Use `addEventListener()` for flexibility and scalability.
2. Avoid inline event handlers and outdated practices.
3. Use `preventDefault()` and `event objects` for advanced handling.
4. Understand the various event types and their specific use cases.

You can now experiment with events to create interactive web pages!
*/

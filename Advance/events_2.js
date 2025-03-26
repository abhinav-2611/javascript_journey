/**
 * =======================================
 * Event Propagation, Delegation, and Event Object
 * =======================================
 */

/** 
 * ===================
 * 1. Event Propagation
 * ===================
 * 
 * Event Propagation defines how events flow through the DOM.
 * It has three phases:
 * 
 * 1. Capture Phase (Trickling Down):
 *    - Event starts from the root (document) and moves down to the target.
 * 
 * 2. Target Phase:
 *    - The event reaches the target element where the listener is attached.
 * 
 * 3. Bubble Phase:
 *    - The event propagates back up to the root.
 * 
 * Third Parameter in `addEventListener`:
 * - `false` (default): Listener fires during the **bubble phase**.
 * - `true`: Listener fires during the **capture phase**.
 */

// Example of Event Propagation
document.querySelector("#outer").addEventListener(
    "click",
    () => {
      console.log("Outer div clicked (Capture Phase)");
    },
    true // Capture Phase
  );
  
  document.querySelector("#inner").addEventListener("click", () => {
    console.log("Inner div clicked (Target Phase)");
  },true);  
                    /*output : Outer div clicked (Capture Phase)
                               Inner div clicked (Target Phase)*/      
  
  
  
  /* 
   * HTML Structure for the above example:

   * <div id="outer" style="padding: 50px; background-color: lightblue;">
   *   
   *   <div id="inner" style="padding: 50px; background-color: lightcoral;"> </div>
   * 
   * </div>
   */
  
   /**
   * Output when clicking the inner div: 
   * 
   * 1. Outer div clicked 
   * 2. Inner div clicked 
   *
   */
  
  /** 
   * ===================
   * 2. Event Delegation
   * ===================
   * Event Delegation allows handling events for multiple child elements using a single parent listener.
   * 
   * Why Use Event Delegation?
   * - Efficient handling of multiple child elements.
   * - Handles dynamically added elements seamlessly.
   * 
   * How It Works:
   * - Leverages **event bubbling** to catch child events at the parent level.
   */
  
  // Example of Event Delegation
  const parent = document.querySelector("#parent");
  
  parent.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      console.log(`Button ${e.target.textContent} clicked`);
    }
  });
  
  /* 
   * HTML Structure for the above example:
   * <div id="parent">
   *   <button>Button 1</button>
   *   <button>Button 2</button>
   * </div>
   */
  
  /** 
   * ==============================
   * 3. Properties of Event Object
   * ==============================
   * When an event is triggered, an **event object** is passed to the event handler function.
   * This object contains details about the event.
   * 
   * Key Properties:
   * ----------------
   * 1. `target`: The element that triggered the event.
   * 2. `currentTarget`: The element to which the event handler is bound.
   * 3. `type`: The type of event (e.g., "click", "mouseover").
   * 4. `preventDefault()`: Prevents the default action of the event.
   * 5. `stopPropagation()`: Stops the event from propagating further.
   * 6. `bubbles`: Indicates if the event bubbles through the DOM.
   * 7. `clientX` and `clientY`: Mouse pointer coordinates relative to the viewport.
   * 8. `key`: For keyboard events, indicates the key pressed.
   */
  
  // Examples of Event Object Properties
  
  // 1. target and currentTarget
  document.querySelector("#parent").addEventListener("click", (e) => {
    console.log("target:", e.target);         // Element that triggered the event
    console.log("currentTarget:", e.currentTarget); // Element to which the listener is bound
  });
  
  // 2. preventDefault()
  document.querySelector("a").addEventListener("click", (e) => {
    e.preventDefault(); // Prevents link navigation
    console.log("Default action prevented");
  });
  
  // 3. stopPropagation()
  document.querySelector("#inner").addEventListener("click", (e) => {
    e.stopPropagation(); // Stops further event propagation
    console.log("Propagation stopped");
  });
  
  // 4. clientX and clientY
  document.querySelector("button").addEventListener("click", (e) => {
    console.log(`Mouse position: X = ${e.clientX}, Y = ${e.clientY}`);
  });
  
  // 5. key (Keyboard Event)
  document.addEventListener("keydown", (e) => {
    console.log(`Key pressed: ${e.key}`);
  });
  
  /**
   * ===================================
   * Difference Between target and currentTarget
   * ===================================
   * - `target`: The element that initiated the event.
   * - `currentTarget`: The element to which the listener is bound.
   */
  
  // Example:
  document.querySelector("#parent").addEventListener("click", (e) => {
    console.log("target:", e.target); // Child button if clicked
    console.log("currentTarget:", e.currentTarget); // Always parent
  });
  
  /* 
   * HTML Structure:
   * <div id="parent">
   *   <button id="child">Click me</button>
   * </div>
   */
  
  /* Clicking the button produces:
   * target: <button id="child">Click me</button>
   * currentTarget: <div id="parent">...</div>
   */
  
  
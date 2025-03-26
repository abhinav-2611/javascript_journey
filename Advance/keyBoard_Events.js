// Keyboard Events in JavaScript

// 1. Types of Keyboard Events:

// - keydown:
//   * Fires when a key is pressed down.
//   * Repeats while the key is held down.
//   * Captures all keys, including modifier keys (e.g., Shift, Ctrl).

// - keypress (Deprecated):

//   * Fired for character-producing keys (e.g., letters, numbers).
//   * Does not fire for non-printable keys (e.g., Shift, Ctrl).
//   * Avoid using; use keydown and keyup instead.

// - keyup:

//   * Fires when a key is released.
//   * Does not repeat, regardless of how long the key was held down.
//------------------------------------------------------------------------------
// 2. Key Properties of the Event Object:

// - key:

//   * Represents the key's value (e.g., "a", "Enter", "ArrowUp").
//   * Example:
//     document.addEventListener('keydown', (e) => console.log(`Key: ${e.key}`));

// - code:
//   * Represents the physical key on the keyboard (e.g., "KeyA", "ArrowUp").
//   * Independent of keyboard layout (e.g., QWERTY vs AZERTY).

// - keyCode (Deprecated):

//   * Numeric code for the key (e.g., 65 for "A").
//   * Avoid using; prefer key or code.

// - altKey, ctrlKey, shiftKey, metaKey:

//   * Boolean values indicating if these modifier keys were pressed.
//   * Example:
//     document.addEventListener('keydown', (e) => {
//         if (e.ctrlKey && e.key === 's') {
//             e.preventDefault();
//             console.log('Ctrl+S pressed');
//         }
//     });

// - repeat:

//   * Indicates if the key is being held down (true if held).
//   * Example:
//     document.addEventListener('keydown', (e) => {
//         if (e.repeat) console.log('Key is being held');
//     });
//-----------------------------------------------------------------------
// 3. Event Order:

// - keydown → Fires first when the key is pressed.
// - keypress → (Deprecated) Fires for character-producing keys.
// - keyup → Fires when the key is released.
//-----------------------------------------------------------------------
// 4. Example Code:
document.addEventListener('keydown', (e) => {
    console.log(`Key: ${e.key}, Code: ${e.code}`);
    if (e.ctrlKey && e.key === 'z') {
        console.log('Undo operation triggered!');
    }
});

document.addEventListener('keyup', (e) => {
    console.log(`Key released: ${e.key}`);
});
//-----------------------------------------------------------------------------
// 5. Common Use Cases:

// - Shortcut Keys:
//   * Create custom keyboard shortcuts (e.g., Ctrl+S for Save, Ctrl+Z for Undo).
// - Input Validation:
//   * Restrict input to specific characters (e.g., numbers only).
// - Game Controls:
//   * Handle movement with keys (e.g., Arrow keys, WASD).
// - UI Interactions:
//   * Open modals, navigate tabs, or trigger actions on keypress.
// -------------------------------------------------------------------------------------
// 6. Best Practices:
// - Use key and code for modern applications; avoid keypress and keyCode.
// - Normalize keyboard behavior for different layouts using code.
// - Use e.preventDefault() to block default browser behavior when necessary 
//   (e.g., prevent Backspace from navigating back).
// - Test for modifier keys (Ctrl, Shift, Alt, Meta) when implementing custom shortcuts.

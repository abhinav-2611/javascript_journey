/*
📘 JavaScript Function Context Methods: call(), apply(), and bind()
JavaScript functions are objects too — and they come with some powerful built-in methods. Three of the most important ones are:

call()

apply()

bind()

These are used when you want to explicitly set the value of this inside a function.

🔹 call() — Call Now with Arguments One by One
✅ What it does:
Calls the function immediately

Allows you to set this manually

Pass arguments individually

🧠 Syntax:

functionName.call(thisArg, arg1, arg2, ...)
✅ Example:
javascript
Copy
Edit
function say(greeting) {
  console.log(`${greeting}, I'm ${this.name}`);
}

const person = { name: "Abhinav" };

say.call(person, "Hello"); // Output: Hello, I'm Abhinav
💡 this refers to person, and "Hello" is passed as the argument.

🔹 apply() — Call Now with Arguments as Array
✅ What it does:
Works just like call()

But it accepts arguments as an array

🧠 Syntax:

functionName.apply(thisArg, [arg1, arg2, ...])
✅ Example:
javascript
Copy
Edit
function introduce(greeting, punctuation) {
  console.log(`${greeting}, I'm ${this.name}${punctuation}`);
}

const user = { name: "Abhinav" };

introduce.apply(user, ["Hi", "!"]); // Output: Hi, I'm Abhinav!
💡 Great when arguments are already in an array or array-like format.

➕ Another Common Use:

const nums = [2, 8, 5];
console.log(Math.max.apply(null, nums)); // Output: 8
🔹 bind() — Bind Now, Call Later
✅ What it does:
Doesn’t call the function immediately

Returns a new function with this permanently bound

You can call it later when needed

🧠 Syntax:

const newFunc = functionName.bind(thisArg, arg1, arg2, ...)
✅ Example:

function greet() {
  console.log(`Hi, I'm ${this.name}`);
}

const person = { name: "Abhinav" };

const greetAbhinav = greet.bind(person);
greetAbhinav(); // Output: Hi, I'm Abhinav
🎯 Useful in:
Event listeners

Callbacks

setTimeout or async code


const user = {
  name: "Abhinav",
  greet: function () {
    console.log("Hello, " + this.name);
  }
};

setTimeout(user.greet.bind(user), 1000); // Output: Hello, Abhinav
Without bind, this.name would be undefined or window.name.

📋 Summary Table:

Method	 |  Calls Immediately |	How to Pass Arguments |	Returns New Function?	|     Common Use Case
call()	      ✅ Yes	            Individually	            ❌ No	              Immediate call with this
apply()	      ✅ Yes	             As array	                ❌ No	              Immediate call with array args
bind()	      ❌ No	            Individually or partially	✅ Yes	              Save function for later with fixed context

🧪 Bonus Tip:
You can chain calls like this:


function outer() {
  return function inner() {
    console.log("Inner function called!");
  };
}

outer()(); // ✅ This works fine!
💡 outer() returns a function. () immediately invokes the returned function.



*/ 
// const obj1= { a:1 , b:2};
// const obj2= {b:3, c:4};
// const merged = Object.assign({},obj1,obj2);
// console.log(merged);


// for (var i = 0; i< 3; i++) {
   
//   setTimeout(()=>console.log(i),1000 )
// }
a =8;
function name() {
  let a= 5; 
  if(a=8)
  {

    console.log(a);
    
  }
}
name();
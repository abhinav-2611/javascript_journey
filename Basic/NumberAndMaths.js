const score = 400
const balance = new Number(100)
console.log( typeof balance); // output : object 
console.log(typeof score); //output : Number 

// Methods we can use with Number 
console.log(balance.toString()) //output : "100" --> coverted into string
console.log(balance.toFixed(2)) // output : 100.00 --> return  the number upto given decimal place value
console.log(balance.toPrecision()) 

const amount=1000000;
console.log(amount.toLocaleString()); //output : 10,00,000 --> sperate the number into commas (specifically used for amounts)

//+++++++++++++++++++++++++++++++++++++++++++++  MATH   +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//The Math library in JavaScript is a built-in object that provides mathematical constants and functions.
// It doesn't require importing and is available by default. Here's an overview of its features:

console.log(Math.PI);
const min=10;
const max=50;
console.log(Math.floor(Math.random()*(max-min+1))+min); // Math.random() values between 0 and 1 but if range(max and min) is specifically  given then this formula is used

// for more  u can go to console and type "MAth" press enter and u will get all constants and funtions u can used .

 num=2;

console.log(Math.pow(num,4)); // output : 16
// ways to declare a string 

let myName= "Abhinav Srivastava"  // this creates a primitive string. Strings created this way are immutable and are of type string.

let myAddress= new String("Raebareli")//this creates a String object. Strings created this way are objects, not primitives.

console.log(typeof myAddress);
console.log(typeof myName);

console.log(myName == "Abhinav Srivastava"); // true : (value comparison)
console.log(myAddress == "Raebareli");       // true : (value comparison)
console.log(myName==="Abhinav Srivastava"); // true :strict value comparison
console.log(myAddress==="Raebareli");// false : (object to string comparison)


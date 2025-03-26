
let userName= "Abhinav"

console.log(userName.anchor("section1")); // output : <a name="section1">AbhinavSri</a> -->coverts string into an <a> element with a name attribute 
console.log(userName.at(3)); //output : i --> at() method is used to retrieve the specefic character out of string of a given index 
console.log(userName.charAt(1)); //output : b --> same at at() but it can't take negative indexes.
console.log(userName.charCodeAt(0)); //output : 65 --> returns the Ascii value of the character at the given index
console.log(userName.codePointAt(3));// output : 105  
console.log(userName.concat(" srivastava"))// output : Abhinav srivastava --> add strings 
console.log(userName.endsWith("nav")); // output : yes -->  The endsWith() method in JavaScript checks if a string ends 
                                                         //f  with a specified substring, returning true if it does, and false otherwise. 

 let surName= "srivastava"
 console.log(surName.lastIndexOf("a")); // output : 9 --> gives the index where last time "a" appears

 console.log(surName.includes("salil")) // output : false --> checks whether the given string inside the method is present or not

//An object is a collection of key-value pairs. Each key is a string or a Symbol, and each value can be of any data type,
// including another object, array, or function.

let mysym= Symbol("key1")
const my_details= {
     
    name: "abhinav",
    "full name": "abhinav srivastava",
    degree: "MCA",
    sem1_percentage: "68%" ,
    // mysym:"103013",
    [mysym]:"103013"  // watch youtube (chai aur) video no.16 at 7:30 
}

//how to acess an specific key value

//method 1 : acessing by dot
console.log(my_details.name);

// mehtod 2 : acessing by square bracket
// console.log(my_details."full name") // <-- it is wrong   
console.log(my_details["full name"]) ;
console.log(my_details["name"]);
console.log(my_details[mysym]); // symbol is accessed without double corse ""


//output
/*{
    name: 'abhinav',
    'full name': 'abhinav srivastava',
    degree: 'MCA',
    sem1_percentage: '68%',
    [Symbol(key1)]: '103013'
  }*/


/* point to remember: accessing by using bracket is more useful becoz name of key (name ,fullname etc.)
 are also a type of string so there can be space between their names and it is not possible to access them 
 by using dot so using bracket is more efficient*/

my_details.greetings= function greet()     
{
    // console.log("hope you are good!"); 
    return  "hope you are good!";
}

console.log(my_details.greetings())

//you can freeze the object so no can further update the the keys of object

Object.freeze(my_details);

my_details.name= "salil"
console.log(my_details["name"]); // output will still "abhinav" becoz we have freeze the object

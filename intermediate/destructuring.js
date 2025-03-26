// Destructuring : it is basically extracting values from arrays or  properties from objects 
// like before we access the values by just writing "console.log(object.keyname)" ,
//here there is an another way -

const my_data={
    name: "abhinav",
    address:  "noida",
    age: 21
}

const {name,address,age}= my_data;
console.log(name);
console.log(address);
console.log(age);

//or you can aasing the value a variable

const { name: myName , address: myAddress , age: myAge}= my_data

console.log(myName);
console.log(myAddress);
console.log(myAge);
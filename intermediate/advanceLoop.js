/*__for of loop__ : The for...of loop in JavaScript is used to iterate over iterable objects, such as arrays, strings, maps, sets, and more.
 It provides a clean and straightforward way to loop through elements in an iterable, especially when you don't need access to the index. */ 

const myArray=[12 ,34 ,56, 67];

for (const value of myArray) {

    console.log(`value : ${value}`);
  }

console.log(); // to print newline

 const mapObj= new Map();

 mapObj.set("Name" ,"Abhinav");
 mapObj.set("rollNum",12345);

 for (const [key,values] of mapObj) { //<--------|
 console.log(`${key} : ${values}`);            //|
}                                              //| Run and see what both loops for maps and printing whole map give output
                                               //|
console.log(); // to print new line            //|
                                               //|
for (const key of mapObj) {//<-------------------|
    console.log(key);                          //|   
}                                              //|
                                               //|
console.log(mapObj);//<--------------------------|



// for of loop can't access the values of an object .It can access the values of arrays ,strings , maps only
const myobject=
{
    Name: "Abhinav Srivastava",
    userId: "2611abhi",
    password: 6734643
}
// for (const objVal of myobject) {

//     //  console.log(`values : ${objVal}`);     // TypeError: myobject is not iterable
// }

//___________________________________________________________________________________________________________________________________________


//___for-in loop___: The for-in loop in JavaScript is used to iterate over the enumerable properties of an object. 
//                   It is mainly used for objects but can also be applied to arrays. However, for arrays, the for-in loop may iterate
//                   over inherited properties or non-numeric keys, so it is better suited for objects.

const players=
{
    Australia: "pat Cummins",
    India: "Virat Kohli",
    Newzealand: "Kane Williamson",
    SouthAfrica: "ABD-villiers"
}
for (const key in players) {

    // console.log(`${key} : ${players[key]}`);
}

const arr=[1,2,3,4,5];

for (const key in arr) {
    // console.log(`Index [${key}]: ${arr[key]}`); 
}
/*In JavaScript, the filter() method is used on arrays to create a new array containing all the elements of the original array that satisfy
 a specified condition. It is a part of JavaScript's array methods and is often used for data manipulation.
 
     Return Value: A new array containing all the elements that passed the condition specified in the callback

 */
//1--> Filter used on array elements
const myArray=[32, 45 ,54 ,67];

 newArray=myArray.filter( (num)=> num>32)

console.log(newArray);

// when you create a scope rather than writing condition directly then you have to write return statemnt

 newArray =myArray.filter((num)=>
{
    return num<67;
})
console.log(newArray);
//------------------------------------------------------------------------------------------------------------------------
//2--> filter used on objects

const books=[
    {["book Name"]: "Arihant", ["Published By"]:"Dr Arihant", Year: 1980},
    {["book Name"]: "RD-S", ["Published By"]:"Dr RD Sharma", Year: 1970},
    {["book Name"]: "Nootan", ["Published By"]:"Dr Viswas", Year: 1999},
    {["book Name"]: "ML-publications", ["Published By"]:"Dr ML aggrawal", Year: 2000}
]

const specificBook= books.filter((bookDetail)=>bookDetail.Year<2000 && bookDetail.Year>1970);
console.log(specificBook);

/*Key Points

The filter() method does not modify the original array.
It is often used with arrow functions for concise code.
Can be combined with other array methods like map() or reduce() for powerful data manipulation.
 */
//------------------------------------------------------------------------------------------------------------------------
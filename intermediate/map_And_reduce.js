// ___map()___

const array= [1,2,3,4,5,6,7,8,9,10];

 resultArray=array.map((num)=> num*10);

console.log(resultArray);   

// resultArray=array.map(function (num)
//  {
//     return num*10;num *10

//  } )
// console.log(resultArray);
//--------------------------------------------------------------------------------------------------------

//___reduce()____

const anotherArray=[1,2,3,4,5,6,7];

anotherResult= anotherArray.reduce( (accumulator,arrayVal)=> accumulator+arrayVal,0)
console.log(anotherResult);  //output: 28

//with block scope

anotherResult= anotherArray.reduce(function (accumulator,arrayVal)
{
      return accumulator+arrayVal;
},0)
console.log(anotherResult);  //output: 28

// understand  how reduce works  with normal 'for loop'
 let acc=0;
for (let index = 0; index < anotherArray.length; index++) {
    
    acc=acc+ anotherArray[index];
}

console.log(acc);  //output : 28
//--------------------------------------------------------------------------------------------------------------------------
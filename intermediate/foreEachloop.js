
//for-each loop : The forEach loop in JavaScript is used to run a function on each item in an array.It takes takes 3 parameters in a call 
// back function (element,index,array)

const fruits=[ "apple","banana", "grapes"];

fruits.forEach(function (name) {
    
    // console.log(name);
    
})

console.log();

//we can use arrow funtion also

const members=["anita","sunita","vineeta"];

members.forEach( (name,index) => {

    console.log(`${index}:${name}`)
})

//_____________________________

const multiplier = {
    factor: 2,
  };
  
  const numbers = [1, 2, 3];
  
  numbers.forEach(function (num) {
    // console.log(num * this.factor);
  }, multiplier);
  
//__________________________________________________________________________________________________________________


/*Feature	           |      for-in	           |     for-of	                 |       forEach
                       |                           |                             | 
Iterates Over	       |  Keys (property names).   | Values in iterables.	     |  Array elements.
-------------------------------------------------------------------------------------------------------------------
Iterable Support	   |  Objects, arrays (keys).  | Arrays, strings, Maps, Sets.|	Arrays only.
-------------------------------------------------------------------------------------------------------------------
Access Values Directly |  No (needs object[key]).  | Yes.	                     |  Yes.
-------------------------------------------------------------------------------------------------------------------
Break/Continue Support |  Yes (can use break).	   | Yes (can use break).	     |  No (cannot use break).
-------------------------------------------------------------------------------------------------------------------
Performance            |  Fast for objects,        | Fast for iterables.	     |  Slower due to callback.
-------------------------------------------------------------------------------------------------------------------
Prototype Properties   |  Includes prototype keys. | Skips prototype properties. |	Not applicable.
 */



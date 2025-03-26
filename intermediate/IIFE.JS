// immediately invoked function expression(IIFE)
var num =12;

function just_function()
{
    if(num)
    {
        num=123;
      console.log(num); 
    }
    
}

just_function();
console.log(num);



var a = 10;

(function() {
  var a = 20;  // This 'a' is local to the IIFE
  console.log(a);  // Logs 20
})();

console.log(a);  // Logs 10 (The global 'a' is unaffected)

/*Key Characteristics

Self-executing: The function executes as soon as it is defined.
Encapsulation: Variables inside the IIFE are not accessible outside, helping avoid polluting the global scope.
 */
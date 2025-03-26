

const person = {
    name: "Abhinav",
    greet: function() {               
      // console.log(this["name"]);   // when 'this' keywword is written inside the object then it refers to that object
    }
  };
  
//   person.greet(); // Logs: Abhinav
  
//---------------------------------------------------

  function my_funct() {

    //  console.log(this);    //When 'this' is used in a normal function (not part of an object), it refers to the global object.
  }                         // "window" object in browser  and  "global" in node.js

//    my_funct();
//------------------------------------------------------------------

//   console.log(this);    //  output : (empty object in node.js) '{}'
                        //  ouput :  window (in brower's console)    
//--------------------------------------------------------------------

function sum(){
   let username= "abhinav";
  //  console.log(this.username);          
   
}

//   sum();
/*In JavaScript, when you call a regular function (like sum()), the this keyword refers to the global object
 (window in browsers or global in Node.js). The let username = "abhinav"; declaration creates a local variable inside the sum function.
 Therefore, this.username is undefined because username is not a property of the global object.
  */
//----------------------------------------------------------------------------------------------------------------------------------

// 'this' inside arrow funtion

const arrow_function1 = () => {

    console.log(this);  // output : {}
}
arrow_function1();

const obj= {

    id: 1234,

    arrow_function2 : () => {

        console.log(this.id); // output : undefined
    }
}

obj.arrow_function2();  



const object_my=
{
    myname:"salil",
    greetings : function()
    {
        const holi= ()=>{
            console.log(this)  
        }

        holi();
    }
}
object_my.greetings();

/*Arrow functions do not have their own this,they inherit this from their surrounding context (the place where the arrow function is defined).
  Arrow functions inherit this from their surrounding context, meaning 'this' inside the arrow function refers to the same 'this' as in the outer function.

  -->Inside the 'greetings' method, this refers to object_my because that’s the object in which the method is defined and called.
  -->The arrow function 'holi' is defined inside the greetings method, so it inherits this from greetings.
   -->Since this inside greetings refers to object_my, the arrow function’s this will also refer to object_my.
*/

 // for more details copy paste the code in chatgpt 

 //---------------------------------------------------------------------------------------------------------------------

 

 
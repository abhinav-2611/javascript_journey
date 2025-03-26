
//***** ways to create objects *****

//1--> object literal 

const my_profile={ name:"abhinav srivastava" , role: "sofware developer", experience:  3, any_Offensive_Records:false} 

//2--> by creating objects using new keyword

const my_skills = new Object();
my_skills.programming_lan= ["c","java","javascript"]
my_skills.interpersonal_skills=["verbal communication","non verbal communication","written communication"]

//3-- by using object.create() method


//___________________________________________________________________________________________________________________________________

//***** how to merge two or more objects******

//1--> usings spread operator(...)
const myfull_details= {...my_profile,...my_skills}

console.log(myfull_details)

// note :  suppose there is a key which is commom in both objects then the value from the latter object  overwrites the former.

//example 

const obj1={a:20,b:30,c:50};
const obj2={c:100,b:80,d:90};

const merge= {...obj1,...obj2};
console.log(merge);  //output : { a: 20, b: 80, c: 100, d: 90 }

// 2--> by using Object.assign() 

const my_symbol=Symbol("key1")
const animals= { 
     water_animmals:["shark","whale","pirahna","octopus"] ,
     land_animals:[ "cheetah","ostrich","monkey","orangutan"],
     [my_symbol]:"abhi2611"
    }

const numbers_species={ water_animmals_no:2000000,land_animals_no: 300000000} 

const merge_livings=Object.assign({},animals,numbers_species) //The first argument ({}) is the target object, which ensures the original objects are not modified.

console.log(merge_livings);

//syntax breakdown of object.assign()

// object.assign( target object,source object) 

//________________________________________________________________________________________________________________________________________________________________________
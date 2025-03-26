//concat()
const my_numbers= [1,2,3,4,5]
const full_Array =my_numbers.concat("salil")
console.log(full_Array);  //output : [ 1, 2, 3, 4, 5, 'salil' ]

//alternative of concat() -> spread operator  ...

const my_subjects=["maths","physics","chemistry"]
const my_scores=[50,80,95];

const combine=[...my_subjects, ...my_scores];
console.log(combine); //output : ['maths','physics','chemistry',50,80,95]


// flat()

const integers=[1,2,3,4,[5,6,7],8,9,[10,11,[12,13]]]

const full_integers= integers.flat(Infinity)

console.log(full_integers); // output : [1,2,3,4,5,6,7,8,9,10,11,12,13]

//Array.isArray
const bike= "bugati"
console.log(Array.isArray(bike)); //output : false


//Array.from()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

const friend= "Yashasvi";   
console.log(Array.from(friend)); // ['Y','a','s','h','a','s','v','i']

/* interesting case */
  const it_case= {name: "abhinav"};
  console.log(Array.from(it_case)); // output : [] 
  







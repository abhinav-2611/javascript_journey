console.log("1">2)  //false
console.log("1"==1) //true
console.log(null>0) //false
console.log(null<0) //false
console.log(null>=0) //true(in this comparison, the relational comparison operators (>=, <=, >, <) convert null to a number before comparing.
                     //null gets converted to 0 in numeric context.)
console.log(null == 0); // false (The equality operator (==) checks for equality with type coercion, but it does not convert null to 0.)
console.log(null === 0); // false (strict equality; no coercion, types differ)
console.log(null == undefined); // true (null is loosely equal to undefined)

/*
The difference in behavior between null >= 0 returning true and null == 0 returning false arises from how JavaScript interprets the comparison operators (>=, >, <, <=) versus the equality operators (==, ===).

1.  null >= 0 → true
The >= operator in JavaScript triggers type coercion and treats null as a numeric value. Here's how it works:

When null is compared to a number, JavaScript converts null to its numeric equivalent: 0.
The comparison becomes 0 >= 0, which evaluates to true.

2. null == 0 → false
The == operator has specific rules for comparing null:

According to the ECMAScript specification, null is only loosely equal to undefined.
null is not equal to any number, including 0.
No type coercion occurs here to convert null into 0, so the comparison returns false.
Key Difference:
Comparison Operators (>=, <=, etc.): These attempt to coerce null to a number for meaningful numeric comparison.
Equality Operator (==): Has special rules for null and undefined without coercion.

-->strict equality (===)  does not perform type coercion and directly compares both value and type.

*/


console.log(null>="abhi") //false
/*
Type Coercion in This Case

null is converted to a number, which results in 0 (as per JavaScript's type coercion rules).
"abhi" is a string and cannot be converted directly to a number. Therefore, it is treated as NaN (Not-a-Number).
Comparison Rules with NaN

When one of the operands is NaN, all relational comparisons return false.

0 >= NaN; // false
*/


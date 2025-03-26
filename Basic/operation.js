console.log(1 + "2" + 3);
console.log(1 + 2 + "3" );
console.log("1" + 2 + 3);  

/*
Why Does This Happen?

The '+' operator has dual behavior in JavaScript:

Addition:   When both operands are numbers.
Concatenation:   When at least one operand is a string.

-->JavaScript evaluates expressions left to right.
-->When a string is encountered, the + operator switches to concatenation mode, 
and any subsequent operands are converted to strings.*/

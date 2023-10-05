
//  IfStatement
// if the condition is true,the statement excutes. If the condition is false, nothing happens
const num = 5

if (num >0){
    console.log(`The number is positive`);
}

// ifelsestatement
//check if a number is positive or negative
const number=-3;
if(number > -3) {
    console.log(`The number is positive`)
}else{
    console.log(`The number is negative`)
}

// Switch statement
let value = 5;
switch(value) {
    case 0:
        console.log("value is 0");
        break
    case 1:
        console.log(`Value is 1`

        )
    case 2:
        console.log(
            `value is 2`);
            break
    
        default:
            console.log(
                `Value is greater than 2`
            )

}

//Ternary Operator
//The ternary operator is only Javascript operator that takes three operands.
//The condition is evaluated as true or false.
//A question mark(?) separates our true expression from our false expression.
//A colon (:) separates our true expression from our false expression.

let numero = 10;
let result = numero >= 0 ? "positive" : "Negative";

console.log(`The number is ${result}`)

//using for loop iterate for even numbers from  0 to 10 

for (let i = 0; i <= 10; i++){
    if (i % 2 == 0){
        console.log(i);
    }
}

// using  Break to Exit a loop
// The break statement terminates the current loop,switch, or label statement and
// transfer program control to the statement following the terminated statement
// The break statement includes an optional label that allows the program to break out of a labeled statement.


let collection =["x", "y", 3,5, "a"];
let containsNumber =false ;
for (i=0; i< collection.length; i++) {
    if (typeof collection[i]  === "number"){
        containsNumber =true;
        console.log(`The number found:` + collection[i]);
        break;
    }
}

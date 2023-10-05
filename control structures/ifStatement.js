
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
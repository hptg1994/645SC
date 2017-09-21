const calculator = require("./Calculate");

console.log(calculator.description);


let addTenAndTwelve = calculator.addTwoNumbers(12,10);
console.log(`the result is ${addTenAndTwelve}`);

let division = calculator.divideTwoNumbers(420,12);
console.log(`the result is ${division}`);

let subtraction = calculator.subtractTwoNumber(18,12);
console.log(`the result is ${subtraction}`);

let multiplication = calculator.multiplyTwoNumber(5,20);
console.log(`the result is ${multiplication}`);

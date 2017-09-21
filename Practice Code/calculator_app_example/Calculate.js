//module.exports == exports ===> true!!!!
module.exports = {
  divideTwoNumbers: function(numerator, denominator) {
    if (numerator === undefined || typeof numerator !== "number") {
      throw "num1 is not a number";
    }
    if (denominator === undefined || typeof denominator !== "number") {
      throw "num2 is not a number";
    }
    if (denominator === 0) {
      throw "denominator cannot be 0";
    }

    return numerator / denominator;
  },
  
  addTwoNumbers: (num1, num2) => {
    if (num1 === undefined || typeof num1 !== "number") {
      throw "num1 is not a number";
    }
    if (num2 === undefined || typeof num2 !== "number") {
      throw "num2 is not a number";
    }

    return num1 + num2;
  },
  multiplyTwoNumber:(num1, num2) => {
    if (num1 === undefined || typeof num1 !== "number") {
      throw "num1 is not a number";
    }
    if (num2 === undefined || typeof num2 !== "number") {
      throw "num2 is not a number";
    }
    return num1 * num2;
  },
  subtractTwoNumber:function(num1, num2){
    if (num1 === undefined || typeof num1 !== "number") {
      throw "num1 is not a number";
    }
    if (num2 === undefined || typeof num2 !== "number") {
      throw "num2 is not a number";
    }
    return num1 - num2;
  }
};

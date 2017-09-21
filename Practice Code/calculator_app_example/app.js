const calculator = require("./Calculate");
const prompt = require("prompt");

function getInfo() {
  prompt.start();

  const operation = {
    name: "operation",
    description: "Which operation do you want to do?", // Prompt displayed to the user. If not supplied name will be used.
    type: "string", // Specify the type of input to expect.
    default: "add", // Default value to use if no value is entered.
    required: true // If true, value entered must be non-empty.
  };

  const num1Prompt = {
    name: "numFirst",
    description: "What is the first number?",
    type: "number",
    required: true
  };

  const num2Prompt = {
    name: "numSecond",
    description: "What is the second number?",
    type: "number",
    required: true
  };

  const quitPrompt = {
    name: "Quit",
    decription: "Do you want to quit after this operation?",
    type: "boolean",
    required: true
  };

  function stringToOperation(str) {
    if (!str) return "add";
    if (str === '*' || str === "multiply") return "multiply";
    if (str === '-' || str === "subtract") return "subtract";
    if (str === '/' || str === "divide") return "divide";
    return "add";
  }

  //get the property from user

  prompt.get([operation, num1Prompt, num2Prompt, quitPrompt], function (err, result) {
    //
    //log the result
    //
    // result = {operation : 'add',num1:12, num2:0, quit:true }
    //get a line of text to see what operation we're doing
    //get num1
    //get num2
    //log result
    //repeat
    if (result) {
      let num1 = result.numFirst;
      let num2 = result.numSecond;
      let quit = result.Quit; //Quit 一定要和 quitPrompt中的name:Quit一摸一样！！小写quit都不行！
      let operation = stringToOperation(result.operation); //这个operation也是，必须是operation，不能是Operation！因为我写的就是Operation！
      let operationFunction = undefined;
      switch (operation) {
        case "multiply":
          operationFunction = calculator.multiplyTwoNumber;
          break;
        case "divide":
          operationFunction = calculator.divideTwoNumbers;
          break;
        case "add":
          operationFunction = calculator.addTwoNumbers;
          break;
        case "subtract":
          operationFunction = calculator.subtractTwoNumber;
          break;
      }

      let numericalResult = operationFunction(num1, num2);
       
      console.log(`When you ${operation} ${num1} with ${num2},you get ${numericalResult}`);
      if (!quit) {
        getInfo();
      }
    } else if (err) {
      console.error(err);
    }
  });
}
// prompt.start();

getInfo();
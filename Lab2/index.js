

const printShape = require("./printShape");

function PrintTest() {
    //Print Triangle
    for (let i = 1; i <= 10; i++) {
        console.log(printShape.printTriangle(i));
    }
    //print Square
    for (let i = 2; i <= 11; i++) {
        console.log(printShape.printSquare(i));
    }
    //printRhombus
    for (let i = 2; i <= 20; i++) {
        if (i % 2 === 0)
            console.log(printShape.printRhombus(i));
    }
}

PrintTest();
const fs = require("fs");
let fileData = require("./fileData");
let textMetrics = require("./textMetrics");

/* fileData.getFileAsString('chapter1.txt').then((chapter1_0) => {
    return textMetrics.simplify(chapter1);
}).then((chapter1) => {
    return textMetrics.createMetrics(chapter1_1);
}) */
  
async function main() {
    if (fs.exists("./chapter1.result.json")) {
        fileData.getFileAsJSON("chapter1.result.json").then((jsonResult) => {
            console.log("Already Have the Json File");
            consol.log(jsonResult);
        }).catch((error) => {
            console.log(error);
        });
    } else {
        fileData.getFileAsString("chapter1.txt").then((chapter1_0) => {
            return textMetrics.simplify(chapter1_0);
        }).then((chapter1_1) => {
            fileData.saveStringToFile("chapter1.debug.txt", chapter1_1);
            return textMetrics.createMetrics(chapter1_1);
        }).then((chapter1_2) => {
            console.log(chapter1_2);
            console.log("Complete Saving String file");
            return fileData.saveJSONToFile("chapter1.result.json", chapter1_2);
        }).then(() => {
            console.log("Complete Saving Json file");
            console.log("=================================================================================");
        }).catch((error) => {
            console.log("Error");
            console.log(error);
        });
        /*   var data = fileData.getFileAsString("chapter1.txt");
          let text = textMetrics.simplify(data);
          let jsonData = textMetrics.createMetrics(data);
          let result = fileData.saveStringToFile("chapter1.debug.txt", text);
          let result2 = fileData.saveJSONToFile("chapter1.result.json", jsonData); */
    }

    if (fs.exists("./chapter2.result.json")) {
        fileData.getFileAsJSON("chapter2.result.json").then((jsonResult) => {
            console.log("Already Have the Json File");
            consol.log(jsonResult);
        }).catch((error) => {
            console.log(error);
        });
    } else {
        fileData.getFileAsString("chapter2.txt").then((chapter2_0) => {
            return textMetrics.simplify(chapter2_0);
        }).then((chapter2_1) => {
            fileData.saveStringToFile("chapter2.debug.txt", chapter2_1);
            return textMetrics.createMetrics(chapter2_1);
        }).then((chapter2_2) => {
            console.log(chapter2_2);
            console.log("Complete Saving String file");
            return fileData.saveJSONToFile("chapter2.result.json", chapter2_2);
        }).then(() => {
            console.log("Complete Saving Json file");
            console.log("=================================================================================");
        }).catch((error) => {
            console.log("Error");
            console.log(error);
        });
    }

    if (fs.exists("./chapter3.result.json")) {
        fileData.getFileAsJSON("chapter3.result.json").then((jsonResult) => {
            console.log("Already Have the Json File");
            consol.log(jsonResult);
        }).catch((error) => {
            console.log(error);
        });
    } else {
        fileData.getFileAsString("chapter3.txt").then((chapter3_0) => {
            return textMetrics.simplify(chapter3_0);
        }).then((chapter3_1) => {
            fileData.saveStringToFile("chapter3.debug.txt", chapter3_1);
            return textMetrics.createMetrics(chapter3_1);
        }).then((chapter3_2) => {
            console.log(chapter3_2);
            console.log("Complete Saving String file");
            return fileData.saveJSONToFile("chapter3.result.json", chapter3_2);
        }).then(() => {
            console.log("Complete Saving Json file");
            console.log("=================================================================================");
        }).catch((error) => {
            console.log("Error");
            console.log(error);
        });
    }
}
main();
const fs = require("fs");
let fileData = require("./fileData");
let textMetrics = require("./textMetrics");


/* fileData.getFileAsString('chapter1.txt').then((chapter1_0) => {
    return textMetrics.simplify(chapter1);
}).then((chapter1) => {
    return textMetrics.createMetrics(chapter1_1);
}) */
if(fs.exists("./chapter1.result.json")){
    fileData.getFileAsJSON(chapter1).then((jsonResult) => {
        consol.log(jsonResult);
    }).catch((error) => {
        console.log(error);
    });
}else{
    fileData.getFileAsString("chapter1.text").then((chapter1_0) => {
        return textMetrics.simplify(chapter1_0);
    }).then((chapter1_1) =>{ 
        fileData.saveStringToFile("chapter1.debug.text",chapter1_1);
        return textMetrics.createMetrics(chapter1_1);
    }).then((chapter1_2) => {
        console.log(chapter1_2);
        console.log("Error");
        return fileData.saveJSONToFile("chapter1.result.json",chapter1_2);
    }).catch((error) => {
        console.log(error);
    });
}
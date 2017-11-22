const express = require("express");
let app = express();
let configRoutes = require("./routes");

// configRoutes(app);
//这个方法是直接module.export一个方法的时候使用的
configRoutes.constructorMethod(app);

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});
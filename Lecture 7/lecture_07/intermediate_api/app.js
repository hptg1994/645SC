const express = require("express");
const bodyParser = require("body-parser");

/* 一个程序里面只能用一个express() ！！！！ */
const app = express();
const configRoutes = require("./routes");

// app.use(bodyParser.json());
configRoutes(app);


app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});

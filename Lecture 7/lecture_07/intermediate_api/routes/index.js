const postRoutes = require("./posts");
const userRoutes = require("./users");
// const express = require("express");
// const app = express();
const bodyParser = require("body-parser");

let constructorMethod = (app) => { 
    app.use(bodyParser.json);
    app.use("/posts", postRoutes);
    app.use("/users", userRoutes);

    app.use("*", (req, res) => {
        res.sendStatus(404);
    }); 
}

module.exports = constructorMethod;
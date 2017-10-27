const about = require("./about.js");
const story = require("./story");
const education = require("./Education"); 

const constructorMethod = (app) => {
    app.use("/about", about);
    app.use("/education", story);
    app.use("/story",story);

    app.use("*", (req, res) => {
        res.status(404).json({error: "Not found"});
    });
};

module.exports = constructorMethod;

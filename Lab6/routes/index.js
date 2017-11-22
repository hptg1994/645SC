const about = require("./about.js");
const story = require("./story");
const education = require("./Education"); 

//以下，Module.export的两种写法，最后一个是错误的示范！！！！

const constructorMethod = function(app) {
    app.use("/about", about);
    app.use("/education", story);
    app.use("/story",story);

    app.use("*", (req, res) => {
        res.status(404).json({error: "Not found"});
    });
};

module.exports = constructorMethod;

/* 
 这个方法要求在app.js 里面 这么调用： let configRoutes = require("./routes");   configRoutes.constructorMethod(app);
 module.exports = {
     constructorMethod : function(app) {
        app.use("/about", about);
        app.use("/education", story);
        app.use("/story",story);
    
        app.use("*", (req, res) => {
            res.status(404).json({error: "Not found"});
        });
     }
 }
 */

 /* 以下这个方法是错误的！！！！！
 module.exports = {
     constructorMethod(app) {
        app.use("/about", about);
        app.use("/education", education.router);
        app.use("/story",story);
    
        app.use("*", (req, res) => {
            res.status(404).json({error: "Not found"});
        });
     }  
 } */
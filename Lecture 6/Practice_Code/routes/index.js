const postRouter = require("./posts");
const userRouter = require("./users")
/* 
function constructorMethod(app){
    app.use("/posts",postRouter);
    app.use("/users",userRouter);

    app.use("*",(request,result) =>{
        result.status(404).json({error:"Not found"});
    });
}

module.exports = constructorMethod; */

// 另外一种写法
module.exports = {
    constructorMethod : (app) => {
        app.use("/posts",postRouter);
        app.use("/users",userRouter);
    
        app.use("*",(request,result) =>{
            result.status(404).json({error:"Not found"});
        });
    }
}


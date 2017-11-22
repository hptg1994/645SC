const express = require("express");
let app = express();
let configRoutes = require("./routes"); // 现在configRoutes = constructorMethod(app)

configRoutes(app);

/* configRouters 相当于是这样的：
const postRoutes = require("./routes/posts");
const userRouter = require("./routes/users");
app.use("/posts",postRoutes);
app.use("/users",userRouter);
app.use("*", (req, res) => {
    res.status(404).json({error: "Not found"});
});
*/


app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});
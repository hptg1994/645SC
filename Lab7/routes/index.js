const recipesRoute = require("./recipes");
const commentsRoute = require("./comments");

const constructorMethods = (app) => {
	app.use("/recipes", recipesRoute);
	app.use("/comments", commentsRoute);

	app.use("*", (req, res) => {
		res.status(404).json({error: "Request not found"});
	});
}

module.exports = constructorMethods;

const checkerRoute = require("./checker");

const constructorMethod = (app) => {
	app.use("/palindrome", checkerRoute);

	app.use("*", (req, res) => {
		res.redirect("/palindrome");
	});
};

module.exports = constructorMethod;

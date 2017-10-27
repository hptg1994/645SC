const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const configRoutes = require("./routes");

app.use(bodyParser.json());
configRoutes(app);

let portNumber = 3000;

app.listen(portNumber, () => {
	console.log("We've now got a server!");
	console.log("Your routes will be running on http://localhost:" + portNumber);
});

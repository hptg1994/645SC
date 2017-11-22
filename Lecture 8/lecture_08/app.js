const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const static = express.static(__dirname + '/public'); // direct name + "public" folder

const configRoutes = require("./routes");
const exphbs  = require('express-handlebars');

app.use("/public", static);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));// handlebars 这个位置的东西可不能乱命名，像./views/layouts/main.handlebars这个就不行，一定要左边那样
app.set('view engine', 'handlebars');

configRoutes(app);

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});
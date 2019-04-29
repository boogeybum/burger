var express = require("express");
var methodOverride = require("method-override");
var routes = require("./controllers/burgers_controller");

var PORT = process.env.PORT || 8080;

// set up app
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function() {
    console.log("Eat-Da-Burger App is listening on PORT " + PORT);
});
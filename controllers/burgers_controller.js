// import required express and set router
var express = require("express");
var router = express.Router();

// require burger.js to use database functions
var burger = require("../models/burger");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var burgerObject = {
            burgers: data
        };
        res.render("index", burgerObject);
    });
});

router.post("/", function(req, res) {
    burger.insertOne([
        "burger_name",
    ], [
        req.body.burger_name
    ], function(data) {
        // res.json({ id: data.insertId });
        res.redirect("/");
    });
});

router.put("/", function(req, res) {
    var burgerState = "id = " + req.params.id;
    burger.updateOne({
        devoured: true
    }, burgerState, function(data) {
        res.redirect("/");
    });
});

// export router
module.exports = router;
var orm = require("../config/orm");

// Call the ORM for burger specific input for the ORM
var burger = {
    // select all entires in table
    selectAll: function(callBack) {
        orm.selectAll("burgers", function(res) {
            callBack(res);
        });
    },

    // input into one of the entries
    insertOne: function(cols, vals, callBack) {
        orm.insertOne("burgers", cols, vals, function(res) {
            callBack(res);
        });
    },

    // update one of the table entries
    updateOne: function(objColVals, condition, callBack) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            callBack(res);
        });
    }
};

// export the function for use in the controller
module.exports = burger;
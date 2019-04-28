// import mysql connection
var connection = require("../config/connection");

// generate question marks needed to run the query
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();


}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
    //   var value = ob[key];
    //   // check to skip hidden properties
    //   if (Object.hasOwnProperty.call(ob, key)) {
    //     // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
    //     if (typeof value === "string" && value.indexOf(" ") >= 0) {
    //       value = "'" + value + "'";
    //     }
    //     // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
    //     // e.g. {sleepy: true} => ["sleepy=true"]
    //     arr.push(key + "=" + value);
    //   }
        
        // ==============================
        // Above code is based on CatsApp example (not sure if needed)
        arr.push(key + "=" + value);
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
}
  

var orm = {
    // select all the data from burgers_db
    selectAll: function(tableInput, callBack) {
        // query string for returning all rows in table
        var queryString = "SELECT * FROM " + tableInput + ";";

        // execute query string and bring back results
        connection.query(queryString, function(err, res) {
            if (err) {
                throw err;
            }
            callBack(res);
        });
    },

    // insert one entry into the burgers_db
    insertOne: function(table, cols, vals, callBack) {
        var queryString = "INSERT INTO " + table;
    
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    
        console.log(queryString);
    
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
    
          callBack(result);
        });
      },

    // update one record in the burgers_db
    updateOne: function(table, objColVals, condition, callBack) {
        var queryString = "UPDATE " + table;
    
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
    
            callBack(result);
        });
    }
};

// export the orm object
module.exports = orm;
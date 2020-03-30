// Import MySQL connection.
var connection = require("../config/connection.js");



// Object for all our SQL statement functions.
var orm = {
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    insertOne: function(table, value, cb) {
      var queryString = "INSERT INTO " + table + " SET ?";
      
      connection.query(queryString, value, function(err, result) {
        if (err) {
          console.log("Insert into err", err)
          throw err;
        }
        cb(result);
      });
    },
   
    updateOne: function(table, condition, id, cb) {
      var queryString = "UPDATE " + table + " SET " + condition + " WHERE id = ?";

      console.log(queryString);
      connection.query(queryString, id,  function(err, result) {
        if (err) {
          throw err;
        };

        cb(result);
      });
    }
  };
  
  // Export the orm object for the model (cat.js).
  module.exports = orm;
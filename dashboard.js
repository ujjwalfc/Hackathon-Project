//require the module
var mysql = require('mysql');

console.log("Lib Include");

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "mypassword"
// });

const con = mysql.createConnection({
  host: 'localhost',
  port: '3030',
  user: 'root',
//  database: 'mysql',
  password: 'mypassword'
 });

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   /*Create a database named "mydb":*/
//   con.query("CREATE DATABASE mydb", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });

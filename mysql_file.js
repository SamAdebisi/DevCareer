// let mysql = require('mysql');
import mysql from 'mysql';

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database : "mydb",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  // con.query("CREATE DATABASE mydb", function (err, result) {
  let sql = "CREATE TABLE currencyTable (id int(11) NOT NULL AUTO_INCREMENT, currencyName varchar(50), currencyCode int(20),currencyNumber int(20), PRIMARY KEY (currencyName))"; 
  
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Result: " + result);
//   });
});

// CREATE DATABASE mydb1 CHARACTER SET utf8 COLLATE utf8_general_ci;
// USE mydb1;

// CREATE TABLE currencyTable (
//   id int(11) NOT NULL AUTO_INCREMENT,
//   currencyName varchar(50),
//   currencyCode int(20),
//   currencyNumber int(20),
//   PRIMARY KEY (currencyName)
// ) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

// INSERT INTO currencyTable (currencyName, currencyCode, currencyNumber) VALUES
// (1, "EUROPEAN EURO", "EUR", 300),
// (2, "American Dollar", "USR", 900),
// (3, "Ghana Cedi", "CED", 100),
// (4, "Great-Britain Pounds-Sterling", "GBP", 450);

module.exports = con;
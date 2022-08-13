// var mysql = require('mysql');
// // var express = require('express');

// console.log("Lib Include");

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "newuser",
//   password: "Ravi123@",
//   port: 3307,
//   connectionLimit: 10,
// });



// const con = mysql.createConnection({
//   host: 'localhost',
//   port: '3030',
//   user: 'root',
// //  database: 'mysql',
//   password: 'mypassword'
// //  });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// const app = express();

// app.get('/createdb', (req,res) => {
//   let sql = '/CREATE DATABASE nodemysql';
//   db.query(sql,(err,result) => {
//     if(err) throw err;
//     console.log(result);
//     res.send('Database Created')
//   });
// });
  

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   /*Create a database named "mydb":*/
//   con.query("CREATE DATABASE mydb", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });

// async function getAddress() {
//   console.log("Your ID is:", user);
//   console.log(user.get("ethAddress"));
// }




// async function login(){
//   window.location.href = 'Form.html';
//   console.log("Formpage");
// }
    
// document.getElementById("btn-AddVault").onclick = login;
// // document.getElementById("btn-mod").onclick = getAddress;

/* import moralis */
const Moralis = require("moralis-v1/node");
const serverUrl = "https://dcprckkdugvp.usemoralis.com:2053/server";
const appId = "BUZNDC2693Foup35DL8MIZV5mXpApCDoQtdQdCfx";
const masterKey = "dr6FDp3aZfNt4rREQGW2k86Y10T1ggBixe1fO5hj";

Moralis.start({ serverUrl, appId });

const SaveData = async () => {
  await Moralis.start({ serverUrl, appId, masterKey });

  const Monster = Moralis.Object.extend("Monster");
  const monster = new Monster();

  monster.set("Nomaniee", "Satoshi");
  monster.set("VaultName", "Aegon");
  monster.set("CycleTime", 20);

  await monster.save();
};

const FindQuery = async () => {
  const Monster = Moralis.Object.extend("Monster");
  const query = new Moralis.Query("Monster");

  const results = await query.find();
  console.log(results);
};

SaveData();
//FindQuery();

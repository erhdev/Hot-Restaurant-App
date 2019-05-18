//const http = require('http');
const path = require('path');
const nodemon = require('nodemon');
//const members = require('./app/data/friends');

const express = require('express');
const app = express();

const mysql = require('mysql');
require('dotenv').config();

// function Queries() {
// this.
    
// }

// Define the MySQL connection parameters
let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3306,

    // Your username
    user: process.env.DB_USER,

    // Your password
    password: process.env.DB_PASS,
    database: 'hotRestaurantApp'
});



// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "/makeres.html"));
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/home.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "/viewres.html"));
});

// create new waitlist
app.post("/api/waitlist", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newRes = req.body;



    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newRes.routeName = newRes.name.replace(/\s+/g, "").toLowerCase();

    members.push(newFriend);
    res.json(matchedFriend);
});

app.post("/api/tables", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriend = req.body;

    connection.query(`INSERT INTO hotRestaurantApp (res_name, email, phone, unique_id) VALUES`, function (error, results, fields) {
        if (error) throw error;
        console.log('deleted ' + results.affectedRows + ' rows');
    })

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();



    members.push(newFriend);
    res.json(matchedFriend);
});


const PORT = process.env.port || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

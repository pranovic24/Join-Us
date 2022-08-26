var express = require('express');
var mysql = require('mysql');

var app = express();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'join_us'
});

// app.get('/', function(req, res) {
// 	// console.log(req);
// 	// console.log("SOMEONE REQUESTED US!")
// 	res.send("WELCOME TO THE HOME PAGE");
// });

app.get('/', function(req, res) {
	// Find count of users in DB
	var q = "SELECT COUNT(*) AS count FROM users";
	connection.query(q, function(err, results) {
		if (err) throw err;
		var count = results[0].count;
		// Respond with that count
		res.send("We have " + count + " users in our db");
	});
});

app.get('/joke', function(req, res) {
	var joke = "<strong>What do you call a dog that does magic tricks?</strong> <em>A labracadabrador</em>.";
	// console.log("REQUESTED THE JOKE ROUTE!")
	res.send(joke);
});

app.get('/random_num', function(req, res) {
	var num = Math.floor((Math.random() * 10) + 1);
	res.send("Your lucky number is " + num);
})

app.listen(3000, function() {
	console.log("Server running on 3000!")
});
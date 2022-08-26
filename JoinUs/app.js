var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');

var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

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
		// res.send("We have " + count + " users in our db");
		res.render("home", {data: count});
	});
});

app.post('/register', function(req, res) {
	// a Post route!
	// console.log("POST REQUEST SENT TO /REGISTER email is " + req.body.email);
	// console.log(req.body);
	// var email = req.body.email;
	var person = { 
		email: req.body.email
	};
	
	connection.query('INSERT INTO users SET ?', person, function(err, result) {
		if (err) throw err;
		// console.log(result);
		// res.send("Thanks for joining our waitlist!")
		res.redirect("/");
	});
});

app.get('/joke', function(req, res) {
	var joke = "<strong>What do you call a dog that does magic tricks?</strong> <em>A labracadabrador</em>.";
	// console.log("REQUESTED THE JOKE ROUTE!")
	res.send(joke);
	// res.render("home");
});

app.get('/random_num', function(req, res) {
	var num = Math.floor((Math.random() * 10) + 1);
	res.send("Your lucky number is " + num);
	
})

app.listen(3000, function() {
	console.log("Server running on 3000!")
});
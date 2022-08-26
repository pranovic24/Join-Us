var express = require('express');
var app = express();

app.get('/', function(req, res) {
	// console.log(req);
	// console.log("SOMEONE REQUESTED US!")
	res.send("WELCOME TO THE HOME PAGE");
});

app.get('/joke', function(req, res) {
	var joke = "What do you call a dog that does magic tricks? A labracadabrador.";
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
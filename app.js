const { faker } = require('@faker-js/faker');
var mysql = require('mysql');
 
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'join_us'
});

// Selecting Data
// var q = 'SELECT COUNT(*) AS total FROM users';

// connection.query(q, function (error, results, fields) {
//    if (error) throw error;
// 	console.log(results[0].total);
// });

// Inserting Data

// var q = 'INSERT INTO users(email) VALUES ("rusty_the_dog@dogmail.com")';

// connection.query(q, function (error, results, fields) {
//    if (error) throw error;
// 	console.log(results);
// });

// connection.end();

// Inserting Data 2
// var person = { 
// 	email: faker.internet.email(),
// 	created_at: faker.date.past()	
// };

// var end_result = connection.query('INSERT INTO users SET ?', person, function(err, result) {
//   if (err) throw err;
//   console.log(result);
// });

// connection.end();

// Inserting lots of database
var data = [];
for (var i = 0; i < 500; i ++) {
	data.push([
		faker.internet.email(),
		faker.date.past()
	]);
}

var q = 'INSERT INTO users (email, created_at) VALUES ?';

connection.query(q, [data], function(err, result) {
  // if (err) throw err;
	console.log(err);
	console.log(result);
});

connection.end();


// console.log(faker.internet.email());
// console.log(faker.date.past());
// // faker.date.past();

// console.log(faker.address.streetAddress());
// console.log(faker.address.city());

// function generateAddress() {
// 	console.log(faker.address.streetAddress());
// 	console.log(faker.address.city());
// 	console.log(faker.address.state());
// }

// generateAddress();
// generateAddress();
// generateAddress();
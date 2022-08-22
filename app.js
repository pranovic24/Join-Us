const { faker } = require('@faker-js/faker');
var mysql = require('mysql');
 
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'join_us'
});

var q = 'SELECT CURTIME() AS time, CURDATE() AS date, NOW() AS now';

connection.query(q, function (error, results, fields) {
   if (error) throw error;
	console.log(results[0].time);
	console.log(results[0].date);
	console.log(results[0].now);
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
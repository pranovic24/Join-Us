const { faker } = require('@faker-js/faker');

// console.log(faker.internet.email());
// console.log(faker.date.past());
// // faker.date.past();

// console.log(faker.address.streetAddress());
// console.log(faker.address.city());

function generateAddress() {
	console.log(faker.address.streetAddress());
	console.log(faker.address.city());
	console.log(faker.address.state());
}

generateAddress();
generateAddress();
generateAddress();
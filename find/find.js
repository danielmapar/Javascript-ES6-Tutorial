var users = [
	{ name: 'Jill' },
	{ name: 'Alex' },
	{ name: 'Bill'},
	{ name: 'Alex' }
];

// Only the first one will be returned by the find helper
var user = users.find(function(user) {
	return user.name === 'Alex';
});

console.log(user);

function Car(model) {
	this.model = model;
} 

var cars = [
	new Car('Buick'),
	new Car('Camaro'),
	new Car('Focus')
];

var car = cars.find(function(car) {
	return car.model === 'Buick';
});

console.log('car: ', car);

var users2 = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users2.find(function(user) {
    return user.admin === true;
});

var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find(function(account) {
    return account.balance === 12;
});

function findWhere(array, criteria) {
    return array.find(function(entry) {
        return entry[Object.keys(criteria)[0]] === criteria[Object.keys(criteria)[0]]; 
    });
}
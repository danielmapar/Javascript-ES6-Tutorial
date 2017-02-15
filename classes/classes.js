function Car(options) {
	this.title = options.title;
}

Car.prototype.drive = function() {
	return 'vroom';
};

Car.prototype.honk = function() {
	return 'generic';
};

function Toyota(options) {
	Car.call(this, options);
	this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function() {
	return Car.prototype.honk() + " Beeb!";
}


const car = new Car({title: "Focus"});
const toyota = new Toyota({
	title: "Focus",
	color: 'test'
});

console.log(car);
console.log(car.drive());

console.log(toyota.constructor);
console.log(toyota.drive());
console.log(toyota.honk());
class Car {
	// To initialize this object we have the constructor method
	constructor({ title }) {
		this.title = title;
	}
	//no need to use commas to separate functions

	// enhanced literal syntax 
	// drive: function() { return 'vroom'; }
	// is now
	drive() {
		return 'vroom';
	}

	honk() {
		return 'generic';
	}
}

class Toyota extends Car {
	constructor(options) {
		super(options); // Car.constructor()
		this.color = options.color;
	}

	honk() {
		return super.honk() + ' beep';
	}
}

const car = new Car({
	title: "Toyota"
});

const toyota = new Toyota({
	title: "Toyota",
	color: "black"
});

console.log(car);
console.log(car.drive());

console.log("-----");

console.log(toyota);
console.log(toyota.honk());
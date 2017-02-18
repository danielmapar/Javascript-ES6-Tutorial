function *colors() {
	yield 'red';
	yield 'blue';
	yield 'green';
}

const myColors = [];

// for of loops works perfectly with generators 
// it extracts the values, no need to call next.. etc..
for (let color of colors()) {
	myColors.push(color);
}

console.log(myColors);
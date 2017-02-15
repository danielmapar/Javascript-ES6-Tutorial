var expense = {
	type: 'Business',
	amount: '$45 USD'
};


// ES5

//var type = expense.type;
//var amount = expense.amount;

// ES6 - Destructuring an object

//const { type } = expense;
//const { amount } = expense;

const { type, amount } = expense;

// Also

var savedFile = {
	extension: 'jpg',
	name: 'repost',
	size: 14040
};

function fileSummary({extension, name, size}, {color}) {
	return `The file ${name}.${extension} is of size ${size} and color ${color}`;
}

console.log(fileSummary(savedFile, {color: 'red'}));

// ES6 - Destructuring an array

const companies = [
	'Google',
	'Facebook',
	'Uber'
];

// We use the square braces to destructure an element
const [ name, name2, name3 ] = companies; // first position of the array
console.log(name);
console.log(name2);
console.log(name3);

// We use the curly braces to destructure a property
const { length } = companies;
console.log(length);

// This also works:
const { length: sizeOfArray } = companies;
console.log(sizeOfArray);

// We can also use the spread operator to get the rest of the values
const [ firstCompanyName, ...otherComapaniesNames ] = companies;
console.log("firstCompanyName: ", firstCompanyName);
console.log("otherComapaniesNames: ", otherComapaniesNames);

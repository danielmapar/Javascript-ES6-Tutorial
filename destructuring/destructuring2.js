// VERY IMPORTANT 
// Mixing destructuring arrays and objects
let companiesDetails = [
	{ companyName: 'Google', location: 'Mountain View' },
	{ companyName: 'Facebook', location: 'Menlo Park' },
	{ companyName: 'Uber', location: 'San Francisco' }
];

// const [ { location } = first, { companyName } = second ] = companiesDetails;
// console.log("first location: ", location, " second name: ", companyName);

// Also
const [ { location } ] = companiesDetails;
console.log("location: ", location);

const [ { location: locationMyName } ] = companiesDetails;
console.log("locationMyName: ", locationMyName);

const Google = {
	locations: ['Mountain View', 'New York', 'London']
};

// Pull of property locations, and after that get the first entry of this array
const { locations: [ locationGoogle ] } = Google;
const { locations:[,location2] } = Google;

console.log("location: ", locationGoogle);
console.log("location2: ", location2);

const Facebook = {
	name: 'Test'
};

const { name: nameFacebook } = Facebook;

console.log("nameFacebook: ", nameFacebook); 

// Example

// Destructure object in signature
function signup( { username, password, email, dateOfBirth, city } ) {
	// create new user
}
const user = {
	username: 'daniel',
	password: '123',
	email: 'este@teste.com',
	dateOfBirth: '1/1/1900',
	city: 'BH'
};

signup(user);

// Example

const points = [
	[4, 5],
	[10, 1],
	[0, 40]
];

/*const newPoints = points.map(pair => {
	const [ x, y ] = pair;
	return { x, y };
});*/

const newPoints = points.map(([ x, y ]) => {
	return { x, y };
});

console.log("newPoints: ", newPoints);


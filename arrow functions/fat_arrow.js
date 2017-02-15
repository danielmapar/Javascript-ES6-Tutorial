const add = (a, b) => {
	return a + b;
}

console.log(add(1, 2));

// implict return (no curly braces)
const add1 = (a, b) => a + b

console.log(add1(1, 2));

// if you have a single argument you can do

const double = number => 2 * number;
console.log(double(1));

const numbers = [1, 2, 3];
const double2 = numbers.map(number => number * 2);

console.log(double2);

const team = {
	members: ['Jane', 'Bill'],
	teamName: 'Super Squad',
	teamSummary: function() {
		/*
		Solution one
		return this.members.map(function(member) {
			return `${member} is on team ${this.teamName}`;
		}.bind(this));
		*/
		/*
		Solution two
		var self = this;
		return this.members.map(function(member) {
			return `${member} is on team ${self.teamName}`;
		});
		*/
		/*
		Far arrow functions use a lexical this
		lexical = where we place the word this, will chage
		when we use a fat arrow function

		Since we are using a fat arrow function, this will be
		searched for in the surrounding context (this actual function)
		Inside this function this === team
		*/
		return this.members.map(member => {
			return `${member} is on team ${this.teamName}`;
			// return `${member} is on team ${team.teamName}`;
		});
	}
};

console.log(team.teamSummary());


// -- Exercise

const fibonacci = n => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Arrow functions bind the value of 'this' to the 
// surrounding context, and sometimes this isn't the behavior we expect.

this.test = "Daniel";

const profile = {
    name: 'Alex',
    getName: () => { console.log(this) }
};

console.log(profile.getName());


/*const profile = {
    name: 'Alex',
    getName: function() { return this.name }
};*/


// Symbol iterator
// Is a tool that teaches objects how to respond to the for of loop

function getName() {
	return 'Daniel';
}

const testingTeam = {
	lead: 'Amanda',
	tester: 'Bill',
	// Key interpolation -> dynamically generate keys
	[Symbol.iterator]: function* () {
		yield this.lead;
		yield this.tester;
	},
	['name' + getName()]: "Daniel"
};

const engineeringTeam = {
	testingTeam,
	size: 3,
	departament: 'Engineering',
	lead: 'Jill',
	manager: 'Alex',
	engineer: 'Dave',
	[Symbol.iterator]: function* () {
		yield this.lead;
		yield this.manager;
		yield this.engineer;
		yield* this.testingTeam;
	}
};

for(let member of engineeringTeam) {
	console.log(member);
}


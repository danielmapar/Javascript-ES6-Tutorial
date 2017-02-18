// GENERATORS DELEGATION
const testingTeam = {
	lead: 'Amanda',
	tester: 'Bill'
};

const engineeringTeam = {
	testingTeam,
	size: 3,
	departament: 'Engineering',
	lead: 'Jill',
	manager: 'Alex',
	engineer: 'Dave' 
};

function* TestingTeamIterator(team) {
	yield team.lead;
	yield team.tester;
}

function* EngineeringTeamIterator(team) {
	yield team.lead;
	yield team.manager;
	yield team.engineer;
	// GENERATOR DELEGATION
	// I am basically delegating one generator to another
	// and by using yield* I am telling my generator
	// to go over all yield statements inside my other generator
	yield* TestingTeamIterator(team.testingTeam);
	// or 
	// const gen = TestingTeamIterator(team.testingTeam)
	// yield* gen;

}

for(let member of EngineeringTeamIterator(engineeringTeam)) {
	console.log(member);
}
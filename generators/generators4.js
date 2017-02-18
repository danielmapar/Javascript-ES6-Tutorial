const engineeringTeam = {
	size: 3,
	departament: 'Engineering',
	lead: 'Jill',
	manager: 'Alex',
	engineer: 'Dave'
};

function* TeamIterator(team) {
	yield team.lead;
	yield team.manager;
	yield team.engineer;
}

for(let member of TeamIterator(engineeringTeam)) {
	console.log(member);
}
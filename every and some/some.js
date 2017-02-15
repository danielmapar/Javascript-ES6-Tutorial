var computers = [
	{ name: 'Apple', ram: 24 },
	{ name: 'Compaq', ram: 4 },
	{ name: 'Acer', ram: 32 }
];

// Do I have any computers that can run the program (some)
// Does all computers run the program (every)
// Boolean value

var someComputersCanRunProgram = computers.some(function(computer) {
	return computer.ram > 16;
});

console.log("someComputersCanRunProgram: ", someComputersCanRunProgram);

// -- Another example

var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some(function(request) {
    return request.status === 'pending';
});
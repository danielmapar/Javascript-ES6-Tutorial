var computers = [
	{ name: 'Apple', ram: 24 },
	{ name: 'Compaq', ram: 4 },
	{ name: 'Acer', ram: 32 }
];

// Do I have any computers that can run the program (some)
// Does all computers run the program (every)
// Boolean value

var allComputersCanRunProgram = computers.every(function(computer) {
	return computer.ram > 16;
});

console.log("allComputersCanRunProgram: ", allComputersCanRunProgram);

// ---- Another simple example

var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(function(user) {
    return user.hasSubmitted;
});

// ---- Pratical example

function Field(value) {
	this.value = value;
}

Field.prototype.validate = function() {
	return this.value.length > 0;
};

var username = new Field('');
var password = new Field('my_password');
var birthday = new Field('10/10/2010');

var fields = [username, password, birthday];

var validForm = fields.every(function(field) {
	return field.validate();
});

console.log("validForm: ", validForm);


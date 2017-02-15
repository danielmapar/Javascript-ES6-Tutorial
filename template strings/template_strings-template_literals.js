function getMessage() {
	const year = new Date().getFullYear();

	return `This year is ${year}`;
	// Any valid JS expression
	// return `This year is ${new Date().getFullYear()}`;
}

console.log(getMessage());

// Native promises implementation ES6

let promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject();
	}, 3000);
});

promise.then(() => {
	console.log('it is done for real!');
}).then(() => {
	console.log('it is done for real man... come on!');
}).catch(() => {
	console.log('rejected!!!');
});

const url = "https://jsonplaceholder.typicode.com/posts/"
fetch(url).then((response) => {
	console.log(response);
}).catch((error) => { // catch only runs when the network fails (not including 4040, or codes above 300)
	console.log(error);
}); 
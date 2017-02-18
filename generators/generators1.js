function* numbers() {
	yield {test: 'teste'}; // produce or provide
}

const gen = numbers();
//console.log(gen.next());
//console.log(gen.next());


function* shopping() {
	console.log("enter");
	// stuff on the sidewalk

	// walking down the sidewalk

	// go into the store with cash

	const stuffFromStore = yield 'cash';

	console.log("leave");

	// walking back home

	console.log("stuffFromStore: ", stuffFromStore);

	return stuffFromStore + " happines";
}

const gen2 = shopping();
console.log(gen2.next());
console.log(gen2.next('product'));
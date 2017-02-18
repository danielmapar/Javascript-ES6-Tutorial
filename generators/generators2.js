function* shopping() {
	console.log("enter");
	// stuff on the sidewalk

	// walking down the sidewalk

	// go into the store with cash

	const stuffFromStore = yield 'cash';

	// walking to laundry
	const cleanClothes = yield 'laundry';

	// walking back home

	return [stuffFromStore, cleanClothes];
}

const gen2 = shopping();
console.log(gen2.next());
console.log(gen2.next('product'));
console.log(gen2.next('clothes'));
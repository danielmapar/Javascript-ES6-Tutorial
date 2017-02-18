// You cannot use generator / yield with array helpers (map, forEach, etc..)
class Comment {
	constructor(content, children) {
		this.content = content;
		this.children = children;
	}
	
	// you can use key interpolation in this case
	// because.. remember:
	// key: function()
	// this is an enhanced object literal
	// [Symbol.iterator]: *function() {}
	*[Symbol.iterator]() {
		yield this.content;
		for (let child of this.children) {
			yield* child;
		}
	}


	['test' + 'Function']() {
		console.log('teste');
	}
}

const children = [
	new Comment('good comment', []),
	new Comment('bad comment', []),
	new Comment('meh', [])
];

const tree = new Comment('Great post!', children);

tree.testFunction()

for (let value of tree) {
	console.log(value);
}
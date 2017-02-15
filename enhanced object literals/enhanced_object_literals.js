function createBookShop(inventory) {
	// This is an object literal
	// Ins ES6 we can remove and simplify some stuff
	// Example: keys and values with identical names --> condense inventory : inventory to just inventory
	// and the fact that you dont need to use the "function" key word
	return {
		inventory, // single statement beacause key and value have identical name
		inventoryValue: function() {
			return this.inventory.reduce((total, book) => total + book.price, 0);
		},
		priceForTitle: function(title) {
			return this.inventory.find(book => book.title === title);
		},
		// In ES6 they decided to remove the :function 
		// that way writing thisIsAFunction: function()
		// is the same as thisIsAFunction()
		// Also, this is not a fat arrow function short cut,
		// this is an actual function short cut
		thisIsAFunction(test) {
			console.log(this);
			return test;
		}
	}
};


const inventory = [
	{ title: "Harry Potter", price: 10 },
	{ title: "Eloquent Javascript", price: 20 }
];

const bookShop = createBookShop(inventory);
// bookShop.inventory = []; Consts are not immutable

console.log("Total: ", bookShop.inventoryValue());
console.log("Book: ", bookShop.priceForTitle("Eloquent Javascript"));

console.log("Test: ", bookShop.thisIsAFunction("Eloquent Javascript"));



// -- Exercise

const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red, blue };

// -- Exercise

const fields = ['firstName', 'lastName', 'phoneNumber'];
      
const props = { fields };

// -- Exercise

const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return { 
    width, 
    height 
  };
}

// -- Exercise

const color = 'red';

const Car = {
  color,
  drive() {
    return 'Vroom!';
  },
  getColor() {
    return this.color;
  }
};
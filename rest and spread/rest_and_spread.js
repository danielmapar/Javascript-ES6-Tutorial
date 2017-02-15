// Rest operator
// I accepts that I have an unknown number of arguments
// I want to capture those arguments and put in a single array
function addNumbers(...numbers) {
	return numbers.reduce((sum, number) => {
		return sum + number;
	}, 0);
}

console.log(addNumbers(1,2,3));

// Spread operator
const defaultColors = ['red', 'green'];
const favoriteColors = ['orange', 'yellow'];
const fallColors = ['orange', 'yellow'];

// Spread is flatting out the array
console.log([...defaultColors, ...favoriteColors, ...fallColors]);
console.log([...defaultColors, favoriteColors]);

// Similar to ES5
console.log(defaultColors.concat(favoriteColors).concat(fallColors));

function validateShoppingList(...items) {
	if (items.indexOf('milk') < 0) {
		items = ['milk', ...items];
	}
	return items;
}

let list = validateShoppingList('apple', 'orange');
console.log(list);

// Exercise 

function product(...numbers) {
  
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}

// Exercise 

function join(array1, array2) {
  return [...array1, ...array2];
}

// Exercise

function unshift(array, ...array2) {
  return array2.concat(array);
}
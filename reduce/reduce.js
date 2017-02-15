var numbers = [ 10, 20, 30 ];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
	sum += numbers[i];
}

var total = numbers.reduce(function(sum, number) {
	return sum + number;
}, 0);

console.log("total: ", total);

// -- Example

var primaryColors = [
	{ color: 'red' },
	{ color: 'yellow' },
	{ color: 'blue' }
];

var colors = primaryColors.reduce(function(previous, primaryColor) {
	previous.push(primaryColor.color);
	return previous;
}, []);

console.log('colors: ', colors);

// -- Another example

var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(total, trip) {
    return total + trip.distance;
}, 0);

// -- Exercise

var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(obj, desk) {
    obj.sitting += desk.type === 'sitting' ? 1 : 0;
    obj.standing += desk.type === 'standing' ? 1 : 0;
    return obj;
}, { sitting: 0, standing: 0 });

// -- Exercise

function unique(array) {
    return array.reduce(function(finalArray, entry) {
        if (finalArray.indexOf(entry) === -1) {
            finalArray.push(entry);
        }
        return finalArray;
    }, []);
  
}

// -- Interview question

var balance = ")()(".split('');

var result = balance.reduce(function(previous, current) {
	console.log(previous);
	if (current === '(' && previous >= 0) {
		return ++previous;
	} else if (current === ')') {
		return --previous;
	}
	return previous;
}, 0);

console.log("result: ", result === 0);
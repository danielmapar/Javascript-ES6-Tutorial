/*
It's misleading to say that const means a 
variable cannot change, as you can declare an 
object as a const but still change its properties, 
the same for arrays.

It just cannot be reassigned.
*/
const name = "Daniel"; // constant
let title = "Software Engineer"; // variable

//using var

for(var i =0;i<10;i++){// do something
}

console.log(i);

//using let

// ReferenceError: j is not defined
/* 
	"let allows you to declare variables that are 
	limited in scope to the block, statement, or 
	expression on which it is used. This is unlike the 
	var keyword, which defines a variable globally, or 
	locally to an entire function regardless of block scope." 
*/
for(let j =0;j<10;j++){// do something
}
// console.log(j);

// Another example

var funcs = [];
for (var x = 0; x < 3; x++) {          
    funcs[x] = function() {            
      console.log("My value: " + x); 
    };
}

var funcsFix = [];
for (var x = 0; x < 3; x++) {          
    funcsFix[x] = (function(value) {   
    	return function() {
    		console.log("My value: " + value); 
    	}         
    })(x);
}

/*
Just like before, where each inner function outputted 
the last value assigned to i, now each inner function 
just outputs the last value assigned to ilocal. But shouldn't 
each iteration have it's own ilocal?

Turns out, that's the issue. Each iteration is sharing 
the same scope, so every iteration after the first is just 
overwriting ilocal
*/
var funcsBroke = {};
for (var z = 0; z < 3; z++) {
    var ilocal = z; //create a new local variable
    funcsBroke[z] = function() {
        console.log("My value: " + ilocal); //each should reference its own local variable
    };
}

var funcsLet = [];
for (let y = 0; y < 3; y++) {          
    funcsLet[y] = function() {            
      console.log("My value: " + y); 
    };
}

funcs[1](); // this is broke
funcsFix[1]();
funcsBroke[1](); // this still broke
funcsLet[1]();
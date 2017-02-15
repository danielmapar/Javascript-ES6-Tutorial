function makeAjaxRequest(url, method = 'GET') {
	// LOGIC
	return method;
}

console.log(makeAjaxRequest('google.com'));
console.log(makeAjaxRequest('google.com', 'POST'));
console.log(makeAjaxRequest('google.com', undefined));
console.log(makeAjaxRequest('google.com', null));

// Exercise 

function sum(a = 0, b = 0) {
  return a + b;
}

// Exercise

function addOffset(style = {}) {

  style.offset = '10px';
  
  return style;
}
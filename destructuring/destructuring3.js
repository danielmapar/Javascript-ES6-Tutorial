// Exercise

const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineer({title, department}) {
  return title === 'Engineer' && department === 'Engineering';
}

console.log(isEngineer(profile));

// Exercise 2

const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
    return {subject, time, teacher};
});

console.log(classesAsObject);

// Exercise 3

const numbers2 = [1, 2, 3];

function double([a, b, c]) {
    return [a*2, b*2, c*2];
}

double(numbers2);

// Exercise 4

const numbers = [1, 2, 3];

function double([number, ...rest]) {
    return !number ? [] : [number * 2, ...double(rest)];
}


console.log(double(numbers));


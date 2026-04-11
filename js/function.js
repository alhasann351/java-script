console.log('Function Example');

//normal function
function sleep() {
    console.log('This is function');
}
sleep();

function nameAge(name, age) {
console.log(`My name is ${name}, I am ${age} years old`)
}
nameAge('Al Hasan', '25');

let result = sum(4, 5);
console.log(result);
function sum(a, b) {
    return a * b;
}

//arrow function
myName = () => "Hasan";
console.log(myName());

num = (a, b) => a + b;
console.log(num(4, 5));

res = (a, b) => {
    let result = a - b;
    console.log(result);
    return result;
}
res(5, 3);
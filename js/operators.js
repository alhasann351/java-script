const example1 = document.getElementById("example1");
const example2 = document.getElementById("example2");
const example3 = document.getElementById("example3");
const example4 = document.getElementById("example4");
const example5 = document.getElementById("example5");
const example6 = document.getElementById("example6");
const example7 = document.getElementById("example7");
const example8 = document.getElementById("example8");

//arithmetic operators
const num1 = 10;
const num2 = 5;

const sum = num1 + num2;
example1.textContent = `Addition: ${num1} + ${num2} = ${sum}`;

const subtraction = num1 - num2;
example2.textContent = `Subtraction: ${num1} - ${num2} = ${subtraction}`;

const multiplication = num1 * num2;
example3.textContent = `Multiplication: ${num1} * ${num2} = ${multiplication}`;

const division = num1 / num2;
example4.textContent = `Division: ${num1} / ${num2} = ${division}`;

//assignment operator
let score = 10;
score += 5;
example5.textContent = `Assignment: score += 5 হলে score = ${score}`;

//comparison operators
const isGreater = num1 > num2;
example6.textContent = `Comparison: ${num1} > ${num2} = ${isGreater}`;

const isEqual = num1 === num2;
example7.textContent = `Comparison: ${num1} === ${num2} = ${isEqual}`;

//logical operator
const age = 20;
const hasIdCard = true;
const canEnter = age >= 18 && hasIdCard;
example8.textContent = `Logical: age >= 18 && hasIdCard = ${canEnter}`;

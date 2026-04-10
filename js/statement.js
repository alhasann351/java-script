//if else
const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");

const age = 20;

if (age >= 18) {
  output1.textContent = "You are an adult.";
} else {
  output1.textContent = "You are not an adult.";
}

const marks = 75;

if (marks >= 80) {
  output2.textContent = "Grade: A+";
} else if (marks >= 70) {
  output2.textContent = "Grade: A";
} else {
  output2.textContent = "Grade: B or below";
}

//switch
const output3 = document.getElementById("output3");

const day = 3;
let dayName = "";

switch (day) {
  case 1:
    dayName = "Saturday";
    break;
  case 2:
    dayName = "Sunday";
    break;
  case 3:
    dayName = "Monday";
    break;
  case 4:
    dayName = "Tuesday";
    break;
  case 5:
    dayName = "Wednesday";
    break;
  case 6:
    dayName = "Thursday";
    break;
  case 7:
    dayName = "Friday";
    break;
  default:
    dayName = "Invalid day";
}

if (output3) {
  output3.textContent = `Day ${day} means ${dayName}`;
}

//for loop
const output4 = document.getElementById("output4");

let numbersText = "";

for (let i = 1; i <= 5; i += 1) {
  numbersText += ` ${i}`;
}

if (output4) {
  output4.textContent = `Numbers:${numbersText}`;
}

//while loop
const output5 = document.getElementById("output5");

let count = 1;
let resultText = "";

while (count <= 5) {
  resultText += ` ${count}`;
  count += 1;
}

if (output5) {
  output5.textContent = `Count:${resultText}`;
}
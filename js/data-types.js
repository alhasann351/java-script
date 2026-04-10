//string
const output1 = document.getElementById("output1");
const myName = "Hasan";
output1.textContent = `My name is ${myName}, Type: ${typeof myName}`;

//number
const output2 = document.getElementById("output2");
const price = 100;
output2.textContent = `Price is ${price}, Type: ${typeof price}`;

//bigint
const output3 = document.getElementById("output3");
const largeNumber = 1234567890123456789012345678901234567890n;
output3.textContent = `Large number is ${largeNumber}, Type: ${typeof largeNumber}`;

//bigint
const output4 = document.getElementById("output4");
const isLogin = true;
output4.textContent = `Is login ${isLogin}, Type: ${typeof isLogin}`;

//object
const output5 = document.getElementById("output5");
const user = {
    firstName: "Hasan",
    lastName: "Ahmed",
    age: 22
};
output5.textContent = `User: ${user.firstName} ${user.lastName}, Age: ${user.age}, Type: ${typeof user}`;

//undefined
const output6 = document.getElementById("output6");
let favoriteColor;
output6.textContent = `Value: ${favoriteColor}, Type: ${typeof favoriteColor}`;

//null
const output7 = document.getElementById("output7");
let num = null;
output6.textContent = `Value: ${num}, Type: ${typeof num}`;

//symbol
const output8 = document.getElementById("output8");
const id1 = Symbol("userId");
const id2 = Symbol("userId");
output8.textContent = `Type of id1: ${typeof id1}, Type of id2: ${typeof id2}`;

//array
let value = [1, "Hasan", null, false];
console.log(value);
console.log(value[0]);
console.log(value[1]);
console.log(value[2]);
console.log(value[3]);
value[4] = "Al Hasan";
console.log(value[4]);
value[2] = 2;
console.log(value);
console.log(typeof value);
console.log(`Array length: ${value.length}`);

//array method
let num = [1, 2, 3, 4];
let res = num.toString();
console.log(res, typeof res);
let s = num.join("_");
console.log(s, typeof s);
num.pop();
console.log(num);

const output = document.getElementById("demo1");
const output2 = document.getElementById("demo2");
let arr = ["Hasan", "Karim", "Manik"];
output.textContent = arr;
arr.push("Rakib");
output2.textContent = arr;

const output3 = document.getElementById("demo3");
let arr2 = ["Hasan", "Karim", "Manik"];
output.textContent = arr2;
arr2.shift();
output3.textContent = arr2;

const output4 = document.getElementById("demo4");
let arr3 = ["Hasan", "Karim", "Manik"];
delete arr3[1];
output4.textContent = arr3;

const output5 = document.getElementById("demo5");
let nameArray = ["Hasan", "Karim", "Manik"];
let age = [25, 26, 75];
let con = nameArray.concat(age);
output5.textContent = con;

const output6 = document.getElementById("demo6");
let array = [122, 0, 11];
let sortArray = array.sort();
output6.textContent = sortArray;

const output7 = document.getElementById("demo7");
let old = [1, 2, 3, 4, 5];
old.splice(1, 2, 55, 66, 77);
output6.textContent = old;

const output8 = document.getElementById("demo8");
let a = [11, 22, 33, 44, 55];
let aa = a.slice(1);
output8.textContent = aa;

const output9 = document.getElementById("demo9");
let lol = [11, 22, 33, 44, 55];
let text = ""; 
for(let i = 0; i < lol.length; i++) {
    text += lol[i] + "<br>";
}
if (output9) {
    output9.innerHTML = text;
}

const users = ["Hasan", "Rahim", "Karim", "ll"];
for (const user of users) {
console.log(user);
}

const numbers = [1, 2, 3];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);

const ages = [15, 20, 25, 16];
const adults = ages.filter((age) => age >= 18);
console.log(adults);

const tags = ["node", "express", "api"];
console.log(tags.join(","));

const users1 = [
  { id: 1, name: "Hasan" },
  { id: 2, name: "Rahim" }
];
const user = users1.find((item) => item.id === 2);
console.log(user);
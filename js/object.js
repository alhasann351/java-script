const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");
const output3 = document.getElementById("output3");
const output4 = document.getElementById("output4");
const output5 = document.getElementById("output5");

const user = {
    name: "Hasan",
    age: 22,
    city: "Dhaka"
};

user.city = "Tangail";
user.role = "Teacher";
delete user.city;

console.log(user["name"]);

if(output1) {
    output1.textContent = `Name: ${user.name}`;
}
if(output2) {
    output2.textContent = `Age: ${user.age}`;
}
if(output3) {
    output3.textContent = `City: ${user.city}`;
}
if(output4) {
    output4.textContent = `Role: ${user.role}`;
}
if(output5) {
    output5.textContent = JSON.stringify(user);
}


const user1 = {
    name: "Hasan",
    age: 26,
    email: "hasan@gmail.com",
    role: {
        isTeacher: false,
        isLogin: true
    }
};
console.log(user1.role.isLogin);

//Object destructuring
const {name, age} = user1;
console.log(age);
///////////////////////////

const showUser = (userData) => {
    return `Name: ${userData.name}, Age: ${userData.age}`;
};
console.log(showUser(user1));

const user2 = [
    {id: 1, name: "Hasan", age: 22, city: "Dhaka"},
    {id: 2, name: "Rakib", age: 25, city: "Tangail"},
    {id: 3, name: "Karim", age: 30, city: "Gazipur"}
];
user2.forEach(user => {
    console.log(user.name);
});

const details = user2.find(item => {
    return item.id === 2;
});
console.log(details);

const details1 = user2.find(item => item.id === 1);
console.log(details1);

const names = user2.map(names => names.name);
console.log(names);

const user3 = [
    { id: 1, name: "Hasan", active: true },
    { id: 2, name: "Rahim", active: false },
    { id: 3, name: "Karim", active: true }
];
const filterData = user3.filter(item => item.active === true);
console.log(filterData);
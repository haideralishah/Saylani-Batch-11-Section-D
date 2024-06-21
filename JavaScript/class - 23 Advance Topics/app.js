/*
stack
heap

Mutable & Immutable

primitive types are IMMUTABLE
string, number, boolean, undefined, null, bigint, symbol


non primitive types are MUTABLE
object, array, function


*/

// let userName = "haider";
// let student = userName; //"haider"

// userName = 'Ali';
// student = 'Abdullah'

// console.log(student, userName);// haider

// let lunch = "biryani";

// lunch = "zinger";

// let user1 = {
//     name: 'ali',
//     rollNum: 2643
// }
// console.log(user1);

// let user2 = user1;
// user2.name = "abdullah";
// let user3 = user1;
// user3.rollNum = 2655;
// console.log(user2, user3);

// let user1 = {
//     name: 'ali',
//     rollNum: 2643
// }
// // let user2 = user1;
// let user2 = Object.assign({}, user1);
// user2.name = 'Abdullah';
// console.log(user2, user1);

// let fruits = ['mango', 'apple', 'banana'];
// let favFruits = [...fruits];
// favFruits.push('watermelon');
// console.log(fruits, favFruits);

// let user1 = {
//     name: 'haider',
//     rollNum: 2643
// }
// // let user2 = Object.assign({}, user1);
// let user2 = { ...user1 };
// user2.name = 'abdullah';
// console.log(user2, user1);

// let lunch = "biryani";
// let food = lunch;
// lunch = 'zinger';
// console.log(lunch, food);

// let student1 = {
//     name: 'aslam',
//     rollNum: 3355
// }

// let student2 = { ...student1 };
// student2.name = "akram";
// student2.rollNum = 3366;
// console.log(student1, student2)

/*Promise*/

// let treat = new Promise(function (resolve, reject) {
//     let isNotesAvail = confirm('have you produced english notes');
//     if (isNotesAvail) {
//         let foodWish = prompt('what do you want to eat?');
//         resolve(foodWish);
//     }
//     else {
//         reject("ainda bat ni krna");
//     }
// });

// treat
//     .then(function (foodItem) {
//         console.log(`You are my true friend, ${foodItem} is due on me.`);
//     })
//     .catch(function (e) {
//         console.log('you are not my true friend.', e);
//     });

// let user = {
//     userName: 'haider',
//     rollNum: 2643,
//     subjects: ["JavaScript"],
//     fathersName: "Muhammad Shah Alam",
//     isTeacher: true,
// }

// function printName(student) {
//     let userName = "Abdullah";

//     const { userName: name, fathersName, rollNum, ...remainingProp } = student;

//     console.log(remainingProp);

//     let str = `
//     Welcome ${name} son of ${fathersName}, your roll number is ${rollNum}.
//     `;
//     document.write(str);
// }

// printName(user);

// let car = {
//     carName: 'mehran',
//     model: "2005",
//     varient: "vxr",
//     isAutomatic: false,
//     features: {
//         fuelAverage: "Best",
//         easyToDhakka: true,
//         isSpearWheelAvailable: true,
//         isAirConditioned: true
//     }
// }

// const {
//     carName,
//     model,
//     varient,
//     features: { fuelAverage, easyToDhakka }
// } = car;

// console.log(carName, model, varient, fuelAverage, easyToDhakka);

// let fruits = ['Apple', 'Banana', "Watermelon", 'Oranges', 'Mango'];

// const [fruit1, , , fruit2] = fruits;

// const [fruit1, , fruit2, , fruit3] = fruits;

// const [, , , , kingFruit] = fruits;

// console.log(fruit1, fruit2);

// console.log(kingFruit);

/*

()=>{};

()=> "happy birthday";

const sum = (num1, num2) => `sum of ${num1} and ${num2} is ${num1 + num2}`;

userName => `Welcome ${userName}!`;


*/

// function greet() {
//     console.log('Welcome Haider');
// }

// const greet = () => {
//     console.log('Welcome Haider')
// }

// greet();

// setTimeout(() => {
//     console.log('Hello World');
// }, 500);

// const userNamePrompt = () => prompt('what is your name?');
// const xyz = () => "xyz";

// let user = userNamePrompt();

// console.log(user, xyz());

// const sum = (num1, num2) => `sum of ${num1} and ${num2} is ${num1 + num2}`;

// let sumTwo = sum(2, 4);

// console.log(sumTwo);

// const makeGreeting = userName => `Welcome ${userName}!`;

// let greet = makeGreeting('haider');

// console.log(greet);

// let obj = {
//     num: 5,
//     calculateSquare: function () {
//         console.log(this.num * this.num);
//         console.log(this);
//         const anotherFunc = () => {
//             console.log(this, 'second function')
//         }
//         anotherFunc();
//     }
// }

// let obj = {
//     num : 5,
//     calculateSquare: ()=>{
//         console.log(this.num * this.num);
//         console.log(this);
//     }
// }

// obj.calculateSquare();

// let fruits = ["apple", 'banana', 'cherry', 'grapes'];

// fruits.forEach((fruit, i) => {
//     if (i % 2 === 0) return;

//     console.log(fruit, i);

// });

// let allNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let squarArr = [];

// for (let i = 0; i < allNum.length; i++) {
//     squarArr.push(allNum[i] * allNum[i]);
// }

// allNum.forEach((num) => {
//     squarArr.push(num * num);
// })

// console.log(squarArr);

// let allNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let squarArr = allNum.map(num => num * num);

// console.log(squarArr);

// let userNames = ["haider", "abdullah", "muzammil", "ahmed"];

// userNames = userNames.map(fName => fName.toUpperCase());

// userNames = userNames.map(fName => {
//     let firstChr = fName[0].toUpperCase();
//     let restChr = fName.slice(1).toLowerCase();
//     return `${firstChr}${restChr}`;
// });

// console.log(userNames);

// let allNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// let divisibleBy5 = allNum.filter(num => num % 5 === 0);

// console.log(divisibleBy5);

// let students = ["haider", "abdullah", "muzammil", "ahmed", "aslam", "akram", "usman", "zeeshan"];
// let feesClear = ["ahmed", "aslam", "abdullah", "akram", "usman", "zeeshan",]
// let examClear = ["haider", "abdullah", "muzammil", "ahmed", "aslam"];

// let eligible = students.filter(student => (
//     feesClear.includes(student) &&
//     examClear.includes(student)
// ));

// console.log(eligible);

/*
arr.forEach((item, index, arr)=>{});

arr.map((item, index, arr)=>{})

arr.filter((item, index, arr)=>{return condition;});

*/

// let num = [1, 2, 5, 3, 4, 7, 6, 3, 8, 8, 10];
// let sum = 0;

// for (let i = 0; i < num.length; i++) {
//     sum += num[i];
// }

// console.log(sum)

// let num = [1, 2, 5, 3, 4, 7, 6, 3, 8, 8, 10];

// let sum = num.reduce((total, item) => total + item, 10);

// console.log(sum);

// let str = "hello world";

// str = str.split("").reverse().join("");

// str = str.split("");

// str = str.reduce((reverseStr, chr) => {
//     return chr + reverseStr;
//     //      "o"   +     "lleh"
// }, "");

// console.log(str)

// let str = "the quick brown fox jumps over the lazy dog.";
// let vowels = ["a", "e", "i", "o", "u"];

// let vowelCount = str.split("").reduce((count, chr) => {
//     return vowels.includes(chr) ? count + 1 : count;
// }, 0);

// console.log(vowelCount)

// let str1 = "Saylani Mass Information Technology"; //SMIT
// let str2 = "Pakistan Telecommunication Company Limited"; //PTCL

// let str1Abbr = str1.split(" ").reduce(findAbbr, "");

// let str2Abbr = str2.split(" ").reduce(findAbbr, "");

// function findAbbr(abbr, words) {
//     return abbr + words[0];
// }

// console.log(str1Abbr, str2Abbr)

// let teamAges = [15, 45, 19, 22, 40, 24];

// let eligibleForAdmission = teamAges.every((age) => age >= 15);

// console.log(eligibleForAdmission);

// let eligibleForGym = teamAges.some((age) => age >= 40);

// console.log(eligibleForGym)

// let users = [
//     { email: "headeralishah@gmail.com", password: "12345678" },
//     { email: "abdullah@gmail.com", password: "12345678" },
//     { email: "xyz@gmail.com", password: "12345678" },
// ]

// function authenticate(userEmail, userPassword) {
//     return new Promise((resolve, reject) => {
//         let authenticated = users.some(({ email, password }) => {
//             return email === userEmail && password === userPassword
//         })
//         if (authenticated) {
//             resolve('successfully login');
//         }
//         else {
//             reject('incorrect email or password');
//         }
//     });
// }

// authenticate("headeralishah@gmail.com", "12345678a")
//     .then((succes) => {
//         console.log(succes);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 3000);
// });

// Promise.all([promise1, promise2, promise3]).then((result) => {
//   console.log(result);
// });

// const promise4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise 4");
//   }, 3000);
// });

// const promise5 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise 5");
//   }, 5000);
// });

// Promise.race([promise4, promise5]).then((value) => {
//   console.log(value);

// });

// function getUserInfo() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ userName: "haider", email: "headeralishah@gmail.com" });
//     }, 3000);
//   });
// }
// async function fetchuser() {
//   let user = await getUserInfo();

//   console.log("hello world", user);
// }
// fetchuser();















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








let students = ["haider", "abdullah", "muzammil", "ahmed", "aslam", "akram", "usman", "zeeshan"];
let feesClear = ["ahmed", "aslam", "abdullah", "akram", "usman", "zeeshan",]
let examClear = ["haider", "abdullah", "muzammil", "ahmed", "aslam"];

let eligible = students.filter(student => (
    feesClear.includes(student) &&
    examClear.includes(student)
));

console.log(eligible);


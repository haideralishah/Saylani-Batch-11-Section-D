// let day = new Date().getDay();
// let dayName;

// if (day === 0) {
//     dayName = "Sunday";
// }
// else if (day === 1) {
//     dayName = "Monday"
// }
// else if (day === 5) {
//     dayName = "Friday";
// }



// let day = new Date().getDay();
// let dayName;

// switch (day) {
//     case 0:
//         dayName = "Sunday";
//         break;
//     case 1:
//         dayName = "Monday";
//         break;
//     case 2:
//         dayName = "Tuesday";
//         break;
//     case 5:
//         dayName = "Friday";
//         break;
//     case 6:
//         dayName = "Saturday";
//         console.log('hello 6th case');
//         break;
// }

// console.log(dayName);














// let dayName = prompt('enter day to check holiday or working day');

// switch (dayName) {
//     case "Saturday":
//         console.log('This is an off day.');
//         break;
//     case "Sunday":
//         console.log('This is an off day.');
//         break;
//     default:
//         console.log('working day');
// }























// let dayName = prompt('enter day to check holiday or working day');

// switch (dayName) {
//     case "Saturday":
//     case "Sunday":
//         console.log('This is an off day.');
//         break;
//     default:
//         console.log('working day');
// }



// let age = prompt('enter your age');
// let city = prompt('enter your city');

// switch (true) {
//     case age < 15 && city === "karachi":
//         console.log('congrats you are eligible for admission.');
//         break;
//     default:
//         console.log('sorry, you are not eligible.');
// }





















/*
DOM
functions
data types
conditions
loop
events
time events
string, number, boolean methods
date methods
*/



// let i = 0;
// while (i <= 100) {
//     console.log(i);
//     i++;
// }

// let str = "";
// while (str !== "Exit") {
//     str = prompt('enter any string.');

// }












// let randumNumber = 1;
// let i = 1;
// while (randumNumber !== 6) {
//     randumNumber = Math.ceil(Math.random() * 6);
//     console.log(randumNumber, i++);
// }













// let userInput;

// while (userInput % 2 !== 0) {
//     userInput = +prompt('enter a number');
// }









// let i = 101;
// do {
//     console.log(i);
//     i++;
// } while (i <= 100)

// let i = 101;
// while (i <= 100) {
//     console.log(i);
//     i++;
// }












// let userInput = 2;

// do {
//     userInput = +prompt('enter a number');

// } while (userInput % 2 !== 0) 


















function greet(user) {
    console.log('hello world', user);
}


function updateVal(formEl) {
    console.log('hello world', formEl);
    formEl.value = "register";
}


function updateHeading(el) {
    console.log(el);
    el.innerHTML = 'I love JavaScript';
}

function revertOriginalHeading(el) {
    console.log(el);
    el.innerHTML = 'Hello World';

}
/*
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object


1. An object
2. An array
3. A date
*/















// function findSum(num1, num2) {
//     console.log(num1 + num2);
// }

// function doAsDirected(a, b, cb) {
//     // cb(a, b);
// }

// doAsDirected(6, 1, findSum);

// doAsDirected(6, 1, function (num1, num2) {
//     console.log(num1 - num2);
// })














// let userCredentials = [
//     {
//         email: 'haideralishah@gmail.com',
//         password: "123456"
//     },
//     {
//         email: 'smit@gmail.com',
//         password: "123456"
//     }
// ];


// function login(email, password, success, showErr) {
//     let isAuthenticate = false;
//     for (let i = 0; i < userCredentials.length; i++) {
//         let user = userCredentials[i];
//         if (user.email === email && user.password === password) {
//             isAuthenticate = true;
//             break;
//         }
//     }
//     if (isAuthenticate) {
//         success();
//     }
//     else {
//         showErr();
//     }

// }

// let divEl = document.querySelectorAll(".api-response");
// function authSuccessfull() {
//     divEl[0].innerHTML = `
//         <h3 class="success">You are successfully authenticated.</h3>
//     `;
// }


// function authFailure() {
//     divEl[0].innerHTML = `
//     <h3 class="failure">You are not authenticated. Check your email or password.</h3>
// `;
// }







// login("haideralishah@gmail.com", "123456", authSuccessfull, authFailure);

// login("haideralishah@gmail.com", "12345a", authSuccessfull, authFailure);













// function checkOddOrEven(num, printMsg) {
//     if (num % 2 === 0) {
//         printMsg("even");
//     }
//     else {
//         printMsg('odd');
//     }
// }

// function displayMsg(msg) {
//     document.write(`Your number is ${msg}.`);
// }

// checkOddOrEven(3, displayMsg)















































// function greetMsg() {
//     document.write("Assalamuaalikum");
// }

// setTimeout(greetMsg, 5000);

// setTimeout(function () {
//     document.write('Eid Mubarak');
// }, 5000);










// let sec = 1;
// let min = 0;
// let countEl = document.querySelectorAll('.count');

// setInterval(function () {
//     countEl[0].innerHTML = `${min}:${sec++}`;
// }, 1000);





















let sec = 1;
// let min = 0;
// let countEl = document.querySelectorAll('.count');

// let stopWatch = setInterval(function () {
//     countEl[0].innerHTML = `${min}:${sec++}`;
// }, 1000);

// function clearTimeInter() {
//     clearInterval(stopWatch);
// }



// let timeoutRef = setTimeout(function () {
//     clearInterval(stopWatch);
// }, 10000);

// function stopTimeout() {
//     clearTimeout(timeoutRef);
// }








































































// let user = "haider";

// if (user.toLowerCase() === "haider") {
//     console.log(`Hello Haider`);
// }
// else {
//     console.log('Please let us know your name?');
// }







let user = "haider";
// turnery operator
// condition ? ifblock : elseblock
user.toLowerCase() === "haider" ? console.log('Hello Haider') : console.log('Hello Haider');









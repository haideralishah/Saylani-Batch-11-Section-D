/*
array loop prompt

*/












// let primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43];

// let favPrime = primeNumbers.slice(5, 9);

// console.log(primeNumbers, favPrime);




















// let primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43];
// let strtIndx, endIndx;
// for (let i = 0; i < primeNumbers.length; i++) {
//     if (!strtIndx && primeNumbers[i] >= 10) {
//         strtIndx = i;
//     }
//     if (primeNumbers[i] >= 11 && primeNumbers[i] <= 20) {
//         endIndx = i + 1;
//     }
// }

// let favPrime = primeNumbers.slice(strtIndx, endIndx);
// console.log(primeNumbers, favPrime);







// let primeNumbers = [1, 2, 3, 5, 7, 13, 11, 17, 19, 23, 29, 31, 37, 41, 43];
// let favPrime = [];

// for (let i = 0; i < primeNumbers.length; i++) {
//     if (primeNumbers[i] >= 10 && primeNumbers[i] <= 20) {
//         favPrime.push(primeNumbers[i]);
//     }
// }

// console.log(favPrime);











// for (let i = 0; i < 10; i++) {
//     console.log(i, "i loop");
//     for (let j = 0; j < 3; j++) {
//         console.log(j, "j loop");
//     }

// }













// for (let k = 1; k <= 5; k++) {
//     for (let i = 1; i <= 12; i++) {
//         for (let j = 1; j <= 30; j++) {
//             console.log("attendance");
//         }
//         console.log('pay salary');
//     }
//     console.log("Increment 10%");
// }
// console.log('give 1% shares');












let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let userInput = +prompt('enter a number');
let favArr = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= userInput) {
        favArr.push(arr[i]);
    }
}
console.log(favArr);
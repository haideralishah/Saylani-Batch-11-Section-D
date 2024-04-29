
// function servant() {
//     console.log("bring chai paratha");
// }

// servant();
// servant();
// servant();
// servant();
// servant();
// servant();



















// function cook(item1, item2) {
//     console.log("bring " + item1 + " " + item2);
// }

// cook("Biryani", "raita");

// cook("bengan", "tende");













// let h1El = document.querySelectorAll("h1");

// function greetUser(greetMsg, userName) {
//     h1El[0].innerHTML += greetMsg + " " + userName + "<br /><br /><br />"
// }

// greetUser("Salam", "Abdullah");

// greetUser("Good Morning", "Shafiq Bhai");


// greetUser("Please submit the dues", "Mubashir");























// let h1El = document.querySelectorAll("h1");

// function greetUser(greetMsg = "Salam") {
//     h1El[0].innerHTML += greetMsg + "<br />"
// }

// greetUser("Hello Sir");
// greetUser();














// function add1EveryIndx(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i] + 1);
//     }
// }

// add1EveryIndx([2, 4, 6]);
// add1EveryIndx([7, 8, 9]);















// function fruitChat() {
//     for (let i = 0; i < arguments.length; i++) {
//         console.log("crush " + arguments[i]);
//     }
// }

// fruitChat("Apple", "Banana", "Melon");

// fruitChat("Apple", "Banana");

// fruitChat("Apple", "Banana", "Orange");









// function letMeKnowYourWishes() {
//     console.log(arguments)
// }

// letMeKnowYourWishes("no traffic", "biryani in dinner", "ami maan jayen");
















// alert("Haider");

// let userName = prompt("What is your name?"); //"Haider"

// console.log(userName);









// function fullName(firstName, lastName) {
//     let newFullName = firstName + " " + lastName;
//     return newFullName;
// }

// let userFullName = fullName("Abdullah", "Shah");

// console.log(userFullName);





// function dateDiff(dob) {
//     let today = new Date();
//     let diff = (today - dob) / 1000 / 60 / 60 / 24 / 365;
//     return Math.floor(diff);
// }

// let myAge = dateDiff(new Date("October 4, 1991"));

// let studentAge = dateDiff(new Date("November 25, 1997"));

// console.log(myAge, studentAge);





























// function findDivision(percentage) {
//     let division;
//     if (percentage >= 60) {
//         division = "1st Division";
//     }
//     else if (percentage < 60 && percentage >= 45) {
//         division = "2nd Division";
//     }
//     else {
//         division = 'Failed';
//     }
//     return division;
// }

// let students = ["ahmed", "abdullah", "muzammil"];
// let marks = [50, 55, 70];

// let tBody = document.querySelectorAll('tbody');

// for (let i = 0; i < students.length; i++) {
//     let division = findDivision(marks[2]);

//     tBody[0].innerHTML += `
//     <tr>
//         <td>${students[i]}</td>
//         <td>${marks[i]}</td>
//         <td>${division}</td>
//     </tr>
//     `
// }















// L * W * H


// function findVolume(l, w, h) {
//     //data conversion into meters
//     let lInMeter = l / 39.3700787;
//     let wInMeter = w / 39.3700787;
//     let hInMeter = h / 39.3700787;
//     let volume = hInMeter * wInMeter * lInMeter;
//     return volume;
// }

// let item = ["remote", "laptop", "mobile"];
// // data available in inches
// let widths = [20, 40, 25];
// let height = [15, 30, 45];
// let length = [10, 15, 30];

// for (let i = 0; i < item.length; i++) {
//     let volume = findVolume(length[i], widths[i], height[i]);
//     console.log(`${item[i]} volume is: ${volume}`);
// }




























//Jan Birth
//June  Anniversary
//Nov Job Anniversary
function greetUser(monthName) {
    if (monthName === "Jan") {
        return "Happy Birthday";
    }
    else if (monthName === "Jun") {
        return "Happy Wedding Anniversary";
    }
    else if (monthName === "Nov") {
        return "Congrats! You have completed 2 years in our organisation.";
    }
}

let greetMsg = greetUser("Nov");

console.log(greetMsg);

let h1El = document.querySelectorAll('h1');
h1El[0].innerHTML = greetMsg;
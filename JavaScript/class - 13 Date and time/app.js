// let now = new Date();

// console.log(now);

// let dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let day = now.getDay();
// console.log(day);
// console.log(dayName[day]);


// let monthName = ["Jan", "Feb",
//     "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", 'Nov', "Dec"];
// let month = now.getMonth();
// console.log(month);
// console.log(monthName[month]);


// let date = now.getDate();
// console.log(date);


// let year = now.getFullYear();
// console.log(year);


// let mSecond = now.getMilliseconds();
// console.log(mSecond);



// let midMSecond = now.getTime();
// console.log(midMSecond);


















































// let dob = new Date("October 4, 1991 5:30:44");
// console.log(dob);




// let dob = new Date(686536244000);
// console.log(dob);

















// let mubWedDay = new Date("June 30, 2035");
// let today = new Date();
// let mubBirthDay = new Date("August 23, 2004");

// mubWedDay = mubWedDay.getTime();
// today = today.getTime();
// mubBirthDay = mubBirthDay.getTime();

// let remainingMS = mubWedDay - today;
// let age = today - mubBirthDay;

// console.log(remainingMS / 1000 / 60 / 60 / 24 / 365);
// console.log(age / 1000 / 60 / 60 / 24 / 365);
























//"92123357942"
// function addDashInOdds(str) {
//     if (!isNaN(str)) {
//         let newStr = "";
//         for (let i = 0; i < str.length; i++) {
//             if (
//                 str[i] % 2 !== 0
//                 && str[i + 1] % 2 !== 0
//                 && !isNaN(str[i + 1] % 2)
//             ) {
//                 newStr += str[i] + "-";
//             }
//             else {
//                 newStr += str[i];
//             }
//         }
//         console.log(newStr);
//     }
//     else {
//         console.log('Number required');
//     }
// }

// addDashInOdds("92123357942");

// addDashInOdds("591237");
























// let today = new Date();
// console.log(today.getTime());

// let today = new Date("May 9, 2022 21:10:15");

// console.log(today)


















// let dob = new Date("October 20, 1991");

// console.log(dob);

// dob.setDate(4);

// console.log(dob);

// dob.setFullYear(2024);

// console.log(dob);































































// let yEnd = new Date("December 31, 2024");


// let today = new Date();

// console.log(yEnd);
// console.log(today);

// console.log((yEnd - today) / 1000 / 60 / 60 / 24);












// let startDay = new Date("December 11, 2023");
// let today = new Date();

// let diff = today - startDay;

// console.log(diff / 1000 / 60 / 60 / 24 / 30);
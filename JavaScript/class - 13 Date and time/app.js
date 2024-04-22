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

















let mubWedDay = new Date("June 30, 2035");
let today = new Date();
let mubBirthDay = new Date("August 23, 2004");

mubWedDay = mubWedDay.getTime();
today = today.getTime();
mubBirthDay = mubBirthDay.getTime();

let remainingMS = mubWedDay - today;
let age = today - mubBirthDay;

console.log(remainingMS / 1000 / 60 / 60 / 24 / 365);
console.log(age / 1000 / 60 / 60 / 24 / 365);



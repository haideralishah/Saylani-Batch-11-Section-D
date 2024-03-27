/*
    do not user includes or indexof
    use for loop
*/

// let capCities = ["Karachi", "Lahore", "Peshawar", "Quetta", "Skardu"];

// let userCity = prompt("which city do you live in?");
// let isCapCity = false;

// for (let i = 0; i < capCities.length; i++) {
//     let capCity = capCities[i];
//     console.log(capCity, i);
//     if (capCity.toLowerCase() === userCity.toLowerCase()) {
//         console.log('You live in a capital city.');
//         isCapCity = true;
//         break;
//     }
// }

// if (isCapCity === false) {
//     console.log('You do not live in a capital city.');
//     let doYouWantToMove = confirm("Do you want to move to city?");
//     if (doYouWantToMove === true) {
//         console.log("You can find properties on zameen.com");
//     }
// }




























// for (let i = 0; i <= 10; i++) {
//     console.log("******* Outer Loop " + i + "*******");

//     for (let j = 0; j <= 10; j++) {
//         console.log("====== Inner Loop " + j + "======");
//     }

// }


















let firstNames = ["Akram", "Abdullah", "Aadil"];
let lastNames = ["Khan", "Ansaari", "Qureshi", "Tanoli"];
let possibleNames = [];
for (let i = 0; i < firstNames.length; i++) {
    let firstName = firstNames[i];

    for (let j = 0; j < lastNames.length; j++) {
        let lastName = lastNames[j];
        let fullName = firstName + " " + lastName;
        console.log(fullName);
        possibleNames.push(fullName);
    }

}


console.log(possibleNames);













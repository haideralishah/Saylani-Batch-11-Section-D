// function sum(num1, num2) {
//     console.log(num1 + num2);
// }

// sum(4, 8);

// sum(6, 1);

// sum(10, 20);






// function calculate(num3, num1, num2) {
//     console.log(num1 + num2 - num3);
// }

// calculate(4, 5, 7);

// calculate(3, 2, 8);











// let h1El = document.querySelectorAll("h1");

// function greet(greet, userName) {
//     h1El[0].innerHTML = greet + " " + userName;
// }

// let userInput = prompt("what is your name?");

// greet("Assalamualaikum", userInput);

// greet("Eid Mubarak", userInput);













// let h1El = document.querySelectorAll("h1");

// function calculate(num1, num2, operator) {
//     if (operator === "+") {
//         h1El[0].innerHTML += "<br />" + (num1 + num2);
//     }
//     else if (operator === "-") {
//         h1El[0].innerHTML += "<br />" + (num1 - num2);
//     }
//     else if (operator === "*") {
//         h1El[0].innerHTML += "<br />" + (num1 * num2);
//     }
//     else if (operator === "/") {
//         h1El[0].innerHTML += "<br />" + (num1 / num2);
//     }
//     else if (operator === "%") {
//         h1El[0].innerHTML += "<br />" + (num1 % num2);
//     }

// }

// calculate(2, 3, "+"); // 5

// calculate(11, 5, "-"); // 6

// calculate(11, 5, "*"); // 55

// calculate(75, 5, "/"); // 15

// calculate(49, 5, "%"); // 4










// function modify(str) {

// }

// modify("2346889899");
// //     "234688989-9"
// modify("132258855477");
// //     "1-3225885-547-7"














// function titleCase(firstName, lastName) {
//     let firstNameFirstChr = firstName[0].toUpperCase();
//     let firstNameRestChr = firstName.slice(1).toLowerCase();
//     let titledFirstName = firstNameFirstChr + firstNameRestChr;

//     let lastNameFirstChr = lastName[0].toUpperCase();
//     let lastNameRestChr = lastName.slice(1).toLowerCase();
//     let titledLastName = lastNameFirstChr + lastNameRestChr;

//     let fullName = titledFirstName + " " + titledLastName;

//     console.log(fullName);
// }

// titleCase("hAIdER", "aLI");
// titleCase("aBDuLLAh", "sHAh");
// titleCase("muzAMMIl", "huSSAIn");























function findLastIndex(word, chr) {
    let wordLowerCase = word.toLowerCase();
    let chrLowerCase = chr.toLowerCase();
    let lastIndex = wordLowerCase.lastIndexOf(chrLowerCase);
    console.log(lastIndex);
}

findLastIndex("HELLO WORLD", "l");
findLastIndex("HaiDER ALI shaH", "A");








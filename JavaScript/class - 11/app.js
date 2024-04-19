// let userMsgEl = document.querySelectorAll('input');
// let msgList = document.querySelectorAll("ul");

// function showMsg() {
//     let userMsg = userMsgEl[0].value;
//     if (userMsg !== "" && userMsg !== " ") {
//         msgList[0].innerHTML += "<li>" + userMsg + "</li>";
//         userMsgEl[0].value = "";
//     }
// }


// function resetList() {
//     msgList[0].innerHTML = "";
// }

























// let str = prompt("Enter some text"); // the  quick brown
// let numChars = str.length;

// for (let i = 0; i < numChars; i++) {
//     //          str.slice(0,    2)
//     console.log(str.slice(i, i + 2));
//     if (str.slice(i, i + 2) === "  ") {
//         console.log('No Double Spaces.');
//         break;
//     }
// }













// let str = "The quick brown fox jumps over the lazy dog.";
// // console.log(str.slice(20, 25)); // jumps
// // console.log(str.slice(16, 19)); // fox
// // console.log(str.slice(10, 15)); // brown

// for (let i = 0; i < str.length; i++) {
//     let reqrdTxt = str.slice(i, i + 17);
//     console.log(reqrdTxt);
// }


















// let str = "The quick brown World War II fox jumps over World War II the lazy World War II dog.";
// //the second world war
// for (let i = 0; i < str.length; i++) {
//     let targetTxt = str.slice(i, i + 12);

//     if (targetTxt === "World War II") {
//             //The quick brown + "the second world war" +  fox jumps over World War II the lazy World War II dog.
//         str = str.slice(0, i) + "the second world war" + str.slice(i + 12);
//     }
// }
// console.log(str);












// let str = "The quick brown World War II fox jumps over World War II the lazy World War II dog.";

// str = str.replace(/World War II/g, "the second world war");

// console.log(str);










// let firstName = "haider";

// let firstChar = firstName[0];
// let firstChar = firstName.charAt(0)
































// let num1 = 51.57;
// let num2 = 51.44;

// console.log(Math.round(num1));
// console.log(Math.round(num2));

// console.log(Math.ceil(num1));
// console.log(Math.ceil(num2));

// console.log(Math.floor(num1));
// console.log(Math.floor(num2));























let random = Math.ceil(Math.random() * 6);
console.log(random);
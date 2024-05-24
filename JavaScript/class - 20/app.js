
// let divEl = document.querySelectorAll('#container')[0];
// let userName = prompt('what is your name?');
// divEl.innerHTML = `<h1 id="" title="">Hello ${userName}</h1>`;
















/*
.appendChild(newElement); //append in last
.insertBefore(newElement, target); //insert before target elment
.setAttribute(attrName, attrValue) // set attribute to element node
.removeChild(target) // remove element node from parent node
*/


let divEl = document.querySelectorAll('#container')[0];
let h1El = document.createElement("H1");
h1El.setAttribute("id", "main-heading");
h1El.setAttribute("title", "greeting");
h1El.setAttribute("class", "special heading red-styled")

let greetUser = document.createTextNode("Hello, How may I help you?");
h1El.appendChild(greetUser);
divEl.appendChild(h1El);
// let target = divEl.firstChild;
// divEl.insertBefore(h1El, target);

let target = divEl.firstChild.nextSibling;
divEl.removeChild(target);

/*
document.querySelectorAll();
document.querySelector();
document.getElementsByTagName();
document.getElementsByClassName();
document.getElementById();

document.childNodes;
document.parentNode;
document.nextSibling;
document.previousSibling;
document.firstChild;
document.lastChild;

document.nodeType // 1 or 3
document.nodeName // element name in upper case

*/

// let pEl = document.getElementsByTagName('p');
// let pEl = document.querySelectorAll('p');
// console.log(pEl);

// let pEl = document.getElementsByClassName("special");
// let pEl = document.querySelectorAll(".special");
// console.log(pEl);






// let h1 = document.getElementById("head");
// let h1 = document.querySelectorAll("#head");
// console.log(h1[0]);







// let pEls = document.querySelectorAll(".special");
// let pEl = document.querySelector(".special");

// console.log(pEl, pEls[1]);
// console.log(pEl)














// let pEl = document.querySelector(".special");
// console.log(pEl);



















// let targetEl = document.childNodes[1].childNodes[2].childNodes[3].childNodes[1];
// console.log(targetEl);
// targetEl.innerHTML = "hi";

// let h1El = document.querySelectorAll('h1');
// let targetEl = h1El[0].parentNode.childNodes[3].childNodes[1];
// console.log(targetEl);
// targetEl.innerHTML = 'How are you?'




















// let h1El = document.querySelectorAll('h1');

// console.log(h1El[0]);

// h1El[0].innerHTML = "This is awesome.";




// let h1El = document.querySelector('h1');
// let targetEl = h1El.nextSibling.nextSibling.childNodes[1]
// // console.log(h1El.nextSibling.nextSibling.childNodes[1])
// targetEl.innerHTML = 'Hello how are you?'











let el = document.querySelector('ol');
let elNodes = el.childNodes;
for (let i = 0; i < elNodes.length; i++) {
    console.log(elNodes[i].nodeName, elNodes[i]);
    if (elNodes[i].nodeType === 1 && elNodes[i].nodeName === "LI") {
        elNodes[i].innerHTML += " namaz";
    }
}
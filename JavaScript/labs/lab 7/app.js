
// let h1Elements = document.querySelectorAll("h1");

// h1Elements[0].innerHTML = "SMIT Admission";

























// let pEl = document.querySelectorAll("p");

// for (let i = 0; i < pEl.length; i++) {
//     pEl[i].innerHTML = "The quick brown fox jumps over the lazy dog.";
// }































// function changeHeading() {
//     console.log(2 + 2);
// }

// changeHeading();
// changeHeading();
// changeHeading();
// changeHeading();
// changeHeading();
// changeHeading();
// changeHeading();













let isNewImage = false;
let imgEl = document.querySelectorAll("img");

function changeImage() {
    if (isNewImage === false) {
        imgEl[0].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAnFgdOqI3ng2L3UJqMeW9Acz5mGj6LAcbMGOApTkJYA&s";
        isNewImage = true;
    }
    else {
        imgEl[0].src = "https://i.pinimg.com/474x/4b/f6/f1/4bf6f197ad48bcf5bcc0a761954cb48d.jpg";
        isNewImage = false;
    }

}










let userMessage = document.querySelectorAll('input');
let ulEl = document.querySelectorAll("ul");

function showMessage() {
    // ulEl[0].innerHTML = ulEl[0].innerHTML + "<li>" + userMessage[0].value + "</li>"
    ulEl[0].innerHTML += "<li>" + userMessage[0].value + "</li>"
    userMessage[0].value = "";
}
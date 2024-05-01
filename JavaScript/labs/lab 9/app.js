// let monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// let dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// let divEL = document.querySelectorAll(".date-n-time");

// function printDatenTime() {
//     let now = new Date();
//     let str = `
//         <h2>${monthName[now.getMonth()]}, ${now.getFullYear()}</h2>
//         <h2>${now.getHours()}:${now.getMinutes()}</h2>
//         <h2>${dayName[now.getDay()]}</h2>
//     `;
//     divEL[0].innerHTML = str;
// }

// printDatenTime();















// function calculateHypotenuse(base, perp) {
//     function calcSqr(num) {
//         return num * num;
//     }

//     let hyp2 = calcSqr(base) + calcSqr(perp);
//     let hyp = Math.sqrt(hyp2);
//     console.log(hyp.toFixed(2));
// }

// calculateHypotenuse(8, 9);



















function findLargNSmallNum() {
    if (arguments.length < 1) return "atleast 1 parameters is required.";

    let largest = arguments[0];
    let smallest = arguments[0];

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > largest) {
            largest = arguments[i];
        }
        if (arguments[i] < smallest) {
            smallest = arguments[i];
        }
    }
    console.log(largest, smallest);
}

findLargNSmallNum(4, 0.5, 100.5, 5, 8, 3, 4, 100, 2);
















// function sumArr(arrOfNumbers) {

// }

// sumArr([1, 5, 7, 9]);















function joinArr(arrOfStr, separator) {

}

function splitStr(str, separator) {

}

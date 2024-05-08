// let studentName = "Haider Ali";
// let fee = 5000;
// let isMatriculate = true;
// let subjects = ['HTML', 'CSS', 'JavaScript'];


// let student = {
//     studentName: "haider ali",
//     fee: 5000,
//     isMatriculate: true,
//     subjects: ['HTML', 'CSS', 'JavaScript'],
//     calculateAge: function () {
//         console.log('Student Age is 33years old.');
//     }
// };
// student.fathersName = "Muhammad Shah Alam";
// student.dob = 'October 4, 1991';
// student.fee = 7000;
// student.subjects.push('NextJS');
// student.calculateAge()

// console.log(student.studentName);





























// console.log("Haider");
// console.warn("Haider");
// console.error("Haider");























// let user = {};
// let fruits = [];

// user.name = 'haider';
// fruits.push("apple");

































// let car1 = {
//     make: "Toyota",
//     model: 2023,
//     varient: "xli",
//     name: "Corolla",
//     isAutomatic: true,
//     fuelType: "hybrid",
//     color: 'black',
//     calculateMilage: function (fuel) {
//         console.log(`${fuel * 12}km travelled.`);
//     }
// }

// let car2 = {
//     make: "Honda",
//     model: 2023,
//     varient: "Oriel",
//     name: "Civic",
//     isAutomatic: true,
//     fuelType: "hybrid",
//     color: 'red',
//     calculateMilage: function (fuel) {
//         console.log(`${fuel * 9}km travelled.`);
//     }
// }


// let car3 = {
//     make: "Suzuki",
//     model: 2022,
//     varient: "vxl",
//     name: "Mehran",
//     isAutomatic: false,
//     fuelType: "CNG",
//     color: 'Yellow',
//     calculateMilage: function (fuel) {
//         console.log(`${fuel * 25}km travelled.`);
//     }
// }

// let allCars = [car1, car2, car3];

// console.log(allCars[0].make, allCars[0].name);
// allCars[0].calculateMilage(5);


// console.log(allCars[1].make, allCars[1].name);
// allCars[1].calculateMilage(5);

// console.log(allCars[2].make, allCars[2].name);
// allCars[2].calculateMilage(5);

























function createBook(bookName, author, pages, topic) {
    let book = {
        name: bookName,
        author, // author: author,
        pages,
        topic
    }
    return book;
}

let book1 = createBook("The Lean Startup", "Eric", 500, "Startup");

let book2 = createBook("Personal MBA", "Josh", 700, "Business");

let book3 = createBook("Bahar Shariat", "Mufti Amjad", 9000, "Islamic");

console.log(book1, book2, book3);
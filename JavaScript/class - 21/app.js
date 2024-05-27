
// let plan1 = {
//     name: 'fat loss',
//     excercises: 'strength training',
//     fee: 2000,
//     admissionFee: 1000,
//     isAirconditioned: false,
//     trainingType: 'personal',
//     calculateBill: function (noOfMonths) {
//         let totalBill = (this.fee * noOfMonths) + this.admissionFee;
//         if (noOfMonths >= 3) {
//             totalBill = totalBill / 100 * 80;
//         }
//         console.log(totalBill);
//     }
// }

// console.log(plan1.excercises);
// console.log(plan1["excercises"]);

// plan1.calculateBill(4);
// plan1.calculateBill(2);


// let allKeys = Object.keys(plan1);
// let allValues = Object.values(plan1);

// console.log(allKeys, allValues);





// let excercises = "name";
// console.log(plan1.excercises);
// console.log(plan1["excercises"]);
// console.log(plan1[excercises]);

// for (let prop in plan1) {
//     console.log(plan1.prop);
//     console.log(prop, ":", plan1[prop]);
// }

























// let human = {
//     userName: 'haider',
//     haider: `haider is a full stack trainer and developer.`
// }
// let userName = "haider";
// // console.log(human.userName);
// console.log(human["userName"]);
// console.log(human[userName]);














// let human = {
//     userName: 'haider',
//     haider: `haider is a full stack trainer and developer.`
// }
// let allKeys = Object.keys(human);
// let allValues = Object.values(human);
// console.log(allKeys, allValues);




















// let human = {
//     userName: 'haider',
//     haider: `haider is a full stack trainer and developer.`,
//     isMarried: true
// }
// let arr = [];
// for (let prop in human) {
//     // console.log(human[prop]);
//     let obj = { [prop]: human[prop] };
//     arr.push(obj);
// }

// console.log(arr);


























/*
    {
        rollNumber: 2643
    }
*/

// let keyName = prompt('enter object key name'); // rollNumber
// let keyValue = +prompt('enter object key value'); // 2643
// let newObj = {
//     [keyName]: keyValue,
//     keyName: keyValue
// }
// console.log(newObj);





























































// let newStudent = {
//     name: "naveen",
//     rollNumber: 2643,
//     subjects: ["HTML", "CSS", "JavaScript"],
//     isMatriculate: true
// }

// function Student(name, rollNumber, subjects, isMatriculate) {
//     this.name = name;
//     this.rollNumber = rollNumber;
//     this.subjects = subjects;
//     this.isMatriculate = isMatriculate;
// }

// let student1 = new Student("Naveen", 2643, ["HTML"], true);
// let student2 = new Student("Haider", 2655, ["CSS", "JS"], false);
// console.log(student1, student2);








function CarConstruct(name, model, varient) {
    this.name = name;
    this.model = model;
    this.varient = varient;
}

CarConstruct.prototype.calculateAverage = function (fuel, km) {
    console.log(`Your fuel average is ${km / fuel}.`);
};

let car1 = new CarConstruct("Mehran", 2005, "VXR");
let car2 = new CarConstruct("Toyota Corolla", 2015, "GLI");

car1.calculateAverage(10, 200);
car2.calculateAverage(20, 250);
















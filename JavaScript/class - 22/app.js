function Student(name, rollNum, isFeePaid) {
    this.name = name;
    this.rollNum = rollNum;
    this.isFeePaid = isFeePaid;
}
Student.prototype.subjects = ["HTML", "CSS", "JavaScript"];

let student1 = new Student("Haider", 2643, true);
let student2 = new Student("Abdullah", 2644, false);
let student3 = new Student("Muzammil", 2645, true);

student3.subjects = ["Python"];
// console.log(student3.subjects)

delete student1.isFeePaid;
student1.specialQuota = true
let allStudents = [student1, student2, student3];































// delete student1.isFeePaid;
// student1.specialQuota = true;
// console.log(student1, student2, student3);

// console.log("subjects" in student1);
// console.log("isFeePaid" in student1);
// console.log("isFeePaid" in student2);


















// console.log(student1);

// console.log("subjects" in student1);
// console.log(student1.hasOwnProperty("subjects"));
// console.log(student1.hasOwnProperty("rollNum"));
























// console.log(allStudents, 'allStudents');

// for (let i = 0; i < allStudents.length; i++) {
//     let student = allStudents[i];
//     if ("isFeePaid" in student) {
//         if (student.isFeePaid) {
//             console.log('Thanks for fee.');
//         }
//         else {
//             console.log('Please clear your dues.');
//         }
//     }
//     else if ("specialQuota" in student) {
//         console.log('Dil lga k parho.');
//     }
// }










// console.log(student1);
// let allValues = Object.values(student1);
// console.log(allValues.includes("Haider"));


















let currentURL = location;
console.log(currentURL.pathname);

// let newURL = prompt('enter a URL with protocol.');
// location = newURL;
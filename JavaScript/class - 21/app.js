
let plan1 = {
    name: 'fat loss',
    excercises: 'strength training',
    fee: 2000,
    admissionFee: 1000,
    isAirconditioned: false,
    trainingType: 'personal',
    calculateBill: function (noOfMonths) {
        let totalBill = (this.fee * noOfMonths) + this.admissionFee;
        if (noOfMonths >= 3) {
            totalBill = totalBill / 100 * 80;
        }
        console.log(totalBill);
    }
}

// console.log(plan1.excercises);
// console.log(plan1["excercises"]);

// plan1.calculateBill(4);
// plan1.calculateBill(2);


// let allKeys = Object.keys(plan1);
// let allValues = Object.values(plan1);

// console.log(allKeys, allValues);





let excercises = "name";
console.log(plan1.excercises);
console.log(plan1["excercises"]);
console.log(plan1[excercises]);

for (let prop in plan1) {
    console.log(plan1.prop);
    console.log(prop, ":", plan1[prop]);
}
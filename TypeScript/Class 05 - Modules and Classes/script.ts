/*
add type="module" in script tag
change tsconfig.json and add ESNext in module and target
run with live server
*/
// import { sum, fruits, car as myCar } from "./utils/sum.js";
// import * as sumModule from "./utils/sum.js";

// import Sum from "./utils/sum.js";

// let total = Sum(8, 8);
// console.log(total);

// let total = sum(4, 5);

// let car = "Cyber Truck";

// console.log(total, fruits, myCar.name);

// console.log(sumModule);













































interface CarInterface {
    carName: string;
    carModel: number;
    calculateAverage: (fuel: number, milage: number) => void;
}

class Car implements CarInterface {
    carName;
    carModel;
    constructor(name: string, model: number) {
        this.carName = name;
        this.carModel = model;
    }
    static isAutomatic = true;
    calculateAverage(fuel: number, milage: number) {
        let msg = `${this.carName} has fuel average of ${milage / fuel}km`;
        console.log(msg)
    }
}
let car1 = new Car("Mehran", 2005);
car1.calculateAverage(20, 1000);

let car2 = new Car("Havel H6", 2023);
car2.calculateAverage(10, 150);

// console.log(car1.calculateAverage(20, 200));
console.log(car2);
// Car.calculateAverage(20, 200);








// let user: string | number = "haider";

// user = 5;

// let fruits = ['apple', 'banana', 'orange'];

// let fruits: string[] = ['apple', 'banana', 'orange'];



// let fruits: any = 'haider'
// fruits = 1;
// fruits = true;

































// let mixArr : (string | number)[] = [1, 'apple'];

// type Car = string | number;

// let car: Car = 'alto';

// car = 5;

















// type Car = {
//     name: string,
//     model: number,
//     varient: string,
//     isAutomatic: boolean,
//     features: string[],
//     launchedYear?: number,
//     calcualteAvg?: (fuel: number, distance: number) => void
// }

// let car: Car = {
//     name: 'alto',
//     model: 2007,
//     varient: "vxr",
//     isAutomatic: true,
//     features: ['airbags', 'abs system']
// }
// car.launchedYear = 2000
// car.calcualteAvg = (fuel, distance) => {
//     console.log(distance / fuel);
// }
// car.calcualteAvg(20, 400);

































interface Animal {
    limbs: number,
    color: string[]
}

interface Dog extends Animal {
    isBark: boolean
}

interface Cat extends Animal {
    isMewe: boolean
}

let cat: Cat = {
    limbs: 4,
    color: ['black', 'white', 'brown', 'grey', 'black n white'],
    isMewe: true
}

let dog: Dog = {
    limbs: 4,
    color: ['yellow', 'black', 'white', 'brown'],
    isBark: true
}














































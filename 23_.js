#! /usr/bin/env node
let car = "subaru";
// Test No. 1
console.log("Is Car === 'Subaru'? I predict True.");
console.log(car === 'subaru');
// Test No. 2
console.log("Is Car == 'Subaru'? I predict True.");
console.log(car == 'subaru');
// Test No. 3
console.log("Is Car != 'Honda'? I predict True.");
console.log(car != 'Honda');
// Test No. 4
console.log("Is Car !== 'Honda'? I predict True.");
console.log(car !== 'Honda');
// Test No. 5
console.log("Is Car.Upper case == 'SUBARU'? I predict True.");
console.log(car.toUpperCase() == 'SUBARU');
// Test No. 6
console.log("Is Car == 'SUBARU'? I predict False.");
console.log(car == 'SUBARU');
// Test No. 7
console.log("Is Car === 'SUBARU'? I predict False.");
console.log(car === 'SUBARU');
// Test No. 8
console.log("Is Car === 'Train'? I predict False.");
console.log(car === 'Train');
// Test No. 9
console.log("Is Car === 'Bus'? I predict False.");
console.log(car === 'Bus');
// Test No. 10
console.log("Is Car === 'Cycle'? I predict False.");
console.log(car === 'Cycle');
export {};

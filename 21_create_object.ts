#! /usr/bin/env node

// Data type of car object
interface name {
    age: number, 
    name: string,
    nationality: string,
    student: boolean
}

// name object 
let name = {
    age: 33, 
    name: "Sohail",
    nationality: "Pakistan",
    student: true
}
    console.log("\n******* name object *******\n" );    
    console.log(name);

// Data type of car object 
interface car { 
    maker: string,
    Colur: string,
    automatic: boolean
}

// car object 
let car = {
    maker: "Honda", 
    Color: "Red",
    automatic: true,
}
    console.log("\n******* car object *******\n" );
    console.log(car);
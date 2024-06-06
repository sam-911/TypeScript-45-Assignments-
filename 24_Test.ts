#! /usr/bin/env node

// Equality and inenquality Test 1
console.log("Equality test with string: ", "Apple" === "Apple");
// Equality and inenquality Test 2
console.log("Inenquality test with string: ", ("Apple" as string) != "Orange");

// Test using the lower case function 
console.log("lower case function: ", "HELLO".toLowerCase() === "hello");

// Numerical tests involving equality 
console.log("Equality test with number: ", 26 === 26);
// Numerical tests involving inequality 
console.log("Inequality test with number: ", (26 as  number) != 35);

// Greated then test
console.log("Greated then test: ", 10 > 5);
// Less then test
console.log("Less then test: ", 5 < 10);

// Greated then and equal to test 
console.log("Greated then and equal to test: ", 10 >= 10);
// Less then and equal to test 
console.log("Less then and equal to test: ", 5 <= 10);

// Test using "And" operator 
console.log( "And operator test: ", 5===5 && 10 > 5);
// Test using "OR" operator 
console.log("OR operator test: ", 5===5 || false );

// Test whether an item is in a array  
const fruits : string [] = ["Banana", "Mango", "Watermelon"];
console.log('Test "Banana" is in the array: ', fruits.includes("Banana"));

// Test whether an item is not in a array 
console.log('Testing "Apple" is not in the array: ', fruits.includes("Apple"));


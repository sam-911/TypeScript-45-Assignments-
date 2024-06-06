function make_shirt (size:string ="Large", 
text:string = "I Love TypeScript. "){
    console.log(`Creating a ${size} shirt with message: ${text}`);
}

make_shirt();

make_shirt("Medium");

make_shirt("Small","I Love Python");
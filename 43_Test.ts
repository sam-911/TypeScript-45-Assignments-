

let magician : string [] = ["Harry Porter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore"];

function copyArray(arr: string [] ){
    return [...arr]
}



function make_great (magicianArray:string [] ) {

    for (let i=0; i<magicianArray.length; i++ ) {
        magicianArray[i] = "The Great " + magicianArray[i]
    }
}

function  show_megician (megician:string [] ) {

    megician.forEach(element => {
        console.log(element);
    }); 
    

}
const copyMagicianArray = copyArray(magician)

make_great(copyMagicianArray);

console.log("\n\nThis is my original Array: ");
show_megician(magician);

console.log("\n\nThis is my modified copy of the Array: ");
show_megician(copyMagicianArray);
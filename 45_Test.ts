import { features } from "process";

function storeCarInfro (

    manufacturer: string, 
    modelName: string, 
    ...extraOption: {[key: string]:any} [] ):
    
    Object {

    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign( { }, ...extraOption)
    }

return carInfo;
};

let answer = storeCarInfro("Honda", "Civic", {color:'black'}, {features: ['navigation', 'power window']} )

console.log(answer)
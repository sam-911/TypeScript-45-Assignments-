function storeCarInfro(manufacturer, modelName, ...extraOption) {
    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraOption)
    };
    return carInfo;
}
;
let answer = storeCarInfro("Honda", "Civic", { color: 'black' }, { features: ['navigation', 'power window'] });
console.log(answer);
export {};

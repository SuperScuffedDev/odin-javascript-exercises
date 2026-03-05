const totalIntegers = function(arr) {
    if (typeof arr !== "object") return undefined;

    values = Object.values(arr);

    const nestedObjects = values.filter(value =>
        typeof value === "object" && value !== null
    );

    const nestedIntegers = values.filter(value =>
        Number.isInteger(value)
    );


    if (nestedObjects.length === 0) {
        return nestedIntegers.length;
    } else {
        const countedObjects = nestedObjects.map(item => 
            totalIntegers(item)
        ).reduce((acc, curr) => {
            return acc + curr
        });

        return nestedIntegers.length + countedObjects;
    }
};
  
// Do not edit below this line
module.exports = totalIntegers;

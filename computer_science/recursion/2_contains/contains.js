const contains = function(obj, val) {
    const values = Object.values(obj);

    if (values.includes(val))
        return true;
    else {
        const innerObjects = values.filter(value =>
            typeof value === "object" && value !== null
        );

        return innerObjects.some(innerObj => 
            contains(innerObj, val)
        )
    }
};
  
// Do not edit below this line
module.exports = contains;

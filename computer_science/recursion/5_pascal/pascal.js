const pascal = function(n) {
    const thisRow = []
    if (n === 1)
        thisRow.push(1);
    else {
        const prevRow = pascal(n-1)
        prevRow.forEach((value, index) => {
            const leftValue = prevRow[index+1] ?? 0
            thisRow.push(value + leftValue)
        })
    }
    return thisRow
};
  
// Do not edit below this line
module.exports = pascal;

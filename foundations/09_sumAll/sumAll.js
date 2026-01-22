const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1 + num2) || num1 < 0 || num2 < 0) {
        return "ERROR"
    };
    if (num1 > num2) {
        [num1, num2] = [num2, num1];
    };
    let all_numbers = [];
    for (i = num1; i <= num2; i++) {
        all_numbers.push(i);
    };
    return all_numbers.reduce((acc, curr) => acc + curr);
};

// Do not edit below this line
module.exports = sumAll;

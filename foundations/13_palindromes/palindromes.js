const palindromes = function (str) {
const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const lower_str = str
    .toLowerCase()
    .split("")
    .filter((character) => alphanumerical.includes(character))
    .join("");

    let reverse_str = lower_str.split("").reverse().join("");
    return are_equal = reverse_str == lower_str
};

// Do not edit below this line
module.exports = palindromes;

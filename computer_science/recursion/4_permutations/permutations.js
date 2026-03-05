const permutations = function(arr) {
    const perms = [];
    if (arr.length === 0 || arr.length === 1)
        perms.push(arr)
    else {
        for (let i = 0; i < arr.length; i++) {
            const subArr = arr.filter(element => element !== arr[i]);

            const subPerms = permutations(subArr).map(item => [arr[i], ...item])
            
            subPerms.forEach(item => perms.push(item))
        }
    }
    return perms;
};
  
// Do not edit below this line
module.exports = permutations;

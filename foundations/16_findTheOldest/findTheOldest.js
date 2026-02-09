const findTheOldest = function(array) {
    const current_year = new Date().getFullYear();
    
    const oldest = array.reduce((acc, curr) => {
        acc.yearOfDeath ??= current_year;
        curr.yearOfDeath ??= current_year;

        return ((curr.yearOfDeath - curr.yearOfBirth) > 
        (acc.yearOfDeath - acc.yearOfBirth)) ? curr : acc
    });

    return(oldest)
};

// Do not edit below this line
module.exports = findTheOldest;

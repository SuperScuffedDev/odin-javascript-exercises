const fibonacci = function(arg) {
    const num = Number(arg);
    let fib = [0, 1]
    if (num < 0) {return "OOPS"}
    for (i=2; i<num+1; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    };
    return fib[num];
};

// Do not edit below this line
module.exports = fibonacci;

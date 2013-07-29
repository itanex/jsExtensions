// Determines if the value is actually a number and not a js Number
Math.isANumber = function (value) {
    // test for obvious results
    if (value == null
        || value == undefined
        || Number(value) != value
        ) {
        return false;
    }

    // In the case of a string we can test to see if it ends with a '.'
    // this cause is difficult since js drops an ending '.' 
    // if the literal is a number and not a string
    var pat = new RegExp("-?[0-9]+(\.[0-9]+)?");

    if (!pat.test(value)) {
        return false;
    }

    return true;
};
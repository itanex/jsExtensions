// Object Equals
// Tests if object x is equal to object y
Object.equals = function (x, y) {
    if (x === y) {
        // if both x and y are null or undefined and exactly the same
        return true;
    }

    if (!(x instanceof Object) || !(y instanceof Object)) {
        // if they are not strictly equal, they both need to be Objects
        return false;
    }

    if (x.constructor !== y.constructor) {
        // they must have the exact same prototype chain, the closest we can do is
        // test there constructor.
        return false;
    }

    for (var p in x) {
        if (!x.hasOwnProperty(p)) {
            // other properties were tested using x.constructor === y.constructor
            continue;
        }

        if (!y.hasOwnProperty(p)) {
            // allows to compare x[ p ] and y[ p ] when set to undefined
            return false;
        }

        if (x[p] === y[p]) {
            continue;
            // if they have the same strict value or identity then they are equal
        }

        if (typeof (x[p]) !== "object") {
            // Numbers, Strings, Functions, Booleans must be strictly equal
            return false;
        }

        if (!Object.equals(x[p], y[p])) {
            // Objects and Arrays must be tested recursively
            return false;
        }
    }

    for (p in y) {
        if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) {
            // allows x[ p ] to be set to undefined
            return false;
        }
    }

    return true;
}

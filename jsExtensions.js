// IsANumber - By Bryan Wood (MIT Licensed)
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

// isANumber Assertion Tests

//// Test literal positive integer value
//(function () {
//    var expected = true;

//    return Math.isANumber(123456) == expected;
//})();

//// Test literal positive double value
//(function () {
//    var expected = true;

//    return Math.isANumber(123456.654) == expected;
//})();

//// Test literal negative integer value
//(function () {
//    var expected = true;

//    return Math.isANumber(-123456) == expected;
//})();

//// Test literal negative double value
//(function () {
//    var expected = true;

//    return Math.isANumber(-123456.654) == expected;
//})();

//// Test literal positive double value, with trailing '.' and no following numbers
//(function () {
//    var expected = false;

//    return Math.isANumber(123456.) == expected;
//})();

//// Test literal negative double value, with trailing '.' and no following numbers
//(function () {
//    var expected = false;

//    return Math.isANumber(-123456.) == expected;
//})();

//// Test stringy-number positive integer value
//(function () {
//    var expected = true;

//    return Math.isANumber("123456") == expected;
//})();

//// Test stringy-number positive double value
//(function () {
//    var expected = true;

//    return Math.isANumber("123456.654") == expected;
//})();

//// Test stringy-number negative integer value
//(function () {
//    var expected = true;

//    return Math.isANumber("-123456") == expected;
//})();

//// Test stringy-number negative double value
//(function () {
//    var expected = true;

//    return Math.isANumber("-123456.654") == expected;
//})();

//// Test stringy-number positive double value, with trailing '.' and no following numbers
//(function () {
//    var expected = false;

//    return Math.isANumber("123456.") == expected;
//})();

//// Test stringy-number negative double value, with trailing '.' and no following numbers
//(function () {
//    var expected = false;

//    return Math.isANumber("-123456.") == expected;
//})();

//// Test literal empty object
//(function () {
//    var expected = false;

//    return Math.isANumber({}) == expected;
//})();

//// Test literal object with params
//(function () {
//    var expected = false;

//    return Math.isANumber({param:"hello"}) == expected;
//})();

//// Test literal empty array
//(function () {
//    var expected = false;

//    return Math.isANumber([]) == expected;
//})();

//// Test literal array with content
//(function () {
//    var expected = false;

//    return Math.isANumber(["19123", "hello"]) == expected;
//})();

//// Test empty string
//(function () {
//    var expected = false;

//    return Math.isANumber("") == expected;
//})();

//// Test empty space string
//(function () {
//    var expected = false;

//    return Math.isANumber(" ") == expected;
//})();

//// Test string with string value (not number as string)
//(function () {
//    var expected = false;

//    return Math.isANumber("hello world") == expected;
//})();

//// Test empty param list
//(function () {
//    var expected = false;

//    return Math.isANumber() == expected;
//})();

//// Test null 
//(function () {
//    var expected = false;

//    return Math.isANumber(null) == expected;
//})();

//// Test null 
//(function () {
//    var expected = false;

//    return Math.isANumber(undefined) == expected;
//})();

Array.prototype.objectInArray = function (obj) {
    for (var i = 0; i < this.length; i++) {
        if (Object.equals(this[i], obj)) {
            return i;
        }
    }

    return -1;
};



// Array Remove - By John Resig (MIT Licensed) (renamed to match C# pattern)
// Source: http://ejohn.org/blog/javascript-array-remove/
// Can remove specific element or range of elements from an array 
// and preserving array content not targeted
// from - required - index of the element to remove or starting index of range
// to - optional - index of the last element to remove in range
Array.prototype.removeAt = function (from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};

// Array.prototype.remove Assertion Tests

//// Test positive index removal
//// Expected: 
//// 1) specific index is removed 
//// 2) additional array contents preserved
//(function () {
//    var testArray = ['1', 'hello', { key: "value" }, 500];
//    var assertArray = ['1', { key: "value" }, 500];
//    var index = 1;
//    var assertIndex = 1;

//    testArray.removeAt(index);

//    return testArray[assertIndex] !== assertArray[assertIndex] && testArray.length === assertArray.length;
//})();

//// Test negative index removal
//// Expected: 
//// 1) specific index is removed 
//// 2) additional array contents preserved
//(function () {
//    var testArray = ['1', 'hello', { key: "value" }, 500];
//    var assertArray = ['1', 'hello', 500];
//    var index = -2;
//    var assertIndex = 2;

//    testArray.removeAt(index);

//    return testArray[assertIndex] === assertArray[assertIndex] && testArray.length === assertArray.length;
//})();

//// Test positive index range removal
//// Expected: 
//// 1) specific index is removed 
//// 2) additional array contents preserved
//(function () {
//    var testArray = ['1', 'hello', { key: "value" }, 500];
//    var assertArray = ['1', 500];
//    var fromIndex = 1;
//    var toIndex = 2;
//    var assertIndex = 1;

//    testArray.removeAt(fromIndex, toIndex);

//    return testArray[assertIndex] === assertArray[assertIndex] && testArray.length === assertArray.length;
//})();

//// Test negative index range removal
//// Expected: 
//// 1) specific index is removed 
//// 2) additional array contents preserved
//(function () {
//    var testArray = ['1', 'hello', { key: "value" }, 500];
//    var assertArray = ['1', 500];
//    var fromIndex = -2;
//    var toIndex = -1;
//    var assertIndex = 1;

//    testArray.removeAt(fromIndex, toIndex);

//    return testArray[assertIndex] !== assertArray[assertIndex] && testArray.length === assertArray.length;
//})();

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

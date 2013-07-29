// Determines if an object is in an array
Array.prototype.objectInArray = function (obj) {
    for (var i = 0; i < this.length; i++) {
        if (Object.equals(this[i], obj)) {
            return i;
        }
    }

    return -1;
};
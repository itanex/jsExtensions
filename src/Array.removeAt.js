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
// isANumber Assertion Tests
// Math.isANumber(value);

// Test literal positive integer value
(function () {
   var expected = true;

   return Math.isANumber(123456) == expected;
})();

// Test literal positive double value
(function () {
   var expected = true;

   return Math.isANumber(123456.654) == expected;
})();

// Test literal negative integer value
(function () {
   var expected = true;

   return Math.isANumber(-123456) == expected;
})();

// Test literal negative double value
(function () {
   var expected = true;

   return Math.isANumber(-123456.654) == expected;
})();

// Test literal positive double value, with trailing '.' and no following numbers
(function () {
   var expected = false;

   return Math.isANumber(123456.) == expected;
})();

// Test literal negative double value, with trailing '.' and no following numbers
(function () {
   var expected = false;

   return Math.isANumber(-123456.) == expected;
})();

// Test stringy-number positive integer value
(function () {
   var expected = true;

   return Math.isANumber("123456") == expected;
})();

// Test stringy-number positive double value
(function () {
   var expected = true;

   return Math.isANumber("123456.654") == expected;
})();

// Test stringy-number negative integer value
(function () {
   var expected = true;

   return Math.isANumber("-123456") == expected;
})();

// Test stringy-number negative double value
(function () {
   var expected = true;

   return Math.isANumber("-123456.654") == expected;
})();

// Test stringy-number positive double value, with trailing '.' and no following numbers
(function () {
   var expected = false;

   return Math.isANumber("123456.") == expected;
})();

// Test stringy-number negative double value, with trailing '.' and no following numbers
(function () {
   var expected = false;

   return Math.isANumber("-123456.") == expected;
})();

// Test literal empty object
(function () {
   var expected = false;

   return Math.isANumber({}) == expected;
})();

// Test literal object with params
(function () {
   var expected = false;

   return Math.isANumber({param:"hello"}) == expected;
})();

// Test literal empty array
(function () {
   var expected = false;

   return Math.isANumber([]) == expected;
})();

// Test literal array with content
(function () {
   var expected = false;

   return Math.isANumber(["19123", "hello"]) == expected;
})();

// Test empty string
(function () {
   var expected = false;

   return Math.isANumber("") == expected;
})();

// Test empty space string
(function () {
   var expected = false;

   return Math.isANumber(" ") == expected;
})();

// Test string with string value (not number as string)
(function () {
   var expected = false;

   return Math.isANumber("hello world") == expected;
})();

// Test empty param list
(function () {
   var expected = false;

   return Math.isANumber() == expected;
})();

// Test null 
(function () {
   var expected = false;

   return Math.isANumber(null) == expected;
})();

// Test null 
(function () {
   var expected = false;

   return Math.isANumber(undefined) == expected;
})();

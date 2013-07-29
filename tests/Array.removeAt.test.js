// Array.prototype.removeAt Assertion Tests

// Test positive index removal
// Expected: 
// 1) specific index is removed 
// 2) additional array contents preserved
(function () {
   var testArray = ['1', 'hello', { key: "value" }, 500];
   var assertArray = ['1', { key: "value" }, 500];
   var index = 1;
   var assertIndex = 1;

   testArray.removeAt(index);

   return testArray[assertIndex] !== assertArray[assertIndex] && testArray.length === assertArray.length;
})();

// Test negative index removal
// Expected: 
// 1) specific index is removed 
// 2) additional array contents preserved
(function () {
   var testArray = ['1', 'hello', { key: "value" }, 500];
   var assertArray = ['1', 'hello', 500];
   var index = -2;
   var assertIndex = 2;

   testArray.removeAt(index);

   return testArray[assertIndex] === assertArray[assertIndex] && testArray.length === assertArray.length;
})();

// Test positive index range removal
// Expected: 
// 1) specific index is removed 
// 2) additional array contents preserved
(function () {
   var testArray = ['1', 'hello', { key: "value" }, 500];
   var assertArray = ['1', 500];
   var fromIndex = 1;
   var toIndex = 2;
   var assertIndex = 1;

   testArray.removeAt(fromIndex, toIndex);

   return testArray[assertIndex] === assertArray[assertIndex] && testArray.length === assertArray.length;
})();

// Test negative index range removal
// Expected: 
// 1) specific index is removed 
// 2) additional array contents preserved
(function () {
   var testArray = ['1', 'hello', { key: "value" }, 500];
   var assertArray = ['1', 500];
   var fromIndex = -2;
   var toIndex = -1;
   var assertIndex = 1;

   testArray.removeAt(fromIndex, toIndex);

   return testArray[assertIndex] !== assertArray[assertIndex] && testArray.length === assertArray.length;
})();
// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
/* 
I: A number
O: The factorial of that number
C: n/a
E:
*/

var factorial = function(n, product = 1) {
  if (n < 0){ // Base case
    return null;
  }
  if (n === 1 || n === 0){ // Base case
    return product; 
  }
  // recursion
  product *= n // product = product * n
  return factorial(n - 1, product); // Recall factorial with n - 1
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
/*
I: An array of integers
O: Sum of the elements of the integers
C: n/a
E: n/a
 */
var sum = function(array) {
  if (array.length === 0){ // Base case
    return 0 // Return 0 for sum() once array.length === 0
  }
  // recursion

  return array[0] + sum(array.slice(1)) // Add array[0] and the value of recalling the function with the next index
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};
/*
I: A number
O: A boolean value
C: n/a
E: n/a
*/
// 4. Check if a number is even.
var isEven = function(n) {
  if (n < 0){ // convert negative number to positive
    return isEven(n * -1); // Then restart the function call
  }
  if (n === 1){ // Base case
  return false; // Return false once n === 1
} else if (n === 0){ // Base case
    return true; // Return true once n === 0 
  }
  return isEven(n - 2); // Restart function call with n - 2 as arguement
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
/*
I: Number
O: Sum of all the numbers below <number>
C: n/a
E: Negative Numbers? 
*/
var sumBelow = function(n) {
  if (n === 0){ // Base case
    return 0 // return 0 when n = 0
  } else if (n < 0){ // For negative numbers
    return n + 1 + sumBelow(n + 1); // Add n + 1 to the value of calling sumBelow on the next highest integer
  }
  // recursion
  return n - 1 + sumBelow(n - 1) // Add n - 1 to the value of calling sumBelow on the next lowest integer
};


// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
/*
I: Two integers
O: The range between the integers
C: Return an array, accepts negative numbers, if starting integer is larger than ending
E: If no numbers are in range? 
*/
var range = function(x, y, output=[]) {
  if (x + 1 === y || x === y || x - 1 === y){ // For integers with no range between
    return output
  }
  if (x < y){
    output.push(x + 1);
    return range(x + 1, y, output);
  }
  if (x > y){
    output.push(x - 1);
      return range(x - 1, y, output);
    }
  }


// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
/* 
I: Base number and exponent number
O: Number
C: Return 1 if exp is 0
E: Should accept negative exponenets
*/

var exponent = function(base, exp) {
  if (exp === 1){ // Base case for positive exp
    return base;
  }
  if (exp === 0){ // Numbers to the power of zero are equal to 1
    return 1;
  }
  if (exp === -1){  // Base case for negative exp
    return (1 / base);
  } else if (exp < 0){
    return (1 /  base) * (exponent(base, exp + 1));
  }
  return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
/* 
I: Number
O: Boolean valie
C: n/a
E: n/a
*/
// The powers of a number are those that can be the result of raising that number to a power
// Test if a n is a power of two by continuously dividing n by 2
// If n becomes 1 then n is a power of 2 
// If at any point n % 2 === 1 then n is not a power of 2
var powerOfTwo = function(n) {
  if (n < 1){ // Numbers less than 1 cannot be powers of 2
    return false;
  }
  if (n === 1){ // Base case
    return true;
  }
  return powerOfTwo(n / 2); // Keep dividing a number by 2 until it not longer can be divided by 2, or n becomes 1
};

// 9. Write a function that accepts a string a reverses it.
/*
I: String
O: String reversed
C: n/a
E: n/a
*/
var reverse = function(string) { 
  if (string.length === 0){ // Base case
    return ''; // Empty string
  }
  return string[string.length - 1] + reverse(string.slice(0, -1)) // Return lass character of string
  // + recall function with last character removed
};

// 10. Write a function that determines if a string is a palindrome.
/*
I: String
O: Boolean Value
C: n/a
E: n/a
*/
var palindrome = function(string) {
  if (string.length <= 1){ // Base case
    return true;
  }
  if (string[0] === ' '){ // Eliminate space
    return palindrome(string.slice(1));
  }
  if (string[string.length - 1] === ' '){ // Eliminate space
    return palindrome(string.slice(0, -1));
  }
  if (string[0].toUpperCase() === string[string.length - 1].toUpperCase()){
    return palindrome(string.slice(1, -1)); // If the first and last character are the same
  } else {                                // recall function with first and last characters removed
    return false; // Return false if the first and last charactera are ever not the same
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
/*
I: Two numbers
O: The product of the numbers
C: n/a
E: n/a
*/
var multiply = function(x, y) {
  if (y === 0){
    return 0;
  }
  if (y > 0){
    return x + multiply(x, y - 1);
  }
  if (y < 0){
    return -multiply(x, -y);
  }
};



// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
/*
I: Two strings
O: Boolean vale
C: n/a
E: n/a
*/
// Test if strings are identical 
var compareStr = function(str1, str2) {
  if (str1.length === 0 && str2.length === 0){
    return true; // If both strings lengths are 0 then the strings were equal
  }
  // recursion
  if (str1[0] === str2[0]){ // Compare first characters of each string
    return compareStr(str1.slice(1), str2.slice(1)) // Recall function if they are equal
  } else { 
    return false; // False if characters are different 
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
/*
I: String
O: An array of the string split 
C: n/a
E: n/a
*/
var createArray = function(str, output=[]){
  if (str.length === 0){ // Once string length is 0 return the output
    return output;
}
output.push(str[0]); // push first character onto output
return createArray(str.slice(1), output); // recall function with sliced string
};

// 17. Reverse the order of an array
/*
I: Array
O: Reversed array
C: n/a
E: n/a
*/
var reverseArr = function (array, output=[]) {
  if (array.length === 0){ // Base case
    return output; // Return output when array has no more elements
  }
  output.unshift(array[0]); // Add element to the front of the array
  return reverseArr(array.slice(1), output); // recall function with new sliced array
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
/*
I: Value and Length
O: An array of the value <length> number of times
C: n/a
E: n/a
*/
var buildList = function(value, length, output=[]) {
  if (length === 0){ // Base case
    return output // Return output when length is 0
  }
  output.push(value); // Push value onto the output array
  return buildList(value, length - 1, output);
}; // Recall the function with length decremented

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
/*
I: Array and a value to look for
O: Number if times value is in the array
C: n/a
E: n/a
*/
var countOccurrence = function(array, value, output=[]) {
  if (array.length === 0){ // Base case
    return output.length; // Once array length is 0 all elements have been checked
  }
  if (array[0] === value){
    output.push(value);
  }
  return countOccurrence(array.slice(1), value, output);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------

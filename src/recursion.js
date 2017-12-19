// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
    if(n < 0){
        return null
    }else if (n < 2){
        return 1;
    }else{
        return n * factorial(n-1);
    }
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
    if(array.length === 0){
        return 0;
    }
    else if(array.length === 1){
        return array[0];
    }else{
        return array[0] + sum(array.slice(1));
    }
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
    if(array.length === 0){
        return 0;
    }else if(array.length === 1){
        if(!Array.isArray(array[0])){
            return array[0];
        }else{
            return arraySum(array[0]);
        }
    }else if(Array.isArray(array[0])){
        return arraySum(array[0]) + arraySum(array.slice(1));
    }else{
        return array[0] + arraySum(array.slice(1));
    }
};

// 4. Check if a number is even.
var isEven = function(n) {
    if( n === 0){
        return true;
    }else if(n === 1){
        return false;
    }else if(n > 0){
        return isEven(n - 2);
    }else{
        return isEven(n + 2);
    }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
    if(n === 0){
        return 0;
    }else if( n < 0){
        return n + 1 + sumBelow(n+1);
    }else{
        return n - 1 + sumBelow(n-1);
    }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
    if(x === y - 1 || x === y || x === y + 1){
        return [];
    }else if(x < y - 1){
        return [x + 1].concat(range(x + 1, y))
    }else{
        return [x - 1].concat(range(x - 1, y));
    }
};
// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
   
    if(exp === 0){
        return 1;
    }else if( exp === 1 || exp === -1){
        return base;
    }else if(exp > 0){
        return base * exponent(base, --exp);
    }else{
        return 1 / exponent(base, 0 - exp);
    }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) { //note this does not include decimal points.
    if(n === 1){ //handle true base case
        return true; 
    }else if(n <= 0){ //handle never true base case / bad input
        return false; 
    }else if(n > 1 && n/2 < 1){ //handle false base case after getting to final iteration
        return false;
    }else if(n > 1){ //handle recursive case for numbers larger than 1;
        return powerOfTwo(n / 2); 
    }else{
        return powerOfTwo(n * 2); //handle recursive case for numbes smaller than 1;
    }
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
    if(string.length === 0){
        return "";
    }else if(string.length === 1){
        return string[0];
    }else{
        return string[string.length - 1] + reverse(string.slice(0, -1));
    }
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
    //one true base case
    if(string.length === 1){
        return true;
    //second true base case
    }else if(string.length === 2 && string[0].toLowerCase() === string[1].toLowerCase()){
        return true;
    //handle space at start of string
    }else if(string[0] === " "){
        return palindrome(string.slice(1));
    //handle space at end of string
    }else if(string[string.length - 1] === " "){
        return palindrome(string.slice(0, -1));
    //false base case
    }else if(string[0].toLowerCase() !== string[string.length - 1].toLowerCase()){
        return false;
    //all recurseive cases
    }else{
        return palindrome(string.slice(1, -1));
    }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
    if(y === 0){
        return NaN;
    }else if(x < y && x > -1){ 
        return x
    }else if(x < 0 && y < 0){
        return 0 - modulo(0 - x, 0 - y);
    }else if(x < 0 && y > 0){
        return 0 - modulo(0 - x, y);
    }else if(x > 0 && y < 0){
        return modulo(x, 0 - y);
    }else{
        return (modulo(x - y, y));
    }
    
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
    if(y === 0 || x === 0){
        return 0;
    }else if(x > 0 && y > 0){
        return x + multiply(x, --y);
    }else if(x < 0 && y < 0){
        return multiply(0 - x, 0 - y);
    } else if(x < 0 && y > 0){
        return x + multiply(x, --y);
    }else if(x > 0 && y < 0){
        return y + multiply(--x, y);
    }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.

/*
    check for all cases:
    divide(2, 6)
    1) y = 0: NaN
    2) y OR x is < 0: return negated divide with both positive
    3) x > y : return divide with x = x - y
    4) x < y : hmmmmm...... 
                add x by itself 10 times, pass that as x, increment warn by one, 'shift' number warn times
*/
var divide = function(x, y, counter = 0) {
    if(y === 0){
        return NaN;
    }else if (x === 0){
        return counter;
    }else if(x < y && x > 0){
        return counter;
    }else if(x < 0 && y < 0){
        return  divide(0 - x, 0 - y, counter);
    }else if(x < 0){
        return 0 - divide(0 - x, y, counter);
    }else if(y < 0){
        return 0 - divide(x, 0 - y, counter);
    }else if(x > y - 1){
        return divide(x - y, y, counter + 1);
    }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y, g) {
    if(x < 0 || y < 0){
        return null
    }else if(x > y){
        if(g === undefined){
            g = y;
        }
        return (x % g === 0 && y % g === 0) ? g : gcd(x, y, g - 1);
        
    }else{// y > x
        if(g === undefined){
            g = x;
        }
        return (x % g === 0 && y % g === 0) ? g : gcd(x, y, g - 1);
        
    }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
    //my original code, compared string lengths before anything... so falses were immediately false. changed to pass tests.:
    // if(str1.length !== str2.length || str1[0] !== str2[0]){
    //     return false;
    // }else if( str1.length === 0){
    //     return true;
    // }else{
    //     console.log("hit recursive case...");
    //     return compareStr(str1.slice(1), str2.slice(1));
    // }
    if(str1.length === 0 && str2.length === 0){
        return true;
    }else if((str1.length === 0 && str2.length > 0) || (str1.length > 0 && str2.length === 0)){
        return false;
    }else if(str1[0] !== str2[0]){
        return false;
    }else if(str1.length > 0 && str2.length > 0){
        
        return compareStr(str1.slice(1), str2.slice(1));
    }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
    if(str.length === 0){
        return [];
    }else{
        return [str[0]].concat(createArray(str.slice(1)));
    }
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
    if(array.length === 0){
        return [];
    }else{
        return [array[array.length - 1]].concat(reverseArr(array.slice(0, -1)));
    }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
    return length === 0? [] : [value].concat(buildList(value, --length));
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
    if(array.length === 0){
        return 0;
    }else{
        if(array[0] === value){
            return 1 + countOccurrence(array.slice(1), value);
        }
        return countOccurrence(array.slice(1), value);
    }
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
// var rMap = function(array, callback, i = 0, manipArr = array.slice()) {
var rMap = function(array, callback, i = 0) {//may need to get rid of this

    // return manipArr.length === 0 ? [] : [callback(manipArr[0], i, array)].concat(rMap(array, callback, ++i, manipArr.slice(1)));
        return i === array.length ? [] : [callback(array[i], i, array)].concat(rMap(array, callback, ++i));

};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key, keys = Object.keys(obj)) {
    if(keys.length === 0){
        return 0;
    }else if(keys[0] === key){
        if(typeof obj[keys[0]] === 'object'){
            return 1 + countKeysInObj(obj, key, keys.slice(1)) + countKeysInObj(obj[keys[0]], key)
        }
        return 1 + countKeysInObj(obj, key, keys.slice(1))
    }else{  
        if(typeof obj[keys[0]] === 'object'){
            return countKeysInObj(obj, key, keys.slice(1)) + countKeysInObj(obj[keys[0]], key);
            
        }
        return countKeysInObj(obj, key, keys.slice(1));
    }
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value, values = Object.values(obj)) {
    if(values.length === 0){
        return 0;
    }else if(values[0] === value){
        if(typeof values[0] === 'object'){
            return 1 + countValuesInObj(obj, value, values.slice(1)) + countValuesInObj(values[0], value);
        }
        return 1 + countValuesInObj(obj, value, values.slice(1));
    }else{
        if(typeof values[0] === 'object'){
             return countValuesInObj(obj, value, values.slice(1)) + countValuesInObj(values[0], value); 
        }
        return countValuesInObj(obj, value, values.slice(1));
        
    }
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey, copy = Object.assign(obj), keys = Object.keys(copy)) {
    if(keys.length === 0){
        return copy
    }else if(copy.hasOwnProperty(key)){
        copy[newKey] = copy[key];
        delete copy[key];
    }

    if(typeof copy[keys[0]] === 'object'){
        copy[keys[0]] = Object.assign(replaceKeysInObj(copy[keys[0]], key, newKey))
    }
    return replaceKeysInObj(obj, key, newKey, copy, keys.slice(1));
    
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
    if(n < 1){
        return null;
    }else if(n === 1){
        return [0 ,1];
    }else{
        var prev = fibonacci(n - 1);
        return prev.concat(prev[prev.length - 2] + prev[prev.length - 1]);
    }
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
    if(n < 0){
        return null;
    }else if(n === 0){
        return 0;
    }else if(n === 1){
        return 1;
    }else{
        return nthFibo(n - 1) + nthFibo(n - 2);
    }
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
    return input.length === 0? [] : [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)));
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
    return array.length === 0 ? [] : [`${array[0][0].toUpperCase()}${array[0].slice(1)}`].concat(capitalizeFirst(array.slice(1)));
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
var nestedEvenSum = function(obj, values = Object.values(obj)) {
    if(values.length === 0){
        return 0;
    }else{
        if(typeof values[0] === 'object'){
            return nestedEvenSum(values[0]) + nestedEvenSum(obj, values.slice(1));
        }else if(typeof values[0] === 'number' && values[0] % 2 === 0){
            return values[0] + nestedEvenSum(obj, values.slice(1));
        }else{
            return nestedEvenSum(obj, values.slice(1));
        }
    }
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
    if(arrays.length === 0){
        return [];
    }else if(Array.isArray(arrays[0])){
        return flatten(arrays[0]).concat(flatten(arrays.slice(1)));
    }
    return [arrays[0]].concat(flatten(arrays.slice(1)));
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
    if(str.length === 0){
        return obj;
    }else{
        obj[str[0].toLowerCase()] = obj[str[0].toLowerCase()] + 1 || 1;
        return letterTally(str.slice(1), obj);
    }
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]

//DID THIS BY ADDING ANOTHER PARAMETER
// var compress = function(list, newList = []) {
//     if(list.length === 0){
//         return [];
//     }else if(newList.length > 0 && list[0] === newList[newList.length - 1]){
//         return compress(list.slice(1), newList);
//     }else{
//         return [list[0]].concat(compress(list.slice(1), newList.concat(list[0])));
//     }
// };

//did this by recursively comparing first and second element of list
var compress = function(list) {
    if(list.length === 0){
        return [];
    }else if(list[0] === list[1]){
        return compress(list.slice(1));
    }else{
        return [list[0]].concat(compress(list.slice(1)));
    }
};


// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
    if(array.length === 0){
        return [];
    }else{
        if(array[0]){
            array[0] = array[0].concat(aug);
        }
        return ([array[0]]).concat(augmentElements(array.slice(1), aug));
    }
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
    if(array.length === 0){
        return [];
    }else if(array[0] === 0 && array[1] === 0){
        return minimizeZeroes(array.slice(1));
    }else{
        return [].concat(array[0], minimizeZeroes(array.slice(1)));
    }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, i = 0) {
    if(array.length === 0){
        return [];
    }else if(((i % 2 === 0) && (array[0] < 0)) || ((i % 2 === 1) && (array[0] > 0)) ){
        return [].concat(0 - array[0], alternateSign(array.slice(1), ++i));
    }else{
        return [].concat(array[0], alternateSign(array.slice(1), ++i));
    }
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
    if(str.length === 0){
        return "";
    }else{
        switch(str[0]){
           case '0':
               return "zero" + numToText(str.slice(1));
           case '1':
               return "one" + numToText(str.slice(1));
           case '2':
               return "two" + numToText(str.slice(1)); 
           case '3':
               return "three" + numToText(str.slice(1));
           case '4':
               return "four" + numToText(str.slice(1));
           case '5':
               return "five" + numToText(str.slice(1));
           case '6':
               return "six" + numToText(str.slice(1));
           case '7':
               return "seven" + numToText(str.slice(1));
           case '8':
               return "eight" + numToText(str.slice(1));
           case '9':
               return "nine" + numToText(str.slice(1));
           default:
                return str[0] + numToText(str.slice(1));
        }
    }
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
    console.log(document);
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min = 0, max = array.length) {
   
    
    if(max - min === 0){
        return  null;
    }else if(max - min === 1 && array[min] !== target){
        
        return null;
    }else if(array[Math.floor((max + min) / 2)] === target){
        return Math.floor((max + min) / 2);
    }else if(array[Math.floor((max + min) / 2)] < target){
        return binarySearch(array, target, Math.floor((max + min) / 2), max);
    }else{
        return binarySearch(array, target, min, Math.floor((max + min) / 2));
    }
};
//8557576081

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};

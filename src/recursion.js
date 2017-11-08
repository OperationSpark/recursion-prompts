// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n, res = 1) {
    if (n === 0){
        return res;
    }
    if (n < 0){
        return null;
    }
    res *= n;
    n--;
    return factorial (n, res);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array, res = 0) {
    if (array.length === 0){
        return res;
    }
        res += array[0];
        return sum(array.slice(1),res);
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array, counter = 0) {
    array.forEach(function(numOrArr){
        if (Array.isArray(numOrArr)){
            counter = arraySum(numOrArr, counter);
        }
        else {
            counter += numOrArr;
        }
    });
    return counter;
};

// 4. Check if a number is even.
var isEven = function(n) {
    //if n > 1 
    // return isEven n-2
    //if n < 0
    //return isEven n+2
// if n === 0 even
//if n === 1 return odd
// debugger;
   if (n < 0){
       n = n+2;
       return isEven(n);
   }
   if (n === 1){
       return false;
   }
   if (n === 0){
       return true;
   }
   n = n-2;
   return isEven(n)
};
// isEven(10);

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n, sum = 0) {
    if (n === 0){
        return sum;
    }
    if (n < 0){
        return n+1 + sumBelow(n+1);
    }
    return n-1 + sumBelow(n-1);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, res = []) {
    if (x === y){
        return res;
    }
    if (!x && !y){
        return res;
    }
    if (x < y){
        if (y-x === 1){
            return res;
        }
        res.push(x+1);
        range(x+1, y, res);
    }
    if (y < x){
        if (x - y === 1) {
            return res;
        }
        res.push(x-1);
        range(x-1, y, res);
    }
    return res;
};
// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
    if (exp === 0){
        return 1;
    }
    if (exp === 1){
        return base;
    }
    // debugger;
    if (exp < 0){
        return (1/ exponent(base, -exp));
    }
    return base * exponent(base, --exp);
};



// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
    if (n % 2 === 0){
        if (n > 2){
            return powerOfTwo(n/2);
        }
        if (n <= 0){
            return false;
        }
        else {
            return true;
        }
    }
    else {
        if (n === 1){
            return true;
        }
        else {
            return false;
        }
    }
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
    if (string.length === 0){
        return "";
    }
    return string[string.length-1] + reverse(string.slice(0,string.length-1));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
    var x = string.split(" ").join('').toLowerCase();
    if (string.length === 0 || string.length === 1){
        return true;
    }
    if (x[0] === x[x.length-1]){
        return palindrome(string.slice(1, string.length-1));
    }
    else {
        return false;
    }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y, res = 0, iterator = 0) {
    if (y === 1){
        return 0;
    }
    if (x === 0 && y === 0) {
        res = NaN;
        return res;
    }
    if (x === 0){
        return res;
    }
    if (x > 0 && y > 0){
        if (x > y){
            if (iterator > (x-y)){
                res = x-iterator;
                return res;
            }
            res++;
            iterator += y;
            return modulo(x, y, res, iterator);
        }
    }
    if (x < 0 && y < 0){
        if (x < y){
            x = -x;
            y = -y;
            res--;
            return res;
        }
    }
    if (x < 0 && y > 0){
        if (-x < y){
            return x;
        }
        if (-x > y){
            res++;
            iterator += y;
            x = -x;
            return modulo(x, y, res, iterator);
        }
    }
    if (x < y) {
        return x;
    }
    if (x < 0 && y < 0 && x > y){
        if (-x < -y){
            return x;
        }
        if (-x > -y){
            x = -x;
            y = -y
            res++;
            return modulo(x-y, y, res);
        }
    }
    if (x < 0 && y < 0 && -x > y) {
        x = -x;
        res++;
        return modulo(x-y, y, res);
    }
};


// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
    if (y === 0)
        return 0;
    if (y > 0)
        return (x + multiply(x, y - 1));
    if (y < 0)
        return multiply(-x, -y);
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y, res, counter = 0) {
    if (y === 1){
        return x;
    }
    if (x === 0 && y === 0){
        counter = NaN;
        return counter;
    }
    if (x === 0) {
        return counter;
    }
    if (x<y){
        return counter;
    }
    if(x > 0 && y > 0 && x > y){
        counter++;
        return divide(x-y, y, res, counter);
    }
    if (x > 0 && y > 0 && x === y) {
        counter++;
        return divide(x - y, y, res, counter);
    }
    if (x > 0 && y > 0 && y >x){
        return counter;
    }
    if (x < 0 && y > 0 ){
        return counter;
    }
    if (x < 0 && y < 0 && y < x){
        return counter;
    }
};
// divide(8, 4);
// divide(17, 5);
// divide(0,0);

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function (x, y) {
    if (x === y) {
        return x;
    }
    if (x < 0 || y < 0) {
        return null;
    }
    if (x > y) {
        x = x - y;
        return gcd(x, y);
    } else {
        y = y - x;
        return gcd(x, y);
    }
};
gcd(24,88);

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
    // debugger;
    if (str1 === "" && str2 === ""){
        return true;
    }
    else {
        if (str1[0] === str2[0]){
            return compareStr(str1.slice(1), str2.slice(1));
        }
    }
    return false;
};
// compareStr(str1,str2);

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, res = []){
    if (!str.length){
        return res;
    }
    res.push(str[0]);
    return createArray(str.slice(1), res)
};

// 17. Reverse the order of an array
var reverseArr = function (array, res = []) {
    if (!array.length){
        return res;
    }
    res.unshift(array[0]);
    return reverseArr(array.slice(1),res);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, res = []) {
    // debugger;
    if (length === 0){
        return res;
    }
    if (length > 0){
        res.push(value);
        return buildList(value, --length, res);
    }
};
// buildList(0, 5);

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, counter = 0) {
    if (!array.length){
        return counter;
    }
    if (array.length > 0){
        if (value === array[0]){
            counter ++;
        }
    return countOccurrence(array.slice(1), value, counter);    
    }
}; 


// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, res = [], i = 0) {
    if (i === array.length){
        return res;
    }
    res.push(callback(array[i], i, array));
    i++;
    return rMap(array,callback,res,i);
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
    // debugger;
    var num = 0;
    for (var prop in obj) {
        if (prop === key) {
            num++;
        }
        var value = obj[prop];
        if (typeof value === 'object') {
            num += countKeysInObj(value, key);
        }
    }
    return num;
};
// var testobj = { 'e': { 'x': 'y' }, 't': { 'r': { 'e': 'r' }, 'p': { 'y': 'r' } }, 'y': 'e' };
// countKeysInObj(testobj, 'r');
// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
    // debugger;
    var num = 0;
    for (var prop in obj) {
        if (obj[prop] === value) {
            num++;
        }
        var val = obj[prop];
        if (typeof val === 'object') {
            num += countValuesInObj(val, value);
        }
        // else {
        //     prop++
        //     countValuesInObj(val, value);
        // }
    }
    return num;
};
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r')
// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function (obj, key, newKey) {
    //create a new obj
    var resObj = {};
    for (var k in obj) {
        if (k === key) {
            resObj[newKey] = obj[k];
        } else if (typeof obj[k] === "object") {
            resObj[k] = replaceKeysInObj(obj[k], key, newKey);
        } else {
            resObj[k] = obj[k];
        }
    }
    return resObj;
    // debugger;
    // for (var prop in obj){
    //     if (prop === key){
    //         obj[newKey] = obj[prop];
    //     }
    //     if (typeof obj[prop] === "object"){
    //         // obj[prop] = 
    //         replaceKeysInObj(obj[prop], key, newKey);
    //     }
    // }
    // return obj;
};

// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// replaceKeysInObj(testobj, 'r', 'a');
// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
    if (n <= 0) {
        return null;
    }
    if (n === 1) {
        return [0, 1];
    }
    if (n < 3) return [0, 1, 1];
    else {
        var addOn = [fibonacci(n - 1)[fibonacci(n - 1).length - 1] + (fibonacci(n - 1)[fibonacci(n - 1).length - 2])];
        return fibonacci(n - 1).concat(addOn);
    }
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
     if (n < 0) {
         return null;
     } else if (n === 1) {
         return 1;
     }
     return nthFibo(n - 1) + nthFibo(n - 2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = (input, res = []) => {
    if (!input.length){
        return res;
    }
    res.push(input[0].toUpperCase());
    return capitalizeWords(input.slice(1), res);
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, res = []) {
    if (!array.length) {
        return res;
    }
    res.push(array[0].charAt(0).toUpperCase() + array[0].slice(1));
    return capitalizeFirst(array.slice(1), res);
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
var nestedEvenSum = function(obj, sum = 0) {
    // debugger;
    for (var prop in obj){
        var value = obj[prop];
        if(value % 2 === 0){
            sum += value;
        }
        else {
            if(typeof value === "object"){
                sum = nestedEvenSum(value, sum);
            }
        }
    }
    return sum;
};
// var obj1 = {
//           a: 2,
//           b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//           c: {c: {c: 2}, cc: 'ball', ccc: 5},
//           d: 1,
//           e: {e: {e: 2}, ee: 'car'}
//         };
//         nestedEvenSum(obj1)

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays, flat = []) {
    // debugger;
        arrays.forEach(item => {
            if (Array.isArray(item)) {
                flat.push(...flatten(item));
            } else {
                flat.push(item);
            }
        });
    return flat;
};
// flatten([1, [2], [3, [[4]]], 5]);
// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
    // debugger;
    if (!str.length){
        return obj;
    }
    if (obj[str[0]]){
        obj[str[0]]++;
        return letterTally(str.slice(1), obj);
    }
    if (!obj[str[0]]) {
        obj[str[0]] = 1;
        return letterTally(str.slice(1), obj);
    }
};
// letterTally('potato');
// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, res = []) {
    if (!list.length){
        return res;
    }
    if (list[0] === list[1]){
        return compress(list.slice(1), res);
    }
    else{
        res.push(list[0])
        return compress(list.slice(1), res);
    }
};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug, res = []) {
    // debugger;
    if (array.length === 0){
        return res;
    }
    else {array[0].push(aug);
    res.push(array[0]);
    augmentElements(array.slice(1), aug, res);
    }
    return res;
};
// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, res = []) {
    if (!array.length){
        return res;
    }
    if (array[0] === 0 && array[1] === 0){
        return minimizeZeroes(array.slice(1), res);
    }
    else {
        res.push(array[0]);
        return minimizeZeroes(array.slice(1), res);
    }
};


// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, res = []) {
// debugger;
    if (array.length === 0){
        return res;
    }
    if (array[0] === 0 && array[1] === 0){
        return alternateSign(array.slice(1), res);
    }
    if (!res.length && array[0] < 0){
        res.push(-array[0]);
        return alternateSign(array.slice(1), res);
    }
    if (res.length === 1 && array [0] > 0 ){
        res.push(-array[0]);
        return alternateSign(array.slice(1), res);
    }
    if (res.length === 1 && array[0] < 0){
        res.push(array[0]);
        return alternateSign(array.slice(1), res);
    }
    if (!res[res.length -1]){
        if (array[0] > 0){
            res.push(array[0]);
            return alternateSign(array.slice(1), res);
        }
        if (array[0] < 0){
            res.push(-array[0]);
            return alternateSign(array.slice(1), res);
        }
    }
    if (res[res.length - 1] > 0) {
        if (array[0] > 0) {
            res.push(-array[0]);
            return alternateSign(array.slice(1), res);
        }
        if (array[0] < 0) {
            res.push(array[0]);
            return alternateSign(array.slice(1), res);
        }
    }
    if (res[res.length - 1] < 0) {
        if (array[0] > 0) {
            res.push(array[0]);
            return alternateSign(array.slice(1), res);
        }
        if (array[0] < 0) {
            res.push(-array[0]);
            return alternateSign(array.slice(1), res);
        }
    }

}; 
// alternateSign([2, -7, 8, -3, 1, -4]);

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str, modded = []) {
    // debugger;
    if (str.length === 0){
        var joinedMod = modded.join(" ");
        return joinedMod;
    }
    var numStringObj = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten"
    };
    // var test = [];
    var splitString = str.split(' ');
    for (var key in numStringObj){
        if (splitString[0] === key){
            modded.push(numStringObj[key]);
            var x = splitString.slice(1);
            str = x.join(' ');
            return numToText(str, modded);
        }
        // else {
        //     test.push(numStringObj[key]);
        // }
    }
    if (modded[0] === splitString[0]){
        null;
    }
    if (modded[0] !== splitString[0]){
        modded.push(splitString[0]);
    }
    var splitTakeAway = splitString.slice(1);
    str = splitTakeAway.join(' ');
    return numToText(str, modded);
};
// numToText("I have 5 dogs and 6 ponies");
// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
    return document.getElementsByTagName(tag).length;
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min = 0, max) {
    max = array.length;
        if (array[min] === target) { 
            return min; 
        }
        if (min === max) { 
            return null; 
        }
    return binarySearch(array, target, ++min, max);
};



// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
    var min = Infinity;
    var duplicate = Array.from(arguments)[1] || array.slice();
    var res = Array.from(arguments)[2] || [];
    if (res.length === array.length) {
        return res;
    }
    for (var i = 0; i < duplicate.length; i++) {
        if (duplicate[i] < min) {
            min = duplicate[i];
        }
    }
    res.push(min);
    duplicate.splice(duplicate.indexOf(min), 1);
    return mergeSort(array, duplicate, res);
};


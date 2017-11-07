// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n, i = n, solution = 1) {
    if(n < 0) {
        return null;
    }else if(n === 0){
        return 1;
    }
    if(i === 1){
        return solution;
    }
    solution *= i;
    i--;
    return factorial(n, i, solution);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array, i = 0, solution = 0) {
    if(i === array.length) {
        return solution;
    }
    solution += array[i];
    i++;
    return sum(array, i, solution);
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function (array, flattened = [], counter = 0, i = 0) {
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            arraySum(array[i], flattened);
        } else if (typeof array[i] === 'number') {
            flattened.push(array[i]);
        }
    }
    for (let i = 0; i < flattened.length; i++) {
        counter += flattened[i];
    }
    return counter;
};

// 4. Check if a number is even.
var isEven = function (n) {
    n = Math.abs(n);
    if (n === 0) {
        return true;
    } else if (n === 1) {
        return false;
    }
    return isEven(n -= 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function (n, sum = 0, i = n) {
    if (i > 0) {
        sum += (i - 1);
        i--;
        return sumBelow(n, sum, i);
    } else if (i < 0) {
        sum += (i + 1);
        i++;
        return sumBelow(n, sum, i);
    }
    if (i === 0) {
        return sum;
    }
    sum += i;
    i--;
    return sumBelow(n, sum, i);
}

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function (x, y, i = x, result = []) {
    if (x === y) {
        return result;
    }
    if (x < y) {
        if (i === y - 1) {
            return result;
        }
        i++;
        result.push(i);
        return range(x, y, i, result);
    } else if (x > y) {
        if (i === y + 1) {
            return result;
        }
        i--;
        result.push(i);
        return range(x, y, i, result);
    }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function (base, exp, i = 1, result = base) {
    if (exp === 0) {
        return 1;
    }
    if (i === exp) {
        return result;
    } else if (exp < 0) {
        return 1 / exponent(base, -exp);
    }
    result *= base;
    i++;
    return exponent(base, exp, i, result);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function (n, i = n) {
    if (i === 1) {
        return true;
    } else if (i < 2) {
        return false;
    }
    i /= 2;
    return powerOfTwo(n, i);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function (string, array = string.split(''), i = array.length, result = []) {
    if (result.length === array.length) {
        return result.join('');
    }
    i--;
    result.push(array[i]);
    return reverse(string, array, i, result);
}

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function (string, array = string.split(''), i = array.length, result = []) {
    if (result.length === array.length) {
        return result.join('').replace(' ', '').toLowerCase() === array.join('').replace(' ', '').toLowerCase() ? true : false;
    }
    i--;
    result.push(array[i]);
    return palindrome(string, array, i, result);
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function (x, y, i = x) {
    if (x === 0 && y === 0) {
        return 'NaN';
    } else if (x === 0) {
        return 0;
    }
    if (y > 0 && x > 0) {
        if (y - i > 0) {
            return i;
        } else if (y - i === 0) {
            return 0;
        }
        i -= y;
        return modulo(x, y, i);
    } else if (x > 0 && y < 0) {
        if (y + i < 0) {
            return i;
        } else if (y + i === 0) {
            return 0;
        }
        i += y;
        return modulo(x, y, i);
    } else if (x < 0 && y > 0) {
        if (y + i > 0) {
            return i;
        } else if (y + i === 0) {
            return 0;
        }
        i += y;
        return modulo(x, y, i);
    } else if (x < 0 && y < 0) {
        if (y - i < 0) {
            return i;
        } else if (y - i === 0) {
            return 0;
        }
        i -= y;
        return modulo(x, y, i);
    }
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function (x, y, i = 0, z = 0) {
    if (i === y || y === 0) {
        return z;
    } else if (y < 0) {
        i--;
        z -= x;
        return multiply(x, y, i, z);
    } else {
        i++;
        z += x;
        return multiply(x, y, i, z);
    }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y, counter = 1) {
    if(x === 0 && y !== 0){
        return 0;
    }else if(x === 0 && y === 0){
        return NaN;
    }else if(counter === 1 && (x + x) < y){
        return 0;
    }else if(x < 0 && y < 0){
        x = -x;
        y = -y;
        return divide(x, y, counter);
    }else if(typeof x !== 'number' || typeof y !== 'number'){
        return NaN;
    }
    else if(y >= x) {
        return counter;
    }
    y += y;
    counter++;
    return divide(x, y, counter);
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y, i = 0, bigger = x > y ? x : y, greatest) {
    // let bigger = x > y ? x : y;
    // let gcd;
    if(x < 0 || y < 0){
        return null;
    }
    for(let i = 0; i <= bigger; i++){
    }
    if(i > bigger){
        return greatest;
    }
    if((x % i === 0) && (y % i === 0)){
        greatest = i;
    }
    i++;
    return gcd(x, y, i, bigger, greatest);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function (str1, str2, i = 0, bool = true) {
    if (str1.length !== str2.length) {
        bool = false;
    }
    if (i === str1.length) {
        return bool;
    }
    bool = str1[i] === str2[i] ? bool : false;
    i++;
    return compareStr(str1, str2, i, bool);
};


// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function (str, i = 0, result = []) {
    if (i === str.length) {
        return result;
    }
    result.push(str[i]);
    i++;
    return createArray(str, i, result);
};


// 17. Reverse the order of an array
var reverseArr = function (array, i = array.length - 1, result = []) {
    if (i === -1) {
        return result;
    }
    result.push(array[i]);
    i--;
    return reverseArr(array, i, result);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function (value, length, i = 0, result = []) {
    if (i === length) {
        return result;
    }
    result.push(value);
    i++;
    return buildList(value, length, i, result);
};


// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function (array, value, i = 0, counter = 0) {
    if (i === array.length) {
        return counter;
    }
    if (array[i] === value) {
        counter++;
    }
    i++;
    return countOccurrence(array, value, i, counter);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function (array, callback, result = [], i = 0) {
    if (i === array.length) {
        return result;
    }
    return rMap(array, callback, result.concat(callback(array[i], i, array)), ++i);
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function (obj, key, result = {}) {
    let copy = {};
    Object.assign(copy, obj);
    for (let k in copy) {
        if (typeof copy[k] !== 'object') {
            if (!result[k]) {
                result[k] = 1;
                delete copy[k];
            } else if (result[k]) {
                result[k]++;
                delete copy[k];
            }
        }
    }
    for (let k in copy) {
        if (typeof copy[k] === 'object') {
            result[k] = 1;
            Object.assign(copy, copy[k]);
            delete copy[k];
            return countKeysInObj(copy, key, result);
        }
    }
    if (result[key] === undefined) {
        return 0;
    }
    return result[key];
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function (obj, value, result={}) {
    let copy = {};
    Object.assign(copy, obj);
    for (let k in copy) {
        if(typeof copy[k] === 'string') {
            if(!result[copy[k]]){
                result[copy[k]] = 1;
                delete copy[k];
            }else if(result[copy[k]]) {
                result[copy[k]]++;
                delete copy[k];
            }
        } 
    }
    for(let k in copy){
        if (typeof copy[k] === 'object') {
            Object.assign(copy, copy[k]);
            delete copy[k];
            return countValuesInObj(copy, value, result);
        }
    }
    if(result[value] === undefined){
        return 0;
    }
    return result[value];
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function (obj, key, newKey) {
    for(let k in obj){
        if(k === key){
            obj[newKey] = obj[key];
            delete obj[key];
        }
    }
    for(let k in obj){
        if(typeof obj[k] === 'object'){
            obj[k] = replaceKeysInObj(obj[k], key, newKey);
            
        }
    }
    return obj;
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function (n, i = 1, result = [0, 1]) {
    if (n < 1) {
        return null;
    }
    if (i === n) {
        return result;
    }
    result.push(result[i] + result[i - 1]);
    i++;
    return fibonacci(n, i, result);
};


// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function (n, i = 1, result = [0, 1]) {
    if (n === 0) {
        return 0;
    } else if (n < 0) {
        return null;
    }
    if (i === n) {
        return result[result.length - 1];
    }
    result.push(result[i] + result[i - 1]);
    i++;
    return nthFibo(n, i, result);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function (input, i = 0, result = []) {
    if (i === input.length) {
        return result;
    }
    result.push(input[i].toUpperCase());
    i++;
    return capitalizeWords(input, i, result);
};


// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function (array, i = 0, result = []) {
    if (i === array.length) {
        return result;
    }
    result.push(array[i][0].toUpperCase() + array[i].slice(1));
    i++;
    return capitalizeFirst(array, i, result);
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
var nestedEvenSum = function (obj, counter = 0) {
    for(let key in obj){
        if(obj[key] % 2 === 0){
            counter += obj[key];
        }else if(typeof obj[key] === 'object'){
            counter = nestedEvenSum(obj[key], counter);
        }
    }
    return counter;
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function (array, flattened = []) {
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            flatten(array[i], flattened);
        } else if (typeof array[i] === 'number') {
            flattened.push(array[i]);
        }
    }
    return flattened;
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function (str, i = 0, array = str.toLowerCase().split(''), obj = {}) {
    if (i === array.length) {
        return obj;
    }
    if (!obj.hasOwnProperty(array[i])) {
        obj[array[i]] = 1;
    } else {
        obj[array[i]]++;
    }
    i++;
    return letterTally(str, i, array, obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function (list, i = 0) {
    if (i === list.length) {
        return list;
    }
    if (list[i] === list[i - 1]) {
        list.splice(i, 1);
        i -= 1;
    }
    i++;
    return compress(list, i);
};


// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function (array, aug, i = 0) {
    if (i === array.length) {
        return array;
    }
    array[i].push(aug);
    return augmentElements(array, aug, ++i);
};


// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]

var minimizeZeroes = function (array, i = 0, result = array.slice(0)) {
    if (i === array.length) {
        return result;
    }
    if (result[i] === result[i - 1] && result[i] === 0) {
        result.splice(i, 1);
        i -= 1;
    }
    i++;
    return minimizeZeroes(array, i, result);
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function (array, i = 0, result = []) {
    if (i === array.length) {
        return result;
    }
    if (i % 2 === 0 || i === 0) {
        result.push(Math.abs(array[i]));
    } else {
        result.push(-Math.abs(array[i]));
    }
    i++;
    return alternateSign(array, i, result);
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function (str, i = 0, arr = str.split('')) {
    if (i === arr.length) {
        return arr.join('');
    }
    if (arr[i] === '1') {
        arr[i] = 'one';
    } else if (arr[i] === '2') {
        arr[i] = 'two';
    } else if (arr[i] === '3') {
        arr[i] = 'three';
    } else if (arr[i] === '4') {
        arr[i] = 'four';
    } else if (arr[i] === '5') {
        arr[i] = 'five';
    } else if (arr[i] === '6') {
        arr[i] = 'six';
    } else if (arr[i] === '7') {
        arr[i] = 'seven';
    } else if (arr[i] === '8') {
        arr[i] = 'eight';
    } else if (arr[i] === '9') {
        arr[i] = 'nine';
    }
    i++;
    return numToText(str, i, arr);
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node = document.body, children = node.childNodes, i = 0, counter = 0) {
    if(i === children.length){
        return counter;
    }
    if(children[i].nodeName.toLowerCase() === tag){
        counter++;
    }
    i++;

    return tagCount(tag, node, children, i, counter);
}

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

// var binarySearch = function (array, target, min, max, i = 0) {
//     if(i === array.length){
//         return null;
//     }else if(array[i] === target){
//         return i;
//     }
//     i++;
//     return binarySearch(array, target, min, max, i);
// };

var binarySearch = function(array, target, min = 0, max = array.length - 1, i = 0){
    if(min > max){
        return null;
    }
    i = Math.floor(min + (max - min) / 2);
    if(target === array[i]){
        return i;
    }else if(target < array[i]){
        return binarySearch(array, target, min, i - 1);
    }else{
        return binarySearch(array, target, i + 1, max);
    }
}

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function (array, i = 0, j = 0, result = [], copy = array.slice(0), smallest, smallestIndex = 0) {
    if(j === array.length){
        return result;
    }
    smallest = 10000000;
    for(let i = 0; i < copy.length; i++){
        if(copy[i] < smallest){
            smallest = copy[i];
            smallestIndex = i;
        }
    }
    result.push(smallest);
    copy.splice(smallestIndex, 1);
    j++;
    return mergeSort(array, i, j, result, copy, smallest, smallestIndex)
};

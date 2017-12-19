// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function (n) {
    if (n === 0) {
        return 1;
    }
    if (n < 0) {
        return null;
    }
    return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function (array) {
    if (array.length === 0) {
        return 0;
    }
    return array[0] + sum(array.slice(1));

};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function (array, sum = 0) {
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            sum += array[i];
        }
        if (Array.isArray(array[i])) {
            sum += arraySum(array[i]);
        }
    }
    return sum;
};

// 4. Check if a number is even.
var isEven = function (n) {
    if (n === 1) {
        return false;
    } 
    if (n === 0) {
        return true;
    }
    if (n < 0) {
            return isEven(n + 2);
        }
    return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function (n) {
    if (n === 0) {
        return n;
    }
    if (n < 0){
        return n + 1 + sumBelow(n + 1);
    }
    return n - 1 + sumBelow(n - 1);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function (x, y, result = []) {
    //var result = [];
    if (x === y){
        return result;
    }
    if (x === y - 1 || y === x -1) {
        return result;
    }
    if (x > y) {
        // console.log(result);
        return range(--x, y, result.concat(x));
    }

    return range(++x, y, result.concat(x));
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function (base, exp) {
    if (exp === 0) {
        return 1;
    }
    if (exp > 0) {
         return base * exponent(base, exp - 1);
    }
    return exponent(base, exp + 1) / base;
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function (n) {
    if (n === 1) {
        return true;
    }
    if (n < 1) {
        return false;
    }
    return powerOfTwo(n / 2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function (string) {
    if (string.length === 0) {
        return string;
    }
    return reverse(string.slice(1)) + string.charAt(0);
};


// 10. Write a function that determines if a string is a palindrome.
var palindrome = function (string) {
    string = string.replace(/\s/g, '').toLowerCase();

    if (string.length <= 1) {
        return true;
    }
    string = string.split('');
    if (string.shift() === string.pop()) {
        return palindrome(string.join(''));
    }
    return false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4

var modulo = function (x, y) {
    if (x === 0 && y === 0) {
    return NaN;
    } 
    if (x === 0) {
        return 0;
    } 
    if (y < 0 && x < 0) {
        return -modulo(-x, -y);
    } 
    if (y < 0) {
        return modulo(x, -y);
    }
    if (x < 0) {
        return -modulo(-x, y);
    } 
    if (y > x) {
        return x;
    } 
    if (x - y >= y) {
        return modulo(x - y, y);
    } 
    else return x - y;
};


 // 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function (x, y) {
    if (y === 0) {
        return 0;
    }
    if (y > 0) {
        return x + multiply(x, y - 1);
    }
    return -(multiply(x, -y));
};


// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function (x, y, count = 0) {
    if(y === 0){
        return NaN;
    }
    if(x === 0){
        return count;
    }
    if(x < 0 || y < 0){
        return count;
    }
    if (x >= y){
        count++;
        x = x - y;
        return divide(x, y, count);
    }

    return count;
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function (x, y) {
    if(x < 0 || y < 0){
        return null;
    }
    if (!y) {
        return x;
    }
    return gcd(y, x % y);
};


// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function (str1, str2) {
    if (str1.charAt(0) !== str2.charAt(0)) {
        //console.log(str1, str2);  
        return false;
    }

    if (str1 === '' && str2 === '') {
        return true;
    }

    if (str1.charAt(0) === str2.charAt(0)) {
        //console.log(str1, str2);
        return compareStr(str1.slice(1), str2.slice(1));
    }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function (str, arr = []) {
    if (str.length === 0) {
        return arr;
    }
    arr.push(str.charAt(0));
    return createArray(str.slice(1), arr);
};

// 17. Reverse the order of an array
var reverseArr = function (array, result = [], i = array.length - 1) {
    if (i === -1) {
        return result;
    }
    return reverseArr(array, result.concat(array[i]), --i);
};



// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function (value, length, result = [], i = 0) {
    if (i === length) {
        return result;
    }
    result.push(value);
    return buildList(value, length, result, ++i);
}

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function (array, value, tally = 0, i = 0) {
    if (i === array.length) {
        return tally;
    }
    if (array[i] === value) {
        tally++;
    }
    return countOccurrence(array, value, tally, ++i);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function (array, callback, result = [], i = 0) {
    if (i === array.length) {
        return result;
    }
    return rMap(array, callback, result.concat(callback(array[i])), ++i);
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 
//                't':{
//                    'r': {'e':'r'}, 
//                    'p': {'y':'r'}
//                    },
//                'y':'e'
//               };
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function (obj, key) {
    var count = 0;
    for(var prop in obj){
        if(prop === key){
        count++;
        // console.log(key, count);
        }
        if(typeof obj[prop] === 'object'){
        // console.log(key, typeof(obj[prop]));// all cool here
            count += countKeysInObj(obj[prop], key);
        }
    }
    return count;
};



// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function (obj, value) {
    var count = 0;
    for (var prop in obj){
        if (obj[prop] === value){
            count++;
        }
        if(typeof obj[prop] === 'object'){
            count += countValuesInObj(obj[prop], value);
        }
    }

    return count;
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function (obj, key, newKey) {
    for(var prop in obj){
        if(typeof obj[prop] === 'object'){
            replaceKeysInObj(obj[prop], key, newKey);
        } 
        if(prop === key){
            obj[newKey] = obj[prop];
            delete obj[prop];
        }
        
    }
    return obj;
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function (n, arr = [0, 1], i = 2) {
    if (n < 1){
        return null;
    }
    if (arr.length === n + 1) {
        return arr;
    }
    return fibonacci(n, arr.concat(arr[i - 2] + arr[i - 1]), ++i);
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function (n, a = 0, b = 1) {
    if (n < 0){
        return null;
    }
    if (n === 0) {
        return a;
    }
    return nthFibo(n - 1, a + b, a);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function (input, result = [], i = 0) {
    if (i === input.length) {
        return result;
    }
    return capitalizeWords(input, result.concat(input[i].toUpperCase()), ++i);
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function (array, result = [], i = 0) {
    if (i === array.length) {
        return result;
    }
    return capitalizeFirst(array, result.concat(array[i].charAt(0).toUpperCase() + array[i].slice(1)), ++i)
}

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function (obj) {
    var sum = 0;
    for(var key in obj){
        if (typeof obj[key] === 'number'){
            let num = obj[key];
            if(num % 2 === 0){    
            sum += num;
            }
        }
        if (typeof obj[key] === 'object'){
            sum +=  nestedEvenSum(obj[key]);
        }
    }
    //console.log(sum);
    return sum;
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function (array, flat = []) {
    for (var i = 0; i < array.length; i ++){
        if (Array.isArray(array[i])){
            flatten(array[i], flat);
        } 
        
        else{
            flat.push(array[i]);
            //console.log(flat);
        }
    }
    return flat;
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function (str, obj = {}, i = 0) {
    if (i === str.length) {
        return obj;
    }
    obj[str[i]] ? obj[str[i]] += 1 : obj[str[i]] = 1;
    return letterTally(str, obj, ++i);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function (list, result = [], i = 0) {
        if (i === list.length) {
            return result;
        }
        if (list[i] !== list[i - 1]) {
            return compress(list, result.concat(list[i]), ++i);
        }
        if (list[i] === list[i - 1]) {
            return compress(list, result, ++i);
        }
};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function (array, aug, i = 0) {
    if (i === array.length){
        return array;
    }
    if(Array.isArray(array[i])){
        array[i].push(aug);
    }

    return augmentElements(array, aug, ++i);
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function (array, i = 0) {
    if (i === array.length) {
        return array;
    }
    if (array[i] === 0 && array[i - 1] === 0) {
        array.splice(i, 1);
        i -= 1;
    }
    return minimizeZeroes(array, ++i);
}

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function (array, i = 0) {
    if(i === array.length){
        return array;
    }
    if(i === 0){
        array[i] = Math.abs(array[i]);
    }
    if(i > 0){
        if(array[i - 1] > 0 && array[i] > 0){
            array[i] = array[i] * -1;
        }
        if(array[i - 1] < 0 && array[i] < 0){
            array[i] = array[i] * -1;
        }
    }
    return alternateSign(array, ++i);
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function (str, i = 0) {
    var wordsArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var arrStr = str.split(' ');
    if(i === arrStr.length){
        return str;
    }
    if(i >= 0){
        if(Number(arrStr[i])){
            arrStr[i] = wordsArr[Number(arrStr[i])];
        }
        str = arrStr.join(' ');
    }
    return numToText(str, ++i);
};

    // *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function (tag, node) {
    //let theDocument = document.body;
    let count = 0;
    const travel = function (node, funct) {
        funct(node);
        node = node.firstChild;
        while (node) {
            travel(node, funct)
            node = node.nextSibling;
        }
    };
        travel(document, function(node){
            if(node.tagName && node.tagName === tag.toUpperCase()){
            count++;
            }
        });
    return count;
};


// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function (array, target, min = 0, max = array.length - 1) {
    let guess = Math.floor((min + max) / 2);
    if(target === array[guess]){
        return guess;
    }
    if(max < min){
        return null;
    }
    if(target > array[guess]){
        return binarySearch(array, target, min = guess + 1, max);
    }
    if(target < array[guess]){
        return binarySearch(array, target, min, max = guess - 1);
    }

};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function (arr) {
if (arr.length < 2) {
    return arr
}

let middle = Math.floor(arr.length / 2)
let left = arr.slice(0, middle)
let right = arr.slice(middle)

return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let result = []
    let indexL = 0
    let indexR = 0

    while (indexL < left.length && indexR < right.length) {
        if (left[indexL] < right[indexR]) {
            result.push(left[indexL])
            indexL++
        } else {
            result.push(right[indexR])
            indexR++
        }
    }

    return result.concat(left.slice(indexL)).concat(right.slice(indexR))
};

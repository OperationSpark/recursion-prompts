// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
    if (n < 0) {
        return null;
    } else if (n === 0) {
        return 1;
    } else {
        return  n * factorial(n - 1);
    }
}

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = array => array.length === 0 ? 0 : array[0] + sum(array.slice(1));

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
    var sum = 0;
    array.forEach(function(e, i, a) {
        if (Array.isArray(e)) {
            sum += arraySum(e);
        } else {
            sum += e;
        }
    });
    return sum;
};

// 4. Check if a number is even.
var isEven = function (n) {
    if (n < 0) {
        n = Math.abs(n);
    }
    if (n === 0) {
        return true;
    }
    if (n === 1) {
        return false;
    } else {
        n -= 2;
        return isEven(n);
    }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function (n) {
    if (n < 0) {
        var x = n + 1;
        return x + sumBelow(x);
    } else if (n === 0) {
        return n;
    } else {
        var y = n - 1;
        return y + sumBelow(y);
    }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function (x, y) {
    if ((x < y) && (y - x) < 2) {
        return [];
    }
    if (arguments === 0 || x === y) {
        return [];
    }
    if (x < y) {
        return [x + 1].concat(range(x + 1, y));
    } 
    if ((y < x) && (x - y) < 2) {
        return [];
    }
    if (y < x) {
        return [x - 1].concat(range(x - 1, y));
    }
};
// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function (base, exp) {
    if(exp === 0) {
    return 1;
    }
    else if (exp < 0) {
        return (1/base) / exponent(base, (-exp) - 1);
    } else {
        return base * exponent(base, exp - 1);
    }
}; 


// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = n => n === 1 ? true : (n < 1 ? false : powerOfTwo(n / 2));


// 9. Write a function that accepts a string a reverses it.
var reverse = string => string.length <= 1 ? string : reverse(string.substr(1)) + string[0];


// 10. Write a function that determines if a string is a palindrome.
var palindrome = function (string) {
    var i = 0;
    string = string.toLowerCase().replace(/\s+/g,'');
    if (string.length <= 1) {
        return true;
    }
    if (string[i] != string[string.length - 1 - i]) {
        return false;
    } else {
        i++;
        palindrome(string.substr(1, string.length - 2));
    }
    return true;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
    if (x === 0 && y === 0) {
        return NaN;
    }
    if (x >= 0 && y >= 0) {
        return x >= y ? modulo(x - y, y) : x;
    }
    if (x > 0 && y < 0) {
        return x >= -y ? modulo(x + y, y) : x;
    }
    if (x < 0 && y > 0) {
        return -x >= y ? modulo(x + y, y) : x;
    }
    if (x < 0 && y < 0) {
        return x <= y ? modulo(x - y, y) : x;
    }
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function (x, y) {
    if (x === 0 || y === 0) {
        return 0;
    }
    if (x === 1) {
        return y;
    }
    if (y === 1) {
        return x;
    } 
    if (y > 0) {
        return x + multiply(x, y - 1);
    } else {
        return -(x) + multiply(x, y + 1); 
    }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function (x, y, quotient = 0) {
    if (x === 0 && y === 0) {
        return NaN;
    }
    if (x === 0) {
        return 0;
    }
    if (y === 1) {
        return x;
    }
    if (x < y) {
        return 0;
    }
    if (x + y < 0) {
        return 0;
    }
    if (x - y < y) {
        return 1;
    }
    return 1 + divide(x - y, y);
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
    var mod;
    if (x < 0 || y < 0) {
        return null;
    }
    if (x === 0) {
        return y;
    }
    if (y === 0) {
        return x;
    }
    if (x > y) {
        mod = x % y;
        return gcd(y, mod);
    }
    if (x < y) {
        mod = y % x;
        return gcd(x, mod);
    }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function (str1, str2) {
    if (str1 === '' && str2 === '') {
        return true;
    }
    if (str1.charAt(0) === str2.charAt(0)) {
        return compareStr(str1.slice(1), str2.slice(1));
    }
    return false;
};
// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
    if (str.length === 1) {
        return [str];
    } else {
        return [str[0]].concat(createArray(str.slice(1)));
    }

};

// 17. Reverse the order of an array
var reverseArr = function (array) {
    if (array.length === 1) {
        return array;
    } else {
        return [array[array.length - 1]].concat(reverseArr(array.splice(0, array.length - 1)));
    }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
    if (length === 1) {
        return [value];
    } else {
        return [value].concat(buildList(value, length - 1));
    }
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function (array, value) {
    var count = 0;
    if (array.length === 0) {
        return count;
    } else if (value !== array[0]) {
        return count + countOccurrence(array.slice(1), value);
    } else {
        return ++count + countOccurrence(array.slice(1), value);
    }
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
    if (array.length === 1) {
        return [callback(array)];
    } else {
        return [callback(array[0])].concat(rMap(array.slice(1), callback));
    }
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key, count = 0) {
    for (var prop in obj) {
        if (prop === key) {
            count++;
        }
        var value = obj[prop];
        if (typeof value === 'object') {
            count += countKeysInObj(value, key);
        }
    }
    return count;
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value, count = 0) {
    for (var prop in obj){
        if (obj[prop] === value) {
            count++;
        }
        if (typeof obj[prop] === 'object') {
            count += countValuesInObj(obj[prop], value);
        }
    }
    return count;
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
    for (var prop in obj) {
        if (prop === key) {
            obj[newKey] = obj[prop];
            delete obj[prop];
        }
        if (typeof obj[prop] === 'object') {
            replaceKeysInObj(obj[prop], key, newKey);
        }
    }
    return obj;
};

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
    } else {
        var x = fibonacci(n - 1);
        x.push(x[x.length - 1] + x[x.length - 2]);
        return x;
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
    }
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    else {
        return nthFibo(n - 1) + nthFibo(n - 2);
    }
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
    if (input.length === 1) {
        return [input[0].toUpperCase()];
    } else {
        return [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)));
    }
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
    if (array.length === 1) {
        return [array[0].charAt(0).toUpperCase() + array[0].slice(1)];
    } else {
        return [array[0].charAt(0).toUpperCase() + array[0].slice(1)].concat(capitalizeFirst(array.slice(1)));
    }
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
    for (var prop in obj) {
        if (obj[prop] % 2 === 0) {
            sum += obj[prop];

        }
        if (typeof obj[prop] === 'object') {
            sum += nestedEvenSum(obj[prop]);
        }
    }
    return sum;
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
    var arr = [];
    arrays.forEach(function (value) {
        if (Array.isArray(value)) {
            arr = arr.concat(flatten(value));
        } else {
            arr.push(value);
        }
    });
    return arr;
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
    var length = str.length;
    var current = str.charAt(0);

    if (length === 0) {
        return obj;
    } else if (obj[current]) {
        obj[current]++;
    } else {
        obj[current] = 1;
    }


    return letterTally(str.slice(1), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
    if (list.length === 0) {
        return [];
    }
    if (list[0] === list[1]) {
        return compress(list.slice(1));
    } else {
    return [list[0]].concat(compress(list.slice(1)));
    }
};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
    if (array.length === 1) {
        return [array[0].concat(aug)];
    } else {
        return [array[0].concat(aug)].concat(augmentElements(array.slice(1), aug));
    }
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, arrayContents = 0, result = []) {
    if (array.length < 1) {
        return result;
    }
    if (array.length > 0) {
        arrayContents = array[0];
        if (arrayContents !== array[1]) {
            result.push(array[0]);
        }
    }
    return minimizeZeroes(array.slice(1),arrayContents, result);
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function (array, index = 0, out = []) {
    var odds = index % 2 === 1;
    var evens = index % 2 === 0
    if (index === array.length) {
        return out
    }
    if (evens) {
        out.push(Math.abs(array[index]))
    }
    if (odds) {
        out.push(-Math.abs(array[index]))
    }
    return alternateSign(array, ++index, out)
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
function numToText(str, target = 0) {
    const map = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    };
    if (target === 10)
        return str;
    const
        replaceWith = map[target],
        regEx = new RegExp(target, 'g'),
        processed = str.replace(regEx, replaceWith);
    return numToText(processed, ++target);
}

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node, count = 0) {
    node = node || document;
    if (node.tagName === tag.toUpperCase()) {
        count++;
    }
    for (var i = 0; i < node.children.length; i++) {
        count += tagCount(tag, node.children[i]);
    }
    return count;
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function (array, target, min = 0, max = array.length - 1) {
    if (min > max) {
        return null;
    }
    var i = Math.floor((max + min)/2);
    if (array[i] === target) {
        return i;
    }
    else if (array[i] > target) {
        return binarySearch(array, target, min, i - 1);
    }
    else if (array[i] < target) {
        return binarySearch(array, target, i + 1, max);
    }
    return i;
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var merge = function (left, right) {
    var result = [],
        iLeft = 0,
        iRight = 0;
    while (iLeft < left.length && iRight < right.length) {
        if (left[iLeft] < right[iRight]) {
            result.push(left[iLeft++]);
        } else {
            result.push(right[iRight++]);
        }
    }
    return result.concat(left.slice(iLeft)).concat(right.slice(iRight));
}
var mergeSort = function (items) {
    if (items.length < 2) {
        return items;
    }
    var middle = Math.floor(items.length / 2),
        left = items.slice(0, middle),
        right = items.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

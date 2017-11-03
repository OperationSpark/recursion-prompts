// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
    if (n < 0) return null;
    if (n <= 1) return 1;
    return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
    if (array.length === 0) {
        return 0;
    }
    return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
    if (array.length === 0) {
        return 0;
    }
    if (Array.isArray(array[0])) {
        return arraySum(array[0]) + arraySum(array.slice(1));
    } else {
        return array[0] + arraySum(array.slice(1));
    }
};

// 4. Check if a number is even.
var isEven = function(n) {
    if (n === 0) return true;
    if (n === 1) return false;
    if (n > 0) {
        return isEven(n - 2);
    } else {
        return isEven(n + 2);
    }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
    if (n === 0) {
        return n;
    }
    if (n > 0) {
        return n - 1 + sumBelow(n - 1);
    } else {
        return n + 1 + sumBelow(n + 1);
    }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
    if (Math.abs(x - y) < 2) {
        return [];
    }
    if (y > x) {
        if (Math.abs(x - y) === 2) {
            return [x + 1];
        }
        return [].concat(x+1, range(x+1, y-1), y-1);

    } else {
        if (Math.abs(x - y) === 2) {
            return [x - 1];
        }
        return [].concat(x - 1, range(x-1, y+1), y+1);
    }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
    if (exp === 0) {
        return 1;
    }
    if (exp === 1) {
        return base;
    }
    if (exp === -1) {
        return 1 / base;
    }
    // if (exp > 1) {
    //     return base * exponent(base, exp - 1);
    // } else {
    //     return (1 / base) * exponent(base, exp + 1);
    // }
    if (exp % 2 === 0) {
        return exponent(base * base, exp / 2);
    } else {
        if (exp > 0) {
            return base * exponent(base, exp - 1);
        } else {
            return (1 / base) * exponent(base, exp + 1);
        }
    }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
    if (n <= 0) {
        return false;
    }
    if (n === 1) {
        return true;
    }
    if (n % 2 !== 0) {
        return false;
    } 
    return powerOfTwo(n/2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
    if (string === '') {
        return '';
    }
    return string[string.length - 1] + reverse(string.slice(0, -1));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
    string = string.toLowerCase();
    string = string.trim();
    if (string === '') {
        return true;
    }
    if (string[0] !== string[string.length-1]) {
        return false;
    }
    return palindrome(string.slice(1, -1));
    
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
    if (y === 0) {
        return NaN;
    }
    if (x === 0) {
        return 0;                       
    }
    if (x > 0) {
        if (y > 0) {
            if (x - y >= 0) {
                return modulo(x-y, y);
            }
        } else {
            if (x + y >= 0) {
                return modulo(x+y, y);
            }
        }
    } else {
        if (y > 0) {
            if (x + y <= 0) {
                return modulo(x + y, y);
            }
        } else {
            if (x - y <= 0) {
                return modulo(x - y, y);
            }
        }
    }
    return x;
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
    if (x === 0 || y === 0) {
        return 0;
    }
    if (y === 1) {
        return x;
    }
    if (y === -1) {
        return -x;
    }
    if (y > 0) {
        return x + multiply(x, y-1);
    } else {
        return -x - multiply(-x, y+1);
    }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
    if (y === 0) {
        return NaN;
    }
    if (x === 0) {
        return 0;
    }
    if (y === 1) {
        return x;
    }
    if (y === -1) {
        return -x;
    }
    if (y > 0) {
        if (x > 0) {
            return divide(x-y, y-1);
        } else {
            return divide(x+y, y-1);
        }
    } else {
        if (x > 0) {
            return divide(x+y, y+1);
        } else {
            return divide(x-y, y+1);
        }
    }

};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
    if (x < 0 || y < 0) {
        return null;
    }
    if (x === 0) {
        return y;
    }
    if (y === 0) {
        return x;
    }
    if (x >= y) {
        if (x % y === 0) {
            return y;
        } else {
            return gcd(y, x%y);
        }
    } else if (y >= x) {
        if (y % x === 0) {
            return x;
        } else {
            return gcd(x, y%x);
        }
    }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
    if (str1 === '' && str2 === '') {
        return true;
    }
    if (str1[0] !== str2[0]) {
        return false;
    }
    return compareStr(str1.slice(1), str2.slice(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
    if (str === ''){
        return [];
    }
    return [].concat(str[0], createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
    if (array.length === 0) {
        return [];
    }
    return [].concat(array[array.length-1], reverseArr(array.slice(0, -1)));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
    if (length === 0) {
        return [];
    }
    return [value].concat(buildList(value, length-1));
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
    let i = array.indexOf(value);
    if (i === -1) {
        return 0;
    }
    return 1 + countOccurrence(array.slice(i+1), value);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
    return array.length === 0 ? [] : [callback(array[0])].concat(rMap(array.slice(1), callback));
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
    let count = 0;
    for (k in obj) {
        if (k === key) {
            count++;
        }
        if (typeof obj[k] === 'object') {
            count += countKeysInObj(obj[k], key);
        }
    }
    return count;
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
    let count = 0;
    for (key in obj) {
        if (obj[key] === value) {
            count++;
        }
        if (typeof obj[key] === 'object') {
            count += countValuesInObj(obj[key], value);
        }
    }
    return count;
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
    for (k in obj) {
        if (k === key) {
            obj[newKey] = obj[key];
            delete obj[key];
        }
        if (typeof obj[k] === 'object') {
            replaceKeysInObj(obj[k], key, newKey);
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
    }
    let arr = fibonacci(n-1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;     // i can't believe this worked...
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
    return nthFibo(n-2) + nthFibo(n-1);

};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
    if (input.length === 0) {
        return [];
    }
    return [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)));
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
    if (array.length === 0) {
        return [];
    }
    return [`${array[0][0].toUpperCase() + array[0].slice(1)}`].concat(capitalizeFirst(array.slice(1)));
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
    let sum = 0;
    for (key in obj) {
        if (typeof obj[key] === 'object') {
            sum += nestedEvenSum(obj[key]);
        } else {
            if (obj[key] % 2 === 0) {
                sum += obj[key];
            }
        }
    }
    return sum;
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
    let res = [];
    if (arrays.length === 0) {
        return [];
    } 
    if (Array.isArray(arrays[0])) {
        res = res.concat(flatten(arrays[0]));
    } else {
        res.push(arrays[0])
    }
    return res.concat(flatten(arrays.slice(1)));
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
    if (!obj) {
        obj = {};
    }
    if (str === '') {
        return obj;
    }
    obj[str[0]] = obj[str[0]] + 1 || 1;
    return letterTally(str.slice(1), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
    if (list.length === 0) {
        return list;
    }
    let i = 1;
    while (list[0] === list[i] && i < list.length) {
        i++;
    }
    return [list[0]].concat(compress(list.slice(i)));

};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
    if (array.length === 0) {
        return [];
    }
    return [array[0].concat(aug)].concat(augmentElements(array.slice(1), aug));
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
    if (array.length === 0) {
        return [];
    }
    let i = 1;
    if (array[0] === 0) {
        while (array[i] === 0) {
            i++;
        }
    }
    return [array[0]].concat(minimizeZeroes(array.slice(i)));
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
    if (array.length === 0) {
        return [];
    }
    if (array.length === 1) {
        if (array[0] < 0) {
            return -array[0];
        } else {
            return array[0];
        }
    } else {
        let a;
        let b;
        if (array[0] < 0) {
            a = -array[0];
        } else {
            a = array[0];
        }
        if (array[1] > 0) {
            b = -array[1];
        } else {
            b = array[1];
        }
        return [a, b].concat(alternateSign(array.slice(2)));
    }
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
    if (str === '') {
        return '';
    }
    let n = str[0];
    switch(n) {
        case '1':
            n = 'one'
            break;
        case '2':
            n = 'two';
            break;
        case '3':
            n = 'three';
            break;
        case '4':
            n = 'four';
            break;
        case '5':
            n = 'five';
            break;
        case '6':
            n = 'six';
            break;
        case '7':
            n = 'seven';
            break;
        case '8':
            n = 'eight';
            break;
        case '9':
            n = 'nine';
            break;
        case '0':
            n = 'zero';
            break;
        default:
            break;
    }
    return n.concat(numToText(str.slice(1)));
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
    if (!node) {
        node = this.document.body;
    }
    let count = 0;
    // console.log(node.childNodes);
    if (node.nodeName.toLowerCase() === tag) {
        count++;
    }
    // let kidz = node.getElementsByTagName(tag);
    // for (let i = 0; i < kidz.length; i++) {
    //     console.log(kidz[i].nodeName);
    // }
    let children = node.childNodes;
    for (let i = 0; i < children.length; i++) {
        // console.log(children[i].nodeName);
        count += tagCount(tag, children[i]);
    }
    return count;

};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
    // debugger;
    if (min > max) {
        return null;
    }
    if (max === undefined) {
        max = array.length - 1;
    }
    if (min === undefined) {
        min = 0;
    }
    let i = Math.floor((min + max) / 2);
    if (array[i] === target) {
        return i;
    }
    if (array[i] > target) {
        max = i-1;  
    } 
    if (array[i] < target) {
        min = i+1;
    }
    return binarySearch(array, target, min, max);
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
    if (array.length < 2) {
        return array;
    }
    let left = array.slice(0, array.length/2);
    let right = array.slice(array.length/2);
    left = mergeSort(left);
    right = mergeSort(right);
    let res = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) {
            res.push(left[0]);
            left.shift();
        } else {
            res.push(right[0]);
            right.shift();
        }
    }
    if (left.length > 0) {
        res = res.concat(left);
    }
    if (right.length > 0) {
        res = res.concat(right);
    }
    return res;

};

// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function (n, total = 1, i = n) {
    if (i < 0) {
        return null;
    } else if (i === 0) {
        return total;
    }
    total *= i;
    i--;
    return factorial(n, total, i);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function (array, total = 0, i = 0) {

    if (i === array.length) {
        return total;
    }
    total += array[i];
    i++;
    return sum(array, total, i);

};



// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function (array) {
    if (array.length === 0) {
        return 0;
    } else if (array.length === 1 && !Array.isArray(array[0])) {
        return array[0];
    } else if (Array.isArray(array[0])) {
        return arraySum(array[0]) + arraySum(array.slice(1));
    } else {
        return array[0] + arraySum(array.slice(1));
    }
};




// 4. Check if a number is even.
var isEven = function (n) {

    if (n === 0) {
        return true;
    } else if (n === 1) {
        return false;
    } else
        return n < 0 ? isEven(-1 * n) : isEven(n - 2);


};




// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function (n, total = 0, i = n) {
    if (i < 0) {
        return n + 1 + sumBelow(n + 1);
    } else if (n - 1 >= 0) {
        return (n - 1) + sumBelow(n - 1);
    } else {
        return n;
    }
};



// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
function range(x, y) {
    var results = [];
    if (x === y || x === (y - 1) || x === (y + 1)) {
        return results;
    } else if (x < y) {
        results.push(x + 1);
        return results.concat(range(x + 1, y));
    } else {
        results.push(x - 1);
        return results.concat(range(x - 1, y));
    }

}




// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function (base, exp) {

    if (exp === 0) {
        return 1;
    } else if (exp > 0) {
        return base * exponent(base, exp - 1);
    } else {
        return 1 / exponent(base, -exp);
    }

};





// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function (n) {

    if (n <= 0) {
        return false;
    } else if (n === 1 || n === 2) {
        return true;
    } else if (n % 2 == 1) {
        return false;
    } else {
        return powerOfTwo(n / 2);
    }

};






// 9. Write a function that accepts a string a reverses it.
var reverse = function (string) {

    if (string.length <= 1) {
        return string;
    }
    const firstLetter = string[0];
    const lastLetter = string[string.length - 1];
    const stringreverse = reverse(string.substring(1, string.length - 1));
    return lastLetter + stringreverse + firstLetter;

};






// 10. Write a function that determines if a string is a palindrome.
var palindrome = function (string, newString, noSpace, stringReversed, i = 0) {
    // var reversed = string.split('').reverse().join('');
    // if (string.toLowerCase().replace(/\s/g,'') === reversed.toLowerCase().replace(/\s/g,'')){
    //     return true;
    // }
    // return false;


    if (newString === null || newString === undefined) {
        const noSpace = /[\W_]/g;
        newString = string.toLowerCase().replace(noSpace, '');
    }
    if (stringReversed === null || stringReversed === undefined) {
        stringReversed = newString.split('').reverse().join('');
    }
    if (i < 0 || i >= newString.length) {
        return true;
    } else if (stringReversed[i] === newString[i]) {
        ++i;
        return palindrome(string, newString, noSpace, stringReversed, i);

    } else {
        return false;
    }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function (x, y) {
    if (y === 0) {
        return NaN;
    } else if (x < 0) {
        return -modulo(-x, y);
    } else if (x < y) {
        return x;
    } else if (y < 0) {
        return modulo(x, -y);
    } else {
        return modulo(x - y, y);
    }
};



// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function (x, y) {
    if (y === 0) {
        return 0;
    } else if (y === 1) {
        return x;
    } else if (y < 0) {
        return -multiply(x, -y);
    } else {
        return x + multiply(x, y - 1);
    }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function (x, y) {
    if (y === 0) {
        return NaN;
    } else if (x < y) {
        return 0;
    } else if (y === 1) {
        return x;
    } else if (y < 0) {
        return -divide(x, -y);
    } else {
        return 1 + divide(x - y, y);
    }
};
 
// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function (x, y) {
    if (x < 0 || y < 0) {
        return null;
    } else if (x === 1 || y === 1) {
        return 1;
    } else if (x === 0) {
        return y;
    } else if (y === 0) {
        return x;
    } else if (x > y) {
        return gcd(y, x % y);
    } else {
        return gcd(x, y % x);
    }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function (str1, str2) {

    if (str1 === "" && str2 === "") {
        return true;
    } else if (str1[0] !== str2[0]) {
        return false;
    } else {
        return str1[0] === str2[0] && compareStr(str1.slice(1), str2.slice(1));
    }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function (str) {

    var array = [];
    if (str === null || str.length <= 0) {
        return array;
    } else if (str.length > 0) {
        return array.concat([str[0]], createArray(str.slice(1)));
    }

};

// 17. Reverse the order of an array
var reverseArr = function (array, i = array.length - 1) {
    // if (array.reverse()){
    // return array;
    // }else return reverseArr(array);
    if (array.length === 0 || array.length === 1) {
        return array;
    } else {
        return reverseArr(array.slice(1)).concat([array[0]]);
    }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function (value, length) {

    var array = [];
    var valueArray = [value];
    if (length === 0) {
        return array;
    } else if (length === 1) {
        return array.concat(valueArray);
    } else {
        return valueArray.concat(buildList(value, length - 1));
    }
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function (array, value) {

    var count = 0;
    if (array.length === 0) {
        return count;
    } else if (array[0] === value) {
        count++;
    }
    return count += countOccurrence(array.slice(1), value);

};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function (array, cb, result = [], i = 0) {
    if (i === array.length) {
        return result;
    }
    result.push(cb(array[i], i, array));
    i++;
    return rMap(array, cb, result, i);
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function (obj, key) {
    var count = 0;
    for (var property in obj) {
        if (property === key) {
            count++;
        }
        var value = obj[property];
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
var countValuesInObj = function (obj, value) {
    var count = 0;
    for (var key in obj) {
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
var replaceKeysInObj = function (obj, key, newKey) {
    var newObj = {};
    for (var property in obj) {
        if (property === key) {
            newObj[newKey] = obj[key];
            property = newKey;
        } else if (property !== key) {
            newObj[property] = obj[property];
        }
        if (typeof obj[property] === 'object') {
            newObj[property] = replaceKeysInObj(obj[property], key, newKey);
        }
    }
    return newObj;
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function (n) {
    if (n <= 0) {
        return null;
    } else if (n === 1) {
        return [0, 1];
    } else {
        var array = fibonacci(n - 1);
        return array.concat([array[array.length - 1] + array[array.length - 2]]);
    }
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function (n) {
    if (n < 0) {
        return null;
    } else if (n === 0 || n === 1) {
        return n;
    } else {
        return nthFibo(n - 1) + nthFibo(n - 2);
    }
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function (input, result = [], i = 0) {
    if (i < 0 || i >= input.length) {
        return result;
    } else if (i < input.length) {
        result = result.concat(input[i].toUpperCase());
    }
    ++i;
    return capitalizeWords(input, result, i);
};



// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function (array) {
    if (array.length === 0) {
        return array;
    } else {
        var firstLetter = array[0].slice(0, 1).toUpperCase();
        var word = firstLetter + array[0].slice(1);
        return [word].concat(capitalizeFirst(array.slice(1)));
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
var nestedEvenSum = function (obj) {
    var sumEvenNumbers = 0;
    for (var key in obj) {
        if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
            sumEvenNumbers += obj[key];
        } else if (typeof obj[key] === 'object') {
            sumEvenNumbers += nestedEvenSum(obj[key]);
        }
    }
    return sumEvenNumbers;
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function (arrays) {
    if (arrays.length === 0) {
        return arrays;
    } else if (Array.isArray(arrays[0])) {
        return flatten(arrays[0]).concat(flatten(arrays.slice(1)));
    } else {
        return [arrays[0]].concat(flatten(arrays.slice(1)));
    }
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function (str, obj) {
    if (obj === undefined) {
        obj = {};
    }
    if (str.length === 0) {
        return obj;
    } else if (obj.hasOwnProperty(str[0])) {
        obj[str[0]]++;
    } else {
        obj[str[0]] = 1;
    }
    return letterTally(str.slice(1), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function (list, count = 0, arr = [], i = 0) {
    if (list.length >= 1 && list[1] !== undefined) {
        i = list[1];
        if (i !== list[0])
            arr.push(list[0])
    }
    if (list.length === 1) {
        if (i !== list[0])
            arr.push(list[0]);
    }
    if (list.length === 0)
        return arr;
    return compress(list.slice(1), count++, arr);
};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function (array, aug) {
    if (array.length === 0) {
        return array;
    }
    var start = array[0];
    var end = array.slice(1);
    return [start.concat([aug])].concat(augmentElements(end, aug));
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function (array) {
    if (array.length === 0) { return array }
    else if (minimizeZeroes(array.slice(1))[0] === 0 && array[0] === 0) {
        return minimizeZeroes(array.slice(1));
    } else {
        return [array[0]].concat(minimizeZeroes(array.slice(1
        )));
    }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function (array) {

    if (array.length === 0) { return array }
    if (array[0] < 0) { array[0] = -array[0] }
    if (array[1] > 1) { array[1] = -array[1] }
    return [array[0], array[1]].concat(alternateSign(array.slice(2)));

};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function (str, target = 0) {
    var map = {
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

    if (target === 10) {
        return str;
    }

    var replaceWith = map[target];
    var regEx = RegExp(target, 'g');
    var processed = str.replace(regEx, replaceWith);

    return numToText(processed, ++target);

};


// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function (tag, node) {
    var tagCounter = 0;
  
    if (tag === undefined) {
        return 0;
    } else if (node === undefined) {
        return tagCount(tag, document);
    } else if (node.tagName !== undefined && node.tagName !== null && node.tagName.toUpperCase() === tag.toUpperCase()) {
        tagCounter++;
    }
    if (node.childNodes) {
        for (var i = 0; i < node.childNodes.length; ++i) {
            tagCounter += tagCount(tag, node.childNodes[i]);
        }
    }
    return tagCounter;
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function (array, target, min, max) {
    if (target === undefined || target === null) {
        return null;
    }
    if (min === undefined) {
        min = 0;
    }
    if (max === undefined) {
        max = array.length - 1;
    }
    var mid = Math.floor((max + min) / 2);
    if (array[mid] === target) {
        return mid;
    } else if (min === max) {
        return null;
    } else if (target < array[mid]) {
        return binarySearch(array, target, min, mid);
    } else {
        return binarySearch(array, target, mid + 1, max)
    }
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
 
var mergeSort = function (array) {
    var merge = function (left, right) {
        var result = [];
        while (left.length || right.length) {
            if (left.length && right.length) {
                if (left[0] < right[0]) {
                    result.push(left.shift());
                } else {
                    result.push(right.shift());
                }
            } else if (left.length) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }
        return result;
    };
        if (array.length < 2)
            return array;

        var middle = array.length / 2;
        var left = array.slice(0, middle);
        var right = array.slice(middle, array.length);

        return merge(mergeSort(left), mergeSort(right));
    if (array.length < 2)
        return array;

    var middle = array.length / 2;
    var left = array.slice(0, middle);
    var right = array.slice(middle, array.length);

    return merge(mergeSort(left), mergeSort(right));
};

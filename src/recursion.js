/// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function (n, total = 1, i = n) {
    // base case
    if (i < 0) {
        return null;
    } else if (i === 0) {
        return total
    }

    //changes value of total
    total *= i;

    // brings i down 1 value (if n = 5 and i = n, then i now = 4)
    i--;

    //starting with n = 5, then this /v is factorial(4, 20, 4)
    return factorial(n, total, i);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function (array, total = 0, i = 0) {
    if (!array.length) {
        return 0
    }
    return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function (array) {

};

// 4. Check if a number is even.
var isEven = function (n) {
    if (n === 0) {
        return true;
    }

    if (n === -1) {
        return false;
    }
    if (n < 0) {
        n *= -1
    }
    n = n - 2
    return isEven(n)
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function (n, total = 0) {
    if (n === 0) {
        return total;
    }
    if (n < 0) {
        total += n + 1;
        n++;
    }
    if (n > 0) {
        total += n - 1;
        n--;
    }
    return sumBelow(n, total);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function (x, y, arr = []) {

    if (x === y || arr[arr.length - 1] === y - 1 || arr[arr.length - 1] === y + 1) {
        return arr;
    }
    if (x + 1 === y || x - 1 === y) {
        return arr;
    }
    if (x < y) {
        arr.push(x + 1);
        x++;
        // one less
    }
    if (x > y) {
        arr.push(x - 1);
        x--;
        // one more
    }
    return range(x, y, arr);
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function (base, exp) {
    // if(exp === 1){
    //     return base;
    // }
    // if(exp === 0){
    //     return 1; 
    // }
    if (exp === 0) {
        return 1;
    }
    if (exp < 0) {
        return 1 / exponent(base, -exp)
    }
    if (exp === 1) {
        return base;
    } else {
        return base *= exponent(base, exp - 1);
    }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function (n) {
    //2^n     
    if (n <= 0) {
        return false;
    } else if (n === 1 || n === 0) {
        return true;
    } else if (n % 2 === 1) {
        return false;
    } else {
        return powerOfTwo(n / 2);
    }
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function (startString, string = "", newString = '', arr = []) {
    if (startString.length === 0) {
        return string;
    } else if (startString.length > 0) {
        for (let i = startString.length - 1; i >= 0; i--) {
            arr.push(startString[i]);
            newString += arr[0];
            arr.shift();
        }
    }
    return (reverse(string, newString, arr));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function (string) {
    if (string.length <= 1) { return true; }
    if (string[0].toLowerCase() !== string[string.length - 1].toLowerCase()) {
        return false;
    }
    string = string.substr(1, string.length - 2);
    string = string.replace(' ', '');
    return palindrome(string);
};

/*
*
*/


// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function (x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function (x, y) {
    if (x === 0 || y === 0) {
        return 0;
    } else if (y < 0) {
        return -x + multiply(x, y + 1);
    } else {
        return x + multiply(x, y - 1);
    }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function (x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function (x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function (str1, str2) {
    if (str1.length === 0 && str2.length === 0) {
        return true;
    }
    if (str1.charAt(0) === str2.charAt(0)) {
        return compareStr(str1.slice(1), str2.slice(1));
    }


    if (str1.charAt(0) !== str2.charAt(0)) {
        return false;
    }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function (str, i = 0, arr = []) {
    if (i >= str.length) {
        return arr;
    }
    else {
        arr.push(str[i]);
    }
    i++;
    return createArray(str, i, arr);
};

// 17. Reverse the order of an array
var reverseArr = function (array, array2 = [], num = 1) {
    if (num >= array.length + 1) {
        return array2;
    } else {
        array2.push(array[array.length - num]);
    }
    num++
    return reverseArr(array, array2, num)
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function (value, length, array = [], i = 0) {
    if (i >= length) {
        return array;
    } else {
        array.push(value);
    } i++
    return buildList(value, length, array, i);
};

// 19. Count the occurrence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function (array, value, i = 0, sum = 0) {
    if (i >= array.length) {
        return sum;
    }
    if (array[i] === value) {
        sum += 1;
    }

    i++;
    return countOccurrence(array, value, i, sum);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function (array, callback, i = 0, newArray = []) {
    if (i >= array.length) {
        return newArray;
    } else {
        newArray.push(callback(array[i]));
    }
    i++;
    return rMap(array, callback, i, newArray)
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function (obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function (obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function (obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function (n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function (n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    if (n < 0) {
        return null;
    }

    return nthFibo(n - 1) + nthFibo(n - 2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function (input, i = 0, arr = []) {
    if (i >= input.length) {
        return arr;
    } else {
        arr.push(input[i].toUpperCase());
    }
    i++;
    return capitalizeWords(input, i, arr);
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function (input, i = 0, arr = []) {
    if (i >= input.length) {
        return arr;
    } else {
        arr.push(input[i][0].toUpperCase() + input[i].substring(1));
    }
    i++;
    return capitalizeFirst(input, i, arr);
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
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function (arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function (str, obj = {}) {
    if (str.length === 0) {
        return obj;
    }

    if (obj.hasOwnProperty(str[0])) {
        obj[str[0]] += 1;
        return letterTally(str.slice(1), obj);

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
var compress = function (list, arr = []) {
    if (list.length === 0) {
        return arr;
    }

    if (list[0] !== list[1]) {
        arr.push(list[0]);
        return compress(list.slice(1), arr);
    }

    return compress(list.slice(1), arr);
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function (array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function (array, newArr = []) {
    if (array.length === 0) { return newArr }

    if (array[0] !== 0) {
        newArr.push(array[0]);
        return minimizeZeroes(array.slice(1), newArr);
    }

    if (array[0] !== array[1]) {
        newArr.push(array[0]);
        return minimizeZeroes(array.slice(1), newArr);
    }
    return minimizeZeroes(array.slice(1), newArr);
};


// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function (array, i = 0) {
    if (i >= array.length) {
        array[0] = Math.abs(array[0]);
        return array;
    } else if (i % 2 !== 0 && array[i] >= 0) {
        array[i] = array[i] * -1;
    } else if (i % 2 !== 0 && array[i] < 0) {
        array[i] = array[i];
    } else if (i % 2 === 0 && array[i] < 0) {
        array[i] = array[i] * -1;
    } else if (i % 2 === 0 && array[i] >= 0) {
        array[i] = array[i];
    }

    i++;
    return alternateSign(array, i);
}

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function (str) {
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function (tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function (array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function (array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    module.exports = {
        factorial,
        sum,
        isEven,
        sumBelow,
        range,
        exponent,
        powerOfTwo,
        reverse,
        palindrome,
        multiply,
        compareStr,
        createArray,
        reverseArr,
        buildList,
        countOccurrence,
        rMap,
        nthFibo,
        capitalizeWords,
        capitalizeFirst,
        letterTally,
        compress,
        minimizeZeroes,
        alternateSign,
    };
}

//-----------------------------------
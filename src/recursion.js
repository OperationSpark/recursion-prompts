// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function (n, sum = 1, i = n) {
    if (n < 0) { return null; }
    if (i === 0) { return sum; }
    sum *= i;
    i--;
    return factorial(n - 1, sum);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function (array, total = 0, i = 0) {
    if (i >= array.length) {
        return total;
    }
    total += array[i];
    i++;
    return sum(array, total, i);
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function (array) {

};

// 4. Check if a number is even.
var isEven = function(n, i = n) {
    if (i - 2 === 0) {
        return boolean = true;
    } else if (i - 2 > 0) {
        i -= 2;
        boolean = false;
        return isEven(n, i, boolean);
    } else if (i + 2 === 0) {
        return boolean = true;
    } else if (i + 2 < 0) {
        i += 2;
        boolean = false;
        return isEven(n, i, boolean);
    }
    return boolean;
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n, sum = 0, i = n) {
    if (n === 0) { return sum; }
    if (n > 0) {
        i = n - 1;
        sum += i;
        i--;
        return sumBelow(n - 1, sum, i);
    } else if (n < 0) {
        i = n + 1;
        sum += i;
        i++;
        return sumBelow(n + 1, sum, i);
    }
    return sum;
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, arr = []) {
    if (x === y) { return arr; }
    if (x > y) {
        if (y !== x - 1) {
            x--;
            arr.push(x);
            return range(x, y, arr);
        }
        return arr; 0.
    }
    if (x !== y - 1) {
        x++;
        arr.push(x);
        return range(x, y, arr);
    }
    return arr;
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function (base, exp, i = exp, total = 1) {
    if (exp === 0) { return 1; }
    if (exp === 1) { return base; }
    if (i === 0) { return total; }
    if (i > 0) {
        total *= base;
        i--;
        return exponent(base, exp, i, total);
    }
    if (i < 0) {
        total /= base;
        i++;
        return exponent(base, exp, i, total);
    }
    return total;
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function (n, x = 1) {
    if (x === n) { return true; }
    if (x > n) { return false; }
    if (x < n) {
        x *= 2;
        return powerOfTwo(n, x);
    }
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function (string) {
    if (string === "") {return "";}
    else {
        return reverse(string.substr(1)) + string.charAt(0);
    }
};
/*



*/
// 10. Write a function that determines if a string is a palindrome.
var palindrome = function (string, i = string.length) {
    if( string = string.substr(1) + string.charAt(0)) {return true;}
    else if(!reverse(string)) {
        return reverse(string.substr(1, string.length - 1));
    } else {
        return false;
    }
    
    return palindrome(string,i);
};




// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function (x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y, total = 0, i = y) {
if(x === 0 || y === 0) {return 0;}
if(i === 0 && y > 0) {return total;}
if(i === 0 && y < 0) {return -total;}
if(y > 0) {
    total += x;
    i--; 
    return multiply(x,y,total,i);
} 
if(y < 0) {
    total += x;
    i++;
    return multiply(x,y,total, i);
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
var compareStr = function(str1, str2, i = 0) {
    if(i === str2.length && i === str1.length) {return true;}
    if(str1.charAt(i) !== str2.charAt(i)) {
        return false;
    } else if(str1.charAt(i) === str2.charAt(i)) {
        i++;
        return compareStr(str1, str2, i);
    }
    return true;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, array = [], i = 0){
    if(i === str.length) {return array;}
    if(str.charAt(i)) {
        array.push(str.charAt(i));
        i++;
        return createArray(str, array, i);
    }
    
};

// 17. Reverse the order of an array
var reverseArr = function (array , i = array.length - 1, newArr = []) {
if(i === - 1) {return newArr;}
    if(i >= 0) {
        newArr.push(array[i]);
        i--;
        return reverseArr(array, i, newArr);
    }
}; 

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, array = [], i = 0) {
    if(i === length) {return array;}
    array.push(value);
    i++;
    return buildList(value,length, array, i);


};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, i = 0, x = 0) {
if(i === array.length) {return x;}
    if(array[i] === value) {
        i++;
        x++;   
        return countOccurrence(array,value, i, x);
    } else {
        i++;
        return countOccurrence(array,value,i,x);
    }
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, i = 0, newArr = []) {
    if(i === array.length) {return newArr;}
    newArr.push(callback(array[i]));
    i++;
    return rMap(array, callback, i, newArr);
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
var nthFibo = function(n, i = 0, array = [0,1]) {
    if(i === n) {return array[i];}
    if(n < 0) {return null;}
    array.push(array[i] + array[i + 1]);
    i++;
    return nthFibo(n,i,array);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function (input, array = [],i = 0 ) {
    if(input.length === array.length) {return array;}
    array.push(input[i].toUpperCase());
    i++;
    return capitalizeWords(input,array,i);

};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function (array,newArr = [], i = 0) {
    if(array.length === newArr.length ) {return newArr;}
        newArr.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
        i++;
        return capitalizeFirst(array, newArr, i);
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
var letterTally = function (str, obj = {}, i = 0 ) {
    if (i === str.length) { return obj; }
    if (isNaN(obj[str[i]])) {
        obj[str[i]] = 0;
    }
    obj[str[i]] += 1;
    i++;
    return letterTally(str, obj, i);
};
/*
1. if there are no more characters in the string return obj (line 341)
if the number/character is not given return 0 (line 342 &  343)



*/
// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function (list, arr = [], i = 0) {
    if (i === list.length) { return arr; }
    if (list[i] != arr[arr.length - 1]) {
        arr.push(list[i]);
    }
    i++;
    return compress(list, arr, i);
};
/*
Eliminate all duplicates from a list: push the originals in a array
if there are no longer elements in the list return the duplicate free array
if the elements in the list dont equal the length of the new array(lime 363)
push the elements in the list into the array

*/

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function (array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function (array, arr = [], i = 0) {
    if (i === array.length) { return arr; }
    if (array[i] !== 0) {
        arr.push(array[i]);
    } else if (array[i] === 0 && arr[arr.length - 1] != 0) {
        arr.push(array[i]);
    }
    i++;
    return minimizeZeroes(array, arr, i);

};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function (array, newArr = [], i = 0, sign = 1) {

    if (array.length === newArr.length) { return newArr; }
    newArr.push(array[i]);
    if (newArr[i] > 0) {
        newArr[i] *= sign;
        i++;
        return alternateSign(array, newArr, i, -sign);
    } else if (newArr[i] === 0) {
        i++;
        return alternateSign(array, newArr, i, -sign);
    } else {
        newArr[i] *= -sign;
        i++;
        return alternateSign(array, newArr, i, -sign);
    }
};

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
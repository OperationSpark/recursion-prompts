// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function (n) {
    if (n === 0) {
        return 1;
    } else if (n < 0) {
        return null;
    }
    return factorial(n - 1) * n;
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function (array) {
    if (!array.length) {
        return 0;
    }
    return sum(array.slice(1)) + array[0];
};


// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function (array) {
    return array.reduce(function (sum, current) {
        if (Array.isArray(current)) {
            sum = sum + arraySum(current);
        } else {
            sum += current;
        }
        return sum;
    }, 0);
};

// 4. Check if a number is even.
var isEven = function (n) {
    n = Math.abs(n);
    if (n === 0) {
        return true;
    } else if (n <= 1) {
        return false;
    }
    return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function (n) {
    var result;
    if (n === 0) {
        return 0;
    } else if (n < 0) {
        result = sumBelow(n + 1) + n + 1;
    } else {
        result = sumBelow(n - 1) + n - 1;
    }
    return result;
};

var range = function (x, y) {
    if (y - x === 2) {
        return [x + 1];
    } else if (y === x) {
        return [];
    } else if (x === y + 1 || y === x + 1) {
        return [];
    } else {
        if (x > y) {
            var temp = x;
            x = y;
            y = temp;
        }
        var list = range(x, y - 1);
        list.push(y - 1);

        if (temp !== undefined) {
            list.sort(function (a, b) {
                return b - a
            });
        };
        return list;

    }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function (base, exp) {
    if (exp === 0) {
        return 1;
    } else if (exp < -1) {
        var isNeg = true;
        var result = exponent(base, exp + 1) / base;
    } else if (exp < 0) {
        return -exp / base;
    } else {
        var result = exponent(base, exp - 1) * base;
    }
    return result;
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function (n) {
    if (n === 1) {
        console.log(n);
        return true;
    } else if (n < 1) {
        console.log(n);
        return false;
    }
    return powerOfTwo(n / 2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function (string) {
    if (!string.length) {
        return "";
    }
    var first = string[0];
    var rest = string.slice(1);
    var result = reverse(rest);
    result += first;
    return result;
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function (string) {
    var first = string[0].toLowerCase();
    var last = string[string.length - 1].toLowerCase();
    if (string.length <= 2) {
        return true;
    } else if (first !== last) {
        return false;
    }
    return palindrome(string.slice(1, string.length - 1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function (x, y) {
    if (x < 0) {
        var negativeX = true;
        x = -x;
        if (x < y) {
            return -x;
        }
    } else if (y < 0) {
        y = -y;
    } else if (x < y) {
        return x;
    } else if (x === 0 && y === 0) {
        return NaN;
    } else if (y === 0 && x !== 0) {
        return NaN;
    } else if (x === 0) {
        return 0;
    }
    var result = modulo(x - y, y)
    if (negativeX === true) {
        return -result;
    } else {
        return result;
    }
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function (x, y) {
    if (y === 0 || x === 0) {
        return 0;
    } else if (x < 0 && y < 0) {
        x = -x;
        y = -y;
    } else if (x < 0) {
        var negativeX = true;
        x = -x;
    }
    var result = multiply(x, y - 1) + x;
    if (negativeX) {
        return -result;
    } else {
        return result
    }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function (x, y) {
    var count = 0;

    if (y === 0) {
        return NaN;
    } else if (x < 0) {
        var negativeX = true;
        x = -x;
    } else if (x === 0) {
        return 0;
    }
    if (y < 0) {
        var negativeY = true;
        y = -y;
    }
    if (x < y && x !== 0) {
        return 0;
    }
    count++;
    var result = divide(x - y, y) + count;
    if (negativeX === true && negativeY !== true) {
        return -result;
    } else if (negativeY === true && negativeX !== true) {
        return -result;
    } else {
        return result;
    }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function (x, y, n) {
    if (n === undefined) {
        n = Math.min(x, y)
    }
    if ((x <= 0) || (y <= 0)) {
        return null;
    }
    if (((x % n) == 0) && ((y % n) == 0))
        return n;
    else
        return gcd(x, y, n - 1);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function (str1, str2) {
    if (!str1.length && str2.length > 0) {
        return false;
    } else if (!str2.length && str1.length > 0) {
        return false;
    } else if (!str1.length) {
        return true;
    }
    var first_1 = str1[0];
    var first_2 = str2[0];
    var result = compareStr(str1.slice(1), str2.slice(1));
    if (first_1 !== first_2) {
        result = false;
    } else {
        return result;
    }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function (str) {
    if (!str.length) {
        return [];
    }
    var first = str[0];
    var result = createArray(str.slice(1, str.length));
    result.unshift(first);
    return result;
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
    if (!array.length) {
        return [];
    }
    var first = array[0];
    var result = reverseArr(array.slice(1));
    result.push(first);
    return result;
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function (value, length) {
    if (length === 0) {
        return [];
    }
    var result = buildList(value, length - 1);
    result.push(value);
    return result;
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function (array, value) {
    if (!array.length) {
        return 0;
    }
    var first = array[0];
    var result = countOccurrence(array.slice(1), value);
    if (value === first) {
        result++;
    }
    return result;
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function (array, callback) {
    if (!array.length) {
        return [];
    }
    var first = array[0];
    var result = rMap(array.slice(1), callback);
    result.unshift(callback(first));
    return result;
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function (obj, targetKey, num = 0) {
    // iterate over object
    for (var key in obj) {
        // see if target key matches iterated key
        if (key === targetKey) {
            num++;
        }
        // check if value is object
        if (typeof obj[key] === 'object') {
            // if so, count the number of targetkey contained in value object
            // add that number to the overall tally
            num += countKeysInObj(obj[key], targetKey, num = 0);
        }
    }
    return num;
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function (obj, targetVal, num = 0) {
    // iterate over object
    for (var key in obj) {
        // see if target key matches iterated key
        if (obj[key] === targetVal) {
            num++;
        }
        // check if value is object
        if (typeof obj[key] === 'object') {
            // if so, count the number of targetkey contained in value object
            // add that number to the overall tally
            num += countValuesInObj(obj[key], targetVal, num = 0);
        }
    }
    return num;
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function (obj, targetKey, newKey) {
    for (var key in obj) {
        if (typeof obj[key] === 'object') {
            obj[key] = replaceKeysInObj(obj[key], targetKey, newKey);
        }
        if (key === targetKey) {
            obj[newKey] = obj[key];
            delete obj[key];
        }
    }
    return obj;
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function (n) {
    if (n <= 0) {
        return null;
    }
    if (n === 1) {
        return [0, 1];
    }
    var result = fibonacci(n - 1);
    if (n <= 0) {
        return result;
    } else {
        result.push(result[result.length - 2] + result[result.length - 1]);
        return result;
    }
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function (n, result) {
    if (result === undefined) {
        result = [0];
    }
    if (n === 0) {
        return 0;
    }
    if (n < 0) {
        return null;
    }
    if (n === 1) {
        return 1;
    }
    var finalOutput = nthFibo(n - 1, result);
    if (n <= 0) {
        return finalOutput;
    } else {
        if (result.length < 2) {
            result.push(1);
        }
        result.push(result[result.length - 2] + result[result.length - 1]);
        finalOutput = result[result.length - 1];
        return finalOutput;
    }
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function (input) {
    if (!input.length) {
        return [];
    }
    var first = input[0].toUpperCase();
    var result = capitalizeWords(input.slice(1));
    result.unshift(first);
    return result;
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function (input) {
    if (!input.length) {
        return [];
    }
    var first = input[0][0].toUpperCase();
    var bigWord = first + input[0].slice(1);
    var result = capitalizeFirst(input.slice(1));
    result.unshift(bigWord);
    return result;
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
var nestedEvenSum = function (obj, sum = 0) {
    for (var key in obj) {
        if (typeof obj[key] === 'object') {
            sum = nestedEvenSum(obj[key], sum);
        } else {
            if (typeof obj[key] === 'number') {
                if (obj[key] % 2 === 0) {
                    sum += obj[key];
                }
            }
        }
    }
    return sum;
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function (arrays) {
    return arrays.reduce(function (flat, current) {
        if (Array.isArray(current)) {
            flat = flat.concat(flatten(current))
        } else {
            flat.push(current);
        }
        return flat;
    }, [])
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function (str, obj) {
    if (!str.length) {
        return {};
    }
    var first = str[str.length - 1];
    var result = letterTally(str.slice(0, str.length - 1));
    if (result[first] !== undefined) {
        result[first]++
    } else {
        result[first] = 1;
    }
    return result;
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function (list) {
    if (!list.length) {
        return [];
    }
    var current = list[0];
    var next = list[1];
    var result = compress(list.slice(1));
    if (current !== next) {
        result.unshift(current);
    }
    return result;
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function (array, aug) {
    if (!array.length) {
        return [];
    }
    var first = array[0];
    first.push(aug);
    var result = augmentElements(array.slice(1), aug);
    result.unshift(first);
    return result;
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function (array) {
    if (!array.length) {
        return [];
    }
    var current = array[0];
    var next = array[1];
    var result = minimizeZeroes(array.slice(1));

    if ((current !== next && current === 0) || current !== 0) {
        result.unshift(current);
    }
    return result;
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function (array) {
    if (!array.length) {
        return [];
    }
    var first = array[0];
    var second = array[1];
    var result = alternateSign(array.slice(2));
    if (first < 0) {
        first = -first;
    }
    if (second > 0) {
        second = -second;
    }
    result.unshift(second);
    result.unshift(first);
    return result;
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function (str, array) {
    var maxLength = 0;
    if (array === undefined) {
        array = str.split(" ");
        maxLength = array.length;
    }
    if (!array.length) {
        return "";
    }
    var last = array[array.length - 1];
    var resultString = numToText(str, array.slice(0, array.length - 1));
    var strNums = { 0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine' };
    if (maxLength > 0) {
        var separator = "";
    } else {
        separator = " ";
    }
    if (last < 10) {
        resultString += strNums[last] + separator;
    } else {
        resultString += last + separator;
    }
    return resultString;
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

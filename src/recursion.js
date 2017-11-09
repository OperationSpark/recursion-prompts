// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
    // if the number is less than 0, reject it.
    if(n < 0){
        return null;
    }
    // if the number is 0 its factorial is 1
    else if (n === 0){
        return 1;
    }
    //otherwise call the recursive function again
    else {
        return (n * factorial(n - 1));
    }
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
    if(array.length === 0){
        return 0;
    } else {
        return array[0] + sum(array.slice(1));
    }
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        if(Array.isArray(array[i])){
            sum += arraySum(array[i]);
        } else {
            sum += array[i];
        }
    }
    return sum
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n === 0){
      return true
  } else if(n === 1){
      return false
  } else if (n < 0){
      return isEven(- n);
  } else {
      return isEven(n - 2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function (n) {
    var positiveNumber = n - 1;
    var negativeNumber = n + 1;
    if (n === 0)
        return 0;
    if (n < 0)
        return sumBelow(n + 1) + negativeNumber;


        return sumBelow(n - 1) + positiveNumber;
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function (x, y) {
    if (x < y) {
        if (x === y || x + 1 === y)
            return [];
        if (x > y)
            return [x - 1];
        if (y - x === 2)
            return [x + 1];
        var list = range(x, y - 1);
        list.push(y - 1);
        return list;
    }
    else {
        if (y === x || y + 1 === x) {
            return []
        }
        if (y > x) {
            return [y - 1]
        }
        if (x - y === 2) {
            return [y + 1]
        }
        list = range(x - 1, y);
        list.unshift(x - 1)
        return list
    }
};


// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function (base, exp) {
    if (exp === 0)
        return 1;

    if (exp < 0)

        return 1 / (exponent(base, -exp));

    return exponent(base, exp - 1) * base;
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function (n) {
    return n == 1 ? true : (n < 1 ? false : powerOfTwo(n / 2));

};
// 9. Write a function that accepts a string a reverses it.
var reverse = function (string) {

    if (string.length === 1)
        return string;

    return reverse(string.slice(1)) + string[0];
};



// 10. Write a function that determines if a string is a palindrome.
var palindrome = function (string) {
    string = string.toLowerCase().trim(); //Sets string to lowercase and removes white space
    console.log(string)
    if (string === '') {// if string is an empty string, return true
        return true;
    }
    else if (string.length === 1) { //base case. if string.length is 1, it's tru
        return true
    }
    else if (string.charAt(0) === string.charAt(string.length - 1)) { //Test to see if start of string and end of string are the same
        return palindrome(string.substr(1, string.length - 2)); //if so, rerun the function, this time with the first and last parts of string chopped off. Repeat until string
    }
    else return false
};



// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function (x, y) {
    if(x === 0 && y === 0){
        return NaN;
    }
    if (x >= 0 && y > 0) { 
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
    if (y === 0)
        return 0;

    if (y > 0)
        return (x + multiply(x, y - 1));

    if (y < 0)
        return -multiply(x, -y);
};



// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function (x, y) {
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
var gcd = function (x, y) {
    if (x <= 0 || y <= 0) { 
        return null; 
    }
    if (x === y) { 
        return x; 
    }
    else if (x > y) {
         return gcd(x - y, x);
         }
    else { return gcd(x, y - x);
     }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function (str1, str2) {


    if (str1.length !== str2.length)
        if (str1 === '' || str2 === '')
            return false;


    var n = 0;
    if (n === str1.length)
        return true


    n = n + 1;
    str1 = str1.slice(1);
    str2 = str2.slice(1)
    return compareStr(str1, str2)


};
console.log(compareStr("hello", "hello"));
// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function (str, count = 0) {

    if (typeof str === 'string')
        count = count + 1;

    if (str.length === count)
        return str.split('');



    return createArray(str, count++);

};

// 17. Reverse the order of an array
var reverseArr = function (array) {
    if (!array.length)
        return array;

    return reverseArr(array.slice(1)).concat(array[0]);
};


// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function (value, length, count = 0, arr = []) {
    // console.log(count)
    // console.log(arr)
    if (count === length) {
        return arr;
    }
    else {
        arr.push(value)
    }
    return buildList(value, length, ++count, arr)
};



// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function (array, value) {
    if (!array.length)
        return 0;
    return (array[0] === value) + countOccurrence(array.slice(1), value);
};



// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function (array, callback) {
    if (array.length === 1) {
        return callback(array);
    }
    else {
        return [callback(array[0])].concat(rMap(array.slice(1), callback));
    }
};






// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function (obj, key) {
    var count = 0;
    for (var i in obj) {
        if (i === key) {
            count++;
        }
        if (typeof obj[i] === 'object') {
            count += countKeysInObj(obj[i], key);
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
    for (var i in obj) {
        if (obj[i] === value) {
            count++;
        }
        if (typeof obj[i] === "object") {
            count += countValuesInObj(obj[i], value);
        }
    }
    return count;
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function (obj, key, newKey) {
    var replaced = {};

    for (var i in obj) {
        if (i === key) {
            replaced[newKey] = obj[i];
        } else if (typeof obj[i] === "object") {
            replaced[i] = replaceKeysInObj(obj[i], key, newKey);
        } else {
            replaced[i] = obj[i];
        }
    }

    return replaced;
};


// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function (n) {
    if (n === 0 || n < 0)
        return null;
    if (n === 1)
        return [0, 1];

    var s = fibonacci(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;


};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function (n) {
    if (n < 0)
        return null;
    if (n <= 1)
        return n;

    return nthFibo(n - 1) + nthFibo(n - 2);


};


// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function (input, counter = 0) {
    if (counter === input.length) {
        return input
    }
    input[counter] = input[counter].toUpperCase()
    return capitalizeWords(input, ++counter)
};



// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function (word, count = 0, newArr = []) {

    if (word.length > count)

        newArr.push(word[0].charAt().toUpperCase() + word[0].substring(1));


    if (word.length === count)
        return newArr;



    return capitalizeFirst(word.slice(1), count++, newArr);

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
    var total = 0;
    for (var key in obj) {
        if (obj[key] % 2 === 0) {
            total += obj[key];
        }
        if (typeof obj[key] === "object") {
            total += nestedEvenSum(obj[key]);
        }
    }
    return total;
};
// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function (arrays) {
    var flatM = [];
    arrays.forEach(function (value) {
        if (Array.isArray(value)) {
            flatM = flatM.concat(flatten(value));
        }
        else {
            flatM.push(value);
        }
    });
    return flatM;

};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function (str, obj = {}) {

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
console.log("hello", {});


// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function (list, count = 0, compressedArr = [], numCompare = 0) {

    if (list.length >= 1 && list[1] !== undefined) {
        numCompare = list[1];
        if (numCompare !== list[0])
            compressedArr.push(list[0]);
    }

    if (list.length === 1) {
        if (numCompare !== list[0])
            compressedArr.push(list[0]);
    }


    if (list.length === 0)
        return compressedArr;
    return compress(list.slice(1), count++, compressedArr);
};





// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function (array, aug, newArr = []) {
    if (array.length === 0)
        return newArr;
    else
        newArr.push(array[0].concat(aug));

    return augmentElements(array.slice(1), aug, newArr);

};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function (array, itemsInArray = 0, noZeros = []) {

    if (array.length < 1) {
        return noZeros;
    }


    if (array.length > 0) {
        itemsInArray = array[0];
        if (itemsInArray !== array[1]) {
            noZeros.push(array[0]);
        }
    }



    return minimizeZeroes(array.slice(1), itemsInArray, noZeros);


};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function (array, index = 0, out = []) {
    var odds = index % 2 === 1;
    var evens = index % 2 === 0
    console.log(evens, odds, index, array[index])
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
var tagCount = function (tag, node) {
    return node = document.getElementsByTagName("p").length;
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, newArr = []) {
    var count = 0;
    if (array.length === 0) {
        count = newArr.indexOf(target);
        if (count === -1) {
            return null;
        } else {
            return count;
        }
    }

    if (array.length > 0) {
        newArr.push(array[0]);
    }

    return binarySearch(array.slice(1), target, newArr);


}



// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var merge = function (left, right) {
    var result = [],
        il = 0,
        ir = 0;

    while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }

    return result.concat(left.slice(il)).concat(right.slice(ir));
}
var mergeSort = function(items) {

    if (items.length < 2) {
        return items;
    }

    var middle = Math.floor(items.length / 2),
        left = items.slice(0, middle),
        right = items.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}
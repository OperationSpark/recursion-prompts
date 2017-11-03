// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
    if(n === 0 || n === 1){
        return 1;
    }else if(n < 0){
        return null;
    }
    return factorial(n-1) * n; 
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array, count = 0) {
    if(array[0] >= 0){
        count += array[0];
    }else if(array[0] < 0){
        count = count + array[0];
    }else{
        return count;
    }
    return sum(array.slice(1), count);
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array, flatArr = []) {

    array.forEach(function (v, i, a) {
        if (Array.isArray(v)) {
            arraySum(v, flatArr);

        } else {
            flatArr.push(v);

        }
    });

    let result = flatArr.reduce(function (prev, next) {
        prev += next;
        return prev;
    }, 0);

    return result;

};

// 4. Check if a number is even.
var isEven = function(n) {

    n = Math.abs(n);

    if(n === 0){
        return true;
    }
    if(n === 1){
        return false;
    }

    return isEven(n-2);

};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n, count = 0) {
    var positiveNumber = n - 1;
    var negativeNumber = n + 1;
    if (n === 0){
        return 0;

    }
    if (n < 0){
    return sumBelow(n + 1) + negativeNumber;

    }


    return sumBelow(n - 1) + positiveNumber;
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, results = []) {
let arr = [];
let step = 1;

if(x === y){
    return arr;
}
if(x > y){
    step = -1;
}
if(x === y-(step)){
    return arr;
}

return arr.concat(x + step, range(x+step, y));
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp, count = 0) {
    if(exp === 0){
        return 1;
    }
    if(exp < 0){
        return 1 / (exponent(base, -exp));
    }

    return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
    return n == 1 ? true : (n < 1 ? false : powerOfTwo(n / 2));
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string, reversedArr = []) {
    if (string.length === 0) {
        let reversed = reversedArr.reverse().join("");
        return reversed;
    }
    if (string.length > 0) {
        reversedArr.push(string[0]);
    }

    return reverse(string.slice(1), reversedArr);

};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string, reversedArr = [], copiedString = []) {
    if (string[0] !== undefined) {
        copiedString.push(string[0]);
    }
    //base case
    if (string.length === 0) {
        let reverse = reversedArr.reverse().join('').toString().toLowerCase();
        let copy = copiedString.join('').toLowerCase();
        if (reverse === copy) {
            return true;
        } else {
            return false;
        }
    } else {
        reversedArr.push(string[0]);
    }
    return palindrome(string.slice(1).replace(/\s/g,""), reversedArr, copiedString);
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y, count = 0, storage = 0, result = 0) {
    if (x === 0 && y === 0) {
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
var multiply = function(x, y) {
    if(y === 0){
        return 0;
    }
    if(y > 0){
        return (x + multiply(x, y-1));
    }
    if(y < 0){
        return -multiply(x, -y);
    }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
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
    if (x == y)
        return x;

    else if (x < 0 || y < 0)
        return null;
    else if (x > y)
        return gcd(x - y, y);
    else
        return gcd(x, y - x);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2, stringArr = []) {

    if (str2.length === 0) {
        let joined = stringArr.join('');
        if (str1 === joined) {
            return true;
        } else {
            return false;
        }
    } else {
        stringArr.push(str2[0]);
    }

    return compareStr(str1, str2.slice(1), stringArr);

};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, strArr = []){
    if(str.length === 0){
        return strArr;
    }else{
        strArr.push(str[0]);
    }

    return createArray(str.slice(1), strArr);
};

// 17. Reverse the order of an array
var reverseArr = function (array, rvArr = []) {

    if (array.length === 0) {
        let reversed = rvArr.reverse();
        return rvArr;
    } else {
        rvArr.push(array[0]);
    }
    return reverseArr(array.slice(1), rvArr)

};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, count = 0, arr = []) {
    if (length === count) {
        return arr;
    } else {
        count++;
        arr.push(value);
    }
    return buildList(value, length, count, arr);
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, count = 0) {
    if (array.length === 0) {
        return count;
    } else {
        if (array[0] === value) {
            count++;
        }
    }
    return countOccurrence(array.slice(1), value, count);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, mappedArr = []) {
    if(array.length === 0){
        return mappedArr;
    }else{
        mappedArr.push(callback(array[0]));
    }
    return rMap(array.slice(1), callback, mappedArr);
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key, count = 0) {
    for(var i in obj){
        if(i === key){
            count++;
        }
        if(typeof obj[i] === 'object'){
           count +=  countKeysInObj(obj[i], key);
        }
    }

    return count;
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value, count = 0) {
    for(var i in obj){
        if(obj[i] === value){
            count++;
        }
        if(typeof obj[i] === 'object'){
            count += countValuesInObj(obj[i], value);
        }
    }
    return count;
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
    /*
        Loop through object and replace specified key with newkey
        - if i is equal to key
        - replace key with new key
        -if i is an object
        -use recursion to loop through again
        - if i is not equal to key
        - 
    */
 let newObj = {};

 for(var i in obj){
     if(i === key){
         newObj[newKey] = obj[i];
     }else if(typeof obj[i] === 'object'){
         newObj[i] = replaceKeysInObj(obj[i], key, newKey);
     }else{
         newObj[i] = obj[i];
     }
 }

 return newObj;
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n, arr = [0, 1]) {
    if(n < 0 || n === 0){
        return null;
    }
    if (n === 1) {
        return arr;
    }
    if (n > 0) {
        let previous = arr[arr.length - 1];
        let beforePrevious = arr[arr.length - 2];
        arr.push(previous + beforePrevious)
    }

    return fibonacci(n - 1, arr);
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n, arr = [0, 1], count = n) {
    if(n === 0){
        return 0;
    }
    if(n < 0){
        return null;
    }
    if (count === 1) {
        let result = arr[n];
        return result;
    }
    if (count > 0) {
        let previous = arr[arr.length - 1];
        let beforePrevious = arr[arr.length - 2];
        arr.push(previous + beforePrevious);
    }

    return nthFibo(n, arr, count - 1);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, arr = []) {
    if (input.length === 0) {
        return arr;
    } else {
        let capitalized = input[0].toUpperCase();
        arr.push(capitalized);
    }
    return capitalizeWords(input.slice(1), arr);
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(input, arr = []) {
    if (input.length === 0) {
        return arr;
    } else {
        let capitalizedFirstLetter = input[0][0].toUpperCase();
        let lowercaseSubstrings = input[0].substr(1);
        let capFirstLetter = capitalizedFirstLetter + lowercaseSubstrings;
        arr.push(capFirstLetter);
    }
    return capitalizeFirst(input.slice(1), arr);
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
var nestedEvenSum = function(obj, count = 0) {
    /*
   Return the sum of all even numbers in a nested Object
   - Use for in loop to loop through Object
   - If i is an object, recursively loop through
   - if i isn't an object, check numbers to see if they are even
   - use modulo to see if numbers are even
   - add numbers to count variable
   - return count 
    */
    
    for (var i in obj) {
        if (typeof obj[i] === 'object') {
            count += nestedEvenSum(obj[i]);
        } else {
            if (obj[i] % 2 === 0) {
                
                count += obj[i];
            }
        }
    }
    return count;
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(input, arr = []) {
    /*
        Should return a flattened array of nested arrays
            - if input length is zero, return array
            - loop through input by checking to see if its an array
            - if its an array, recursively loop through again
            - if its not an array, push input into array
    */
    if (input.length === 0) {
        return arr;
    }
    if (Array.isArray(input[0])) {
        flatten(input[0], arr);
    } else {
        arr.push(input[0]);
    }

    return flatten(input.slice(1), arr);
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
    /*
        Given a string return an object containing tallies of each letter
            - if str[0] is a key of object, add one to it
            - if str[0] is not a key of object, create it and add 1
            - once str's length is 0 return object
    */
    let index = str[0];
    if (str.length === 0) {
        return obj;
    }
    if (obj[index]) {
        obj[index]++;
    } else {
        obj[index] = 1;
    }


    return letterTally(str.slice(1), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, arr = []) {
    /*
    Should return an array with no duplicates
    - create an array to store values
    - if list is zero, it should return the created array
    - if list is not zero, it should check to see if the next number in the array is the same as the last
    - if its the same dont add it 
    - if its not the same, add it
    */
    changingNumber = list[1];
    if (list.length === 0) {
        return arr;
    } else {
        if (list[0] !== changingNumber) {
            arr.push(list[0]);
        }
    }

    return compress(list.slice(1), arr, changingNumber);
};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug, arr = []) {
    if (array.length === 0) {
        return arr;
    } else {
        if (Array.isArray(array[0])) {
            arr.push(array[0].concat(aug));

        }
    }
    return augmentElements(array.slice(1), aug, arr);
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, arr = []) {
    if (array.length === 0) {
        return arr;
    } else {
        changingNumber = array[1];
        if (array[0] !== changingNumber) {
            arr.push(array[0]);
        }
    }
    return minimizeZeroes(array.slice(1), arr, changingNumber);
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, index = 0, newArr = []) {
    /*
    Should alternate signs in array
      - every odd index of the array must be a negative Number
      - the first number is always positive
      - loop through and if index is odd change number to negative number and push to newArr
      - if index is not odd just push number to newArr
      - if array.length is zero return newArr
    */
    var oddIndex = index % 2 === 1;
    var evenIndex = index % 2 === 0;
    
    if (index === array.length) {
        return newArr;
    }
    if (evenIndex) {
        newArr.push(Math.abs(array[index]));
    }
    if (oddIndex) {
        newArr.push(-Math.abs(array[index]));
    }
    return alternateSign(array, ++index, newArr);
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str, count = 0, string = '') {

    /*
     Should convert string numbers ex: '5' to string words ex: 'five'
      - create object with keys as numbers and values as the word number
      - convert string to array
      - Loop through numbers object
      - If numbers key is strictly equal to the first value in array
      - replace string number with string word
      - use flag to prevent number from adding to string
      -NOTE: strings are immutable 
  */

    const numbers = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'eight',
        9: 'nine'
    };

    if (str.length === count) {
        return string;
    }

    if (count < str.length) {
        let flag = false;
        for (var i in numbers) {
            if (str[count] === i) {
                string += numbers[i];
                flag = true;
            }
        }
        if (flag !== true) {
            string += str[count];
        }
    }

    return numToText(str, ++count, string);
    
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node, count = 0, flag = false) {
    /*
        Should return the number of times a specified tag is in the DOM
            - declare a variable to search the DOM
            - use loop to loop through childNodes
            - if childNodes[i].tagName is equal to tag, add to count
            - return count

            BASE CASE????
            - if count is equal to childNodes.length
            - how to get to childNodes[3].tagName ????
    */
    //let childNodes = document.body.childNodes;
    //console.log(childNodes[].tagName);
    let childNodes = document.body.childNodes;
    //console.log(childNodes);

    if(flag === true){
        return count;
    }else{
        childNodes.forEach(function(v, i, a){
            if(v.tagName){
                if(v.tagName.toLowerCase() === tag.toLowerCase()){
                    flag = true;
                    count += 1;
                }
            }
        })
    }
    

    
    

    return tagCount(tag, node, count, flag);
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, number = 0, flag = false, count = 0) {
    /*
       Should return index at target
         - use indexof
         - use flag to set true or false value
         - if indexof is higher than -1
         - store indexof in variable and use that to pull the element out of the array
         - 
   */
    if (flag === true) {
        return number;
    }
    if (array.length === 0 && flag === false) {
        return null;
    }
    if (array[0] === target) {
        flag = true;
        number += count;
    }

    return binarySearch(array.slice(1), target, number, flag, ++count);
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array, newArr = []) {
    if (array.length === 0) {
        return newArr.sort(function (a, b) {
            return a - b;
        });
    } else {
        newArr.push(array[0]);
    }
    return mergeSort(array.slice(1), newArr);
};

// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
    if (n < 0){
        return null;
    }else if(n === 0){
        return 1;
    }  
    return n * factorial(n - 1);
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
var arraySum = function(array, sum = 0) {
    return array.reduce((sum, el) => {
        // base case: add integer element to sum
        // recursive case: call arraySum on non-integer element
        return sum + (Array.isArray(el) ? arraySum(el) : el)
      }, 0);
};

// 4. Check if a number is even.
var isEven = function(n) {
    if(n === 0){
        return true;
    } else if(n === 1){
        return false;
    } else if(n < 0){
        return isEven(n + 2);
    } 
    else {
        return isEven(n - 2);
    }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
    if(n === 0){
        return n;
    }else if(n < 1){
        return (n+1) + sumBelow(n+1);
    }
    else{
        return (n-1) + sumBelow(n-1);
    }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
    if(x === y - 1 || x === y || x - 1 === y){
        return [];
    }  else if(x > y){
        return [x-1].concat(range(x-1, y));
    }
        return [x+1].concat(range(x+1, y));
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
    if(exp === 0){
        return 1;
    } else if(exp < 0){
        return (1/base) / exponent(base, (-exp) - 1);
    } else{
    return base * exponent(base, exp - 1);
    }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
    if(n === 1) {
        return true;
    } else if(n < 1){
        return false;
    }
    return powerOfTwo(n / 2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
    var strArr = string.split("");
    if(string === ''){
        return string;
    }
    else{
        return strArr[strArr.length - 1] + reverse(strArr.slice(0,strArr.length - 1).join(""));
    }
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
    var newStr = string.toLowerCase().trim();
    if(newStr === '' || newStr.length === 1){
        return true;
    }else if(newStr[0]===newStr[newStr.length-1]){
        return palindrome(newStr.slice(1,newStr.length-1));
    }else{ 
        return false;
    }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {

    if (y === 0) { return NaN; }

    if (x < 0 && y < 0) {
      if (x > y) { return x; }
    } 
    else if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
      if (-x < y) { return x; }
 
      return modulo(x + y, y);
    } else {
      if (x < y) { return x; }
    }
  
    return modulo(x - y, y);
    
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
    if(x === 0 || y === 0){
        return 0;
    }
    else if(x === 1){
        return y;
    }
    else if(y === 1){
        return x;
    }
    else if(x < 0 && y < 0){
        return (-x) + multiply((-x), (-y)-1);
    }
    else if(x < 0 && y > 0){
        return x + multiply(x, y - 1);
    }
    else if(x > 0 && y < 0){
        return y + multiply(x - 1, y);
    } 
    else if(x > 0 && y > 0){
        return x + multiply(x, y-1);
    }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {

    if (y === 0) { return NaN; }
    if (x === 0) { return 0; }
    if (x < 0 && y > 0 && -x < y || x < -y) { return 0; }
    if (x > 0 && y > 0 && x < y) { return 0; }
  

    if (x > 0 && y > 0) {
      return 1 + divide(x - y, y);
    } else {
      return -1 + divide(x + y, y);
    }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
    // base cases
  if (x < 0 || y < 0) { return null; } 
  if (y % x === 0) { return x; }
  
  // recursive cases
  return x > y ? gcd(y, x) : gcd(x, y % x);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
    if(str1 === '' && str2 === ''){
        return true;
    }else if(str1[0] === str2[0]){
         return compareStr(str1.slice(1),str2.slice(1));
     }else{
         return false;
     }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
    if(str === ''){
        return [];
    }
    return [str[0]].concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
    if(array.length === 0){
        return array;
    }
    else{
        return [array.pop()].concat(reverseArr(array));
    }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
    if(length === 0){
        return [];
    }
    return [value].concat(buildList(value, length -1));
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
    var count = 0;
    if(array.length === 0){
        return 0;
    }else if(array[0] === value){
        return count + 1 + countOccurrence(array.slice(1), value);
    } else{
        return count + 0 + countOccurrence(array.slice(1), value);
    }
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
    if(array.length === 0){
        return array;
    }else{
        return [].concat(callback(array[0])).concat(rMap(array.slice(1), callback));
    }
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {
//                   'e': {'x':'y'}, 
//                   't': {
//                         'r': {'e':'r'}, 
//                         'p': {'y':'r'}
//                         },
//                   'y':'e'
//                 };
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key, count = 0) {
    // debugger;

        for(let aKey in obj){ //   console.log('obj key', aKey)
          if(aKey === key){
              count ++;
            }
            else if(typeof obj[aKey] === 'object'){
                count += countKeysInObj(obj[aKey], key);
                }
          }
    return count;
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 
//                't':{
//                     'r': {'e':'r'}, 
//                     'p': {'y':'r'}
//                     },
//                 'y':'e'
//               };
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value, count = 0) {
    for(let aKey in obj){ //   console.log('obj key', aKey)
    if(obj[aKey] === value){
        count ++;
      }
      else if(typeof obj[aKey] === 'object'){
          count += countValuesInObj(obj[aKey], value);
          }
    }
return count;
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
// var testobj = {'e': {'x':'y'}, 
//                't':{
//                      'r': {'e':'r'}, 
//                      'p': {'y':'r'}
//                     },
//                'y':'e'
//               };
var replaceKeysInObj = function(obj, key, newKey) {
    // debugger;
    for(let aKey in obj){ //   console.log('obj key', aKey)
        if(aKey === key){
            obj[newKey] = obj[aKey];
            delete obj[key];
            // console.log(obj)
        }
        else if(typeof obj[aKey] === 'object'){
           replaceKeysInObj(obj[aKey], key, newKey);
          }
    }
return obj;
};
// console.log(replaceKeysInObj(testobj, 'e', 'b'));
// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
    if(n < 1){
        return null;
    }
    else if (n===1) 
    {
      return [0, 1];
    } 
    else 
    {
      var s = fibonacci(n - 1);
      s.push(s[s.length - 1] + s[s.length - 2]);
      return s;
    }
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
    if(n<0){
        return null;
    }
    else if (n==0){
        return 0;
    }
    else if (n==1){
        return 1;
    }
    else if (n>1){
        return nthFibo(n-1) + nthFibo(n-2);
    }
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
    if(input.length === 0){
        return input;
    }
    else{
        return [].concat(input[0].toUpperCase()).concat(capitalizeWords(input.slice(1)));
    }

};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
    if(array.length === 0){
        return array;
    }else
    return [].concat(array[0][0].toUpperCase() + array[0].slice(1)).concat(capitalizeFirst(array.slice(1)));
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
    for(let aKey in obj){ //   console.log('obj key', aKey)
        if(obj[aKey] % 2 === 0){
            count += obj[aKey];
        }
        else if(typeof obj[aKey] === 'object'){
           count += nestedEvenSum(obj[aKey]);
        }
    }
return count;
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
    return array.reduce((arr, el) => {
        // base case: add integer element to sum
        // recursive case: call arraySum on non-integer element
        return arr.concat((Array.isArray(el) ? flatten(el) : el))
      }, []);
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj={}, i = 0) {
    if(str.length === 0){
        return obj;
    }
    else if(obj[str[0]] === undefined){
        obj[str[0]] = 1;
        i++;
    return letterTally(str.slice(1), obj, i);
    }
    else {
        obj[str[0]] += 1;
        i++;
        return letterTally(str.slice(1), obj, i);
    }
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
    if(list.length === 0){
        return [];
    }
    else{
        if(list[0] === list[1]){
            return compress(list.slice(1));
        } 
        else{
            return [list[0]].concat(compress(list.slice(1)));
        }
    }
};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
    
    if(array.length === 0){
        return array;
    }
    else if(Array.isArray(array[0])){
        return [array[0].concat([aug])].concat(augmentElements(array.slice(1), aug));
    }
    
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
    if(array.length === 0){
        return array;
    }
    else{
        if(array[0] === 0 && array[1] === 0){
            return [].concat(minimizeZeroes(array.slice(1)));
        }
        else{
            return [array[0]].concat(minimizeZeroes(array.slice(1)));
        }
    }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
    if(array.length === 0){
        return array;
    }else if(array.length % 2 === 0 && array[0] < 0){
        return [-1 * array[0]].concat(alternateSign(array.slice(1)));
    } else if(array.length % 2 !== 0 && array[0] < 0){
        return [array[0]].concat(alternateSign(array.slice(1)));
    }else if(array.length % 2 === 0 && array[0] > 0){
        return [array[0]].concat(alternateSign(array.slice(1)));
    } else if(array.length % 2 !== 0 && array[0] > 0){
        return [-1 * array[0]].concat(alternateSign(array.slice(1)));
    }
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
    var newStrArr = str.split(' ');
    var wordEquiv = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    if(newStrArr.length === 1){
        return newStrArr;
        }
    else if(Number(newStrArr[0]) === 0){
        return [wordEquiv[0]].concat(numToText(newStrArr.slice(1).join(' '))).join(" ");
        }
    else if(!Number(newStrArr[0])){
        return [newStrArr[0]].concat(numToText(newStrArr.slice(1).join(' '))).join(" ");
        }
        else {
            return [wordEquiv[Number(newStrArr[0])]].concat(numToText(newStrArr.slice(1).join(' '))).join(" ");
        }
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node, count = 0) {
 
    node = node || document;

        if (node.tagName === tag.toUpperCase()) {
          count++;
        }

      for (let i = 0; i < node.children.length; i++) {
        count += tagCount(tag, node.children[i]);
      }
  
    return count;
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min = 0, max = array.length - 1) {
    if (min > max) {
            return null;
        }
    var index = Math.floor((max + min) / 2);
    if (array[index] === target) {
        return index;
    } else if (array[index] > target) {
            return binarySearch(array, target, min, index - 1);
        } 
      else if(array[index] < target){
            return binarySearch(array, target, index + 1, max);
        } 
    return index;
};

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


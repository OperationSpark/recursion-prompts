// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
    if(n === 0){
        return 1;
    } else if(n < 0){
      return null;
    } else {
    return (n*(factorial(n-1)))
    }
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
    var arr = array.slice(0);
    if(arr.length === 0){
        return 0;
    }else if (arr.length === 1) {
        return arr[0];
    } else {
        return arr.pop() + sum(arr);
    }
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n) {
    if(n === 0){
        return true;
    }
    else if(n === 1){
        return false;
    }
    else{
        return isEven(Math.abs(n)-2);
    }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n, sum=0, i=n) {
  if(n<0){
     if(i===0){
       return sum;
     }else{
       i++;
       sum += i;
       return sumBelow(n,sum,i);
     }
  }else{
    if(i===0){
      return sum;
    }else{
      i--;
      sum += i;
      return sumBelow(n, sum, i)
    }
  }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, i=x, arr=[]){
  if(x === y){
    return arr;
  }else if(y <= x){
    if(i===(y  + 1)){
      return arr;
    }else{
      i--;
      arr.push(i);
      return range(x, y, i, arr);
    }
  }else{
    if(i===(y - 1)){
      return arr;
    }else{
      i++;
      arr.push(i);
      return range(x, y, i, arr);
    } 
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp, answer = base, i=1) {
  while(exp < 0){
    var posExp = -(exp);
    var j = i;
    if(j === posExp){
      var inverse = (1/answer);
      return inverse;
    }
    else{
      j++;
      answer *= base;
      return exponent(base, exp, answer, j);
    }
  }
  if(inverse){
      return inverse;
  }else if(exp === 0){
      return 1;
  }else if(i === exp){
    return answer;
  }else{
    i++;
    answer *= base;
    return exponent(base, exp, answer, i);
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if(n <= 0){
    return false;
  } else if(n === 1 || n === 2){
    return true;
  } else if(n % 2 === 1){
    return false;
  } else {
    return powerOfTwo(n / 2)
  }
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string, i=string.length, reversed=[]) {
    if(i <= 0){
    return reversed.join('');
  }  
  else{
    i--;
    reversed.push(string[i]);
    return reverse(string, i, reversed);
  }
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string, i=string.length, reversed=[]) {
    while(!bassAckwards){
        if(i <= 0){
            var bassAckwards = reversed.join('');
        }else{
            i--;
            reversed.push(string[i]);
            return palindrome(string, i, reversed);
        }
    }    
    if(bassAckwards.replace(/\s+/g, '').toLowerCase() === string.replace(/\s+/g, '').toLowerCase()){
        return true;
    }
    else{
        return false;
    }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y, product = 0, i = 0){
  if(y < 0){
    var temp = -y;
    if(i === temp){
    return -product;
  } else {
  product += x;
  i++;
  return multiply(x, y, product, i)
    }
  }
  else {
    if(i === y){
    return product;
  } else {
  product += x;
  i++;
  return multiply(x, y, product, i)
    }
  }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1,str2,bool=true,length=0,i=0){
  if(str1.length > str2.length){
      length = str1.length;
    }else{
      length = str2.length;
    }
  if(i === length){
    return bool;
  }
  else{
    if(str1[i] !== str2[i]){
      bool = false;
    }
    i++;
    return compareStr(str1,str2,bool,length,i);
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, newArr = [], i = 0){
  if(i === str.length){
    return newArr;
  }
  newArr.push(str[i])
  i++
  return createArray(str, newArr, i)
};

// 17. Reverse the order of an array
var reverseArr = function(array, result = [], i = array.length - 1){
  if(i === -1){
    return result
  }
  result.push(array[i])
  i--
  return reverseArr(array, result, i)
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, result = [], i = 0){
  if(i === length){
    return result;
  }
  result.push(value);
  i++
  return buildList(value, length, result, i);
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, result = 0, i = 0){
  if(i === array.length){
    return result;
  }
  if(array[i] === value){
    result++
  }
  return countOccurrence(array, value, result, ++i);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, result = [], i = 0){
  if(i === array.length){
    return result;
  }
  result.push(callback(array[i], i, array));
  i++;
  return rMap(array, callback, result, i);
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n, results=[0,1], i=1){
  if(n < 1){
    return null;
  }
  else if(i === n){
    return results;
  }
  else{
    results.push(results[i-1]+results[i]);
    i++;
    return fibonacci(n, results, i);
  }
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n, stack = {}) {
  if(n < 0){
    return null;
  }
  if(n > 1){
    return stack[n] || (stack[n] = nthFibo(n-1)+nthFibo(n-2))
  }
  return n;
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, result = [], i = 0){
  if(i === input.length){
    return result;
  }
  result.push(input[i].toUpperCase());
  i++
  return capitalizeWords(input, result, i)
}

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, result = [], i = 0) {
  if(i === array.length){
    return result;
  }
  result.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
  i++
  return capitalizeFirst(array, result, i)
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
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}){
  var length = str.length;
  var current = str.charAt(0);
  if(length === 0){
    return obj;
  } else if(obj[current]){
    obj[current] ++;
  } else {
    obj[current] = 1;
  }
  return letterTally(str.slice(1), obj, length, current)
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, results = [], i = 0){
  if(i === list.length){
    return results;
  } else if(list[i] !== list[i - 1]){
    results.push(list[i])
  }
  i++
  return compress(list, results, i)
};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, results = [], i = 0){
  if(i === array.length){
    return results;
  }
  if(array[i] !== 0){
    results.push(array[i])
  } else {
    if(array[i + 1] === 0){
      results.push(array[i])
      i++
    }
  }
  i++;
  return minimizeZeroes(array, results, i)
}

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, results=[], i=0){
  if(i === array.length){
    return results;
  }
  else{
    if(i % 2 !== 0){
      results.push(-Math.abs(array[i]));
    }
    else{
      results.push(Math.abs(array[i]));
    }
    i++;
    return alternateSign(array, results, i);
  }
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str, strArr=str.split(''),i=0){
  if(i === strArr.length){
    return strArr.join('');
  }
  else{
    if(typeof Number(strArr[i]) === 'number'){
      if(Number(strArr[i]) === 1){
        strArr.splice(i,1,'one');
      }
      else if(Number(strArr[i]) === 2){
        strArr.splice(i,1,'two');
      }
      else if(Number(strArr[i]) === 3){
        strArr.splice(i,1,'three');
      }
      else if(Number(strArr[i]) === 4){
        strArr.splice(i,1,'four');
      }
      else if(Number(strArr[i]) === 5){
        strArr.splice(i,1,'five');
      }
      else if(Number(strArr[i]) === 6){
        strArr.splice(i,1,'six');
      }
      else if(Number(strArr[i]) === 7){
        strArr.splice(i,1,'seven');
      }
      else if(Number(strArr[i]) === 8){
        strArr.splice(i,1,'eight');
      }
      else if(Number(strArr[i]) === 9){
        strArr.splice(i,1,'nine');
      }
    }
    i++;
    return numToText(str,strArr,i);
  }
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};

// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
    if(n === 0) return 1;
    else if(n < 0) return null;
    return n * factorial(n - 1);
};
//console.log(factorial(5));


// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
    if(array.length === 0) return 0;
    return array[0] + sum(array.slice(1));
};
//console.log(sum([1,2,3,4,5,6]));



// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
    var sum = 0;
    if(array.length===0) return 0;
   for(var i = 0; i < array.length; i++){
       if(Array.isArray(array[i])) {
            sum += arraySum(array[i]);
       } else {
        sum += array[i];
     }
   }
   return sum;
};
//console.log(arraySum([1,[2,3],[[4]],5]));



// 4. Check if a number is even.
var isEven = function(n) {
    if(n === 0) return true;
    if(n === 1) return false;
    if(n < 0) return isEven(-n);
    return isEven(n -2);
};
//console.log(isEven(10));


// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
    if(n === 0) return 0;
    if(n < 0) n += 1;
    else n -=1;
    return n + sumBelow(n);
};
//console.log(sumBelow(10));


// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
    var newArr = [];
    if(x===y -1) return newArr;
    if(y===x -1) return newArr;
    if(y===x) return [];
    if(x > y) x -= 1;
    else x += 1;
    newArr.push(x);
    return newArr.concat(range(x,y));
}; //console.log(range(2,9));

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp < 0)
    return exponent(base, exp + 1)/base
    else if (exp===0)
    return 1;
    else 
    return base * exponent(base, exp-1);
}; //console.log(exponent(4,2));

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(num) {
    return num == 1 ? true : (num < 1 ? false : powerOfTwo(num/2));
}; //console.log(powerOfTwo(4));

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
    if(string.length === 0) return '';
       else 
       return reverse(string.slice(1)) + string[0];
}; //console.log(reverse('Racecar'));

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(str) {
    if(str.length === 0) return true;
    if(str[0]===' ' || str[str.length-1]===' ') return true;
  if(str[0].toLowerCase() != str[str.length-1].toLowerCase()) return false;
  else return palindrome(str.slice(1,str.length-1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y){
  if(x === 0 && y === 0){ 
      return 'NaN';
  }
  if(x === 0){
      return 0;
  }
  if(x < 0 && y < x){ 
      return x;
  }
  if(x < 0 && y < 0){
      return x - y;
  }
  if(x < y && y < 3){
   return 0;  
  }
  if(x < y){
   return x;
  } else {
    return modulo(x-y,y);
  }
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
var divide = function (x, y, numerator = x, denominator = y, quotient = 0) {
  if (numerator === 0 && denominator === 0) {
    return 'NaN';
  } else if ((numerator > 0 || numerator < 0) && denominator === 0) {
    return 'Infinity';
  } else if(numerator < denominator){
    return quotient
  } else if (numerator <= 0) {
    return quotient;
  }
  else {
    numerator -= denominator;
    quotient++;
    return divide(x, y, numerator, denominator, quotient);
  }
};
    


// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
   if(x < 0 || y < 0) return null;
   if(!y) return x;
   else return gcd(y, x % y);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
      if(str1.length === 0 && str2.length === 0) return true;
      if(str1[0] !== str2[0]) return false;
  else return compareStr(str1.slice(1), str2.slice(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
    if(!str.length) return [];
  else return [str[0]].concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function (arr) {
    if(!arr.length)return [];
  else return reverseArr(arr.slice(1)).concat(arr[0]);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
    if(length === 0) return [];
  else return [value].concat(buildList(value,length-1));
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
    if(!array.length) return 0;
  return (array[0] === value) + countOccurrence(array.slice(1), value);
}; 

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(arr, cb) {
    if(arr.length === 0) return [];
  else return [cb(arr[0])].concat(rMap(arr.slice(1),cb));
};

// 21. Write a function that counts the number of times a key occurs in an object.
var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(object, searchKey) {
  let count = 0;
  for(let key in object){
    if(key === searchKey) count++;
    if(typeof object[key] === 'object'){
      count += countKeysInObj(object[key], searchKey);
    }
  } return count;
  }; 
countKeysInObj(testobj, 'r');

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(object, value) {
    let count = 0;
  for(let key in object){
    if(object[key] === value) count++;
    if(typeof object[key] === 'object'){
      count += countValuesInObj(object[key], value);
    }
  } return count;
}; 

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(object, oldKey, newKey) {
  for(let key in object){
    if(key === oldKey){
      object[newKey] = object[key];
      delete object[key];
    }
    if(typeof object[key] === 'object'){
      object[key] = replaceKeysInObj(object[key], oldKey, newKey);
    }
  } return object;
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
  if(n===1) return [0,1];
  if(n < 1) return null;
  else var s = fibonacci(n-1);
  s.push(s[s.length-1]+s[s.length-2]);
  return s;
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n,a=1,b=0) {
    if(n === 0) return b;
    if(n < 0) return null;
    else return nthFibo(n - 1, a + b, a);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
    if(!input.length) return [];
    else return [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)));
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
    if(!array.length) return [];
    var capWord = function(word){
       return word[0].toUpperCase() + word.slice(1); 
        };
     return [capWord(array[0])].concat(capitalizeFirst(array.slice(1)));
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
var nestedEvenSum = function(object) {
     let count = 0;
  for(let key in object){
    if(object[key] % 2 === 0) count += object[key];
    if(typeof object[key] === 'object'){
      count += nestedEvenSum(object[key]);
    }
  } return count;
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
  var newArr = [];
  for (var i = 0; i < arrays.length; i++) {
    if (Array.isArray(arrays[i])) {
      newArr = newArr.concat(flatten(arrays[i]));
    } else {
      newArr.push(arrays[i]);
    }
  }
  return newArr;
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
  var current = str.charAt(0);
  if (!str.length) {
    return obj;
  } else if (obj[current]) {
    obj[current] ++;
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
    if(!list.length) return list;
  for(let i = 0; i <= list.length; i++){
  if(list[0] !== list[i]){
    return [list[0]].concat(compress(list.slice(i)));
  } 
 }
};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
    if(!array.length) return array;
  for(let i = 0; i < array.length; i++){
    if(Array.isArray(array[i])){
      array[i].push(aug);
     return [array[i]].concat(augmentElements(array.slice(1), aug));
    }
  }
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
    if (array.length === 0) { return array };
    if(minimizeZeroes(array.slice(1))[0] === 0 && array[0] === 0) {
        return minimizeZeroes(array.slice(1));
    } else {
        return [array[0]].concat(minimizeZeroes(array.slice(1)));
    }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
    if (array.length === 0) { return array; }
    if(array[0] < 0) { array[0] = -array[0]; }
    if(array[1] > 0) { array[1] = -array[1]; }
    return [array[0], array[1]].concat(alternateSign(array.slice(2)));
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str, modded = []) {
  if (str.length === 0){
      var joinedMod = modded.join(" ");
      return joinedMod;
  }
  var numStringObj = {
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
      10: "ten"
  };
  var splitString = str.split(' ');
  for (var key in numStringObj){
      if (splitString[0] === key){
          modded.push(numStringObj[key]);
          var x = splitString.slice(1);
          str = x.join(' ');
          return numToText(str, modded);
      }
  }
  if (modded[0] === splitString[0]){
      null;
  }
  if (modded[0] !== splitString[0]){
      modded.push(splitString[0]);
  }
  var splitTakeAway = splitString.slice(1);
  str = splitTakeAway.join(' ');
  return numToText(str, modded);
};


// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
    return document.getElementsByTagName('p').length;
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, start = 0, end = array.length-1){
  
   let middle = Math.floor((start + end) /2);
   if(start > end) return null;
   if(array[start] === target) return start;
   if(array[end] === target) return end;
   if(array[middle] > target){
     return binarySearch(array, target, start + 1, middle);
   }
   if(array[middle] < target){
     return binarySearch(array, target, middle, end -1);
   } return middle;
 }

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(arr) {
    if(arr.length === 1) return arr;
    
  const middle = Math.floor(arr.length / 2); 
  const left = arr.slice(0, middle); 
  const right = arr.slice(middle); 
  
  return merge(
    mergeSort(left),
    mergeSort(right)
  );
};

function merge (left, right) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120

/*
Input: number
Output: number
Edge cases:
- If number is negative?
- If number is 0
- If input isn't a number

Base Case: If number = 1, return 1
Recursive Case: If number > 1, return num time output of factorial(num - 1)
*/
var factorial = function(n) {
  if (n < 0) {
    return null;
  } else if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21

/*
Input: array
Output: number
Edge Cases:
- If array is empty

Base Case: If the array is 1 number return number
Recursive Case: Add the first value to the second value and remove the first value from the array, then call with the number
*/
var sum = function(array) {
  if (!array.length) {
    return 0;
  }
  if (array.length <= 1) {
    return array[0];
  }
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
/*
Input: array
Output: number
Edge Cases:
-

Base Case: If you hit an array 
*/
var arraySum = function(array) {
  var flatArray = array.flat();
  if (!flatArray.length) {
    return 0;
  }
  if (flatArray.length <= 1) {
    return array[0];
  }
  return array[0] + arraySum(array.slice(1));
};

// 4. Check if a number is even.

/*
Input: number
Output: boolean
Edge Cases:
-

Base Case: If num = -1 after subtracting 2, return false else return true.
Recursive Case: If num > 0, subtrace 2 and call isEven.
*/
var isEven = function(n) {
  if (n === 0) {
    return true;
  } else if (n === -1) {
    return false;
  }
  if (n > 0) {
    return isEven(n - 2);
  } else if (n < 0) {
    return isEven(n + 2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21

/*
Input: number
Output: number
Edge Cases:
-

Base Case: If num = 1, return 1.
Recursive Case: Return n + sumBelow(n -1).
*/
var sumBelow = function(n) {
  if (n === 0) {
    return 0;
  } else if (n < 0) {
    return n + 1 + sumBelow(n + 1);
  }
  return n - 1 + sumBelow(n - 1);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]

/*
Input: two numbers
Output: array of numbers
Edge Cases:
-

Base Case: If there are no numebrs between para 1 and 2, return array of nums
Recursive Case: Check if 
*/
var range = function(x, y) {
  if (Math.abs(x - y) <= 1) {
    return [];
  }
  if (x < y) {
    var array = [x + 1];
    if (array.length !== Math.abs(x - y) - 1) {
      array.push(range(x + 1, y));
      array = array.flat();
      return array;
    }
  } else if (x > y) {
    var array = [x - 1];
    if (array.length !== Math.abs(x - y) - 1) {
      array.push(range(x - 1, y));
      array = array.flat();
      return array;
    }
  }
  return array;
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
/*
base case : exponent = 1
return number

recursive case: base*exponent(base,exponent-1) 


*/

var exponent = function(base, exp) {
if(exp===0){return 1};
if (exp === 1){return base}else if(exp>0){
  return base*exponent(base,exp-1);
}else{return exponent(base,exp+1)/base;}

};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
/*
base  case: number is less than one
if number =1 return true else false
recursive case: return function passing in number /2

*/
var powerOfTwo = function(n) {
  if(n <=1){
    if(n === 1){return true}else {return false;}
  }else{return powerOfTwo(n/2)}
};

// 9. Write a function that accepts a string a reverses it.

/*

base case: check if string is empty
-if so return empty string

recursive: return last letter  and function passing in string with everything but the last letter

*/

var reverse = function(str) {
if(!str.length){return ""}else{
  return str[str.length-1]+reverse(str.slice(0,-1))
}

};

// 10. Write a function that determines if a string is a palindrome.
/*
base case: str.length is <= 1
return true
recursive: check if

*/
var palindrome = function(str) {
  str = str.replaceAll(/\s/g,'')
if(str.length<=1){return true}else{
  var fL = str[0].toLowerCase();
  var lL = str[str.length-1].toLowerCase();

  if(fL !== lL){return false}else{return palindrome(str.slice(1,-1))}
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
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
/*
base case: y = 1
-return x
recursive:
return x + multiply(x, y-1)

*/
// if(y === 0){return 0}else if(y === 1){return x}else if(y<0) {
//   if(x>=0){return x+multiply(x,y+1)}else{
//     return (x+multiply(x,y+1))
  
//   }
// }else{return x+multiply(x,y-1)}
var multiply = function(x, y) {


if(y === 0){return 0}
if(y<0) return (-multiply(x,-y))
  return x + multiply(x,y-1)

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
var compareStr = function(str1, str2) {

if(str1.length<=0 && str2.length<=0){return true}else{
  var f1 = str1[0]
  var f2 = str2[0]

  if(f1 !== f2){return false}else{return compareStr(str1.slice(1),str2.slice(1))}

}

};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, hol = []){
  if(str.length === 0){return hol}else{
    hol.push(str[0])
    str = str.slice(1);
    return createArray(str,hol)
  }
};

// 17. Reverse the order of an array
var reverseArr = function (arr,hol=[]) {
   if(arr.length === 0){return hol}else{
    hol.push(arr[arr.length-1])
    arr = arr.slice(0,-1);
    return reverseArr(arr,hol)
  }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
/*
Base Case: If arr = length
- Return arr.
Recursive Case: If arr < length
- Push value to arr.
*/
var buildList = function(value, length, arr = []) {
  if (arr.length === length) {
    return arr;
  }
  arr.push(value)
  return buildList(value, length, arr);
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
/*
Base Case: If array = []
- return count.
Recursive Case: If array.length
- Check if the first index = value
- Return countOccurence(array.slice(1), value)
*/
var countOccurrence = function(array, value, count = 0) {
  if (!array.length) {
    return count;
  }
  if (array[0] === value) {
    count++;
  }
  return countOccurrence(array.slice(1), value, count);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
/*
Base Case: If array.length = 0
- Return holder.
Recursive Case: If array.length != 0
- Push function(callback())
- return rMap(array.slice(1), callback)
*/
var rMap = function(array, callback, holder = []) {
  if (!array.length) {
    return holder;
  }
  holder.push(callback(array[0]));
  return rMap(array.slice(1), callback, holder);
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
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
/*
Base Case: n = 0
- return the last numeber of holder
Recursive Case: 
- return nthFibo(n - 1, holder)
*/
var nthFibo = function(n, holder = [0, 1]) {
  if (n < 0) {
    return null;
  }
  if (n === 0 && holder[holder.length - 2] === 0) {
    return 0;
  }
  if (n === 0) {
    return holder[holder.length - 2];
  } 
  holder.push(holder[holder.length - 2] + holder[holder.length - 1]);
  return nthFibo(n - 1, holder);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
/*
Base Case: If !input.length
- return holder
Recursive Case: 
- holder.push(input[0].toUpperCase())
- Return capitalizeWords(input.slice(1), holder)
*/
var capitalizeWords = function(input, holder = []) {
  if (!input.length) {
    return holder;
  }
  holder.push(input[0].toUpperCase());
  return capitalizeWords(input.slice(1), holder);
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, holder = []) {
  if (!array.length) {
    return holder;
  }
  holder.push(array[0][0].toUpperCase() + array[0].slice(1));
  return capitalizeFirst(array.slice(1), holder);
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
/*
Base Case: If !string
- if !holder.keys().length
- return obj
Recursive Case: If obj[first Letter] exists then add 1 to it. If not, make it and set it to 1
- return letterTally(first element of obj removed)
*/
var letterTally = function(str, obj = {}) {
 if (!str) {
  return obj;
 }
 var fL = str[0];
 if (obj[fL]=== undefined){
  obj[fL] = 1;
 
 }else{
  obj[fL]++;
 }

  return letterTally(str.slice(1),obj)
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
/*


start first value
look at next value
check if values are same



add first item to array
 
check if next item in the array is equal to the last item in holder
if so remove letter 
if not push to holder and remove the letter
return  compress

stop when !list.length

*/

var compress = function(list,holder = []) {

  if(list.length === 0){return holder}
  fV = list[0];
  if(!holder.length){holder.push(fV)}else{

    if(fV !== holder[holder.length-1]){
      holder.push(fV)
    }
  }
  
  return compress(list.slice(1),holder)

};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(list,holder = []) {

   if(list.length === 0){return holder}
  fV = list[0];
  if(!holder.length){holder.push(fV)}else{

    if(!(fV === holder[holder.length-1]&& holder[holder.length-1] === 0)){
      holder.push(fV)
    }
  }
  
  return minimizeZeroes(list.slice(1),holder)

};



/*



var minimizeZeroes = function(list,holder = []) {

   if(list.length === 0){return holder}
  fV = list[0];
  if(!holder.length){
  holder.push(fV)
  
  }else{
lH = holder[holder.length-1];
    if(!(fV === lH && lH === 0)){

      holder.push(fV)
    
    }
  }
  
  return minimizeZeroes(list.slice(1),holder)

};




*/








// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
/*

absolute the first value
if holder = 0 push val
else find if even or odd, if odd mltpy by -1;
push val to holder
return alt sign removing the first value
if  array is empty push holder




*/


var alternateSign = function(list,holder = []) {

   if(list.length === 0){return holder}
  fV = Math.abs(list[0]);
  if(!!holder.length){
  

    if(holder.length%2 !== 0){
fV = fV*-1
      
    }
  }
  
  holder.push(fV)
  return alternateSign(list.slice(1),holder)

};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"

/*
make set of variables
base case: !string.length

grab first char 

check if number replace it with the word from set
return first letter + the rest


*/

var numToText = function(str) {
  var map = ["zero","one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

if(str.length === 0) return str

var fV = str[0];
var rest = str.slice(1);

if(map[fV]!== undefined){
  return map[fV] + numToText(rest);
}else return fV + numToText(rest);

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

// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function (n) {
  let nEx = n;//Creates a variable equal to the input variable
  if (n < 0) {//returns null if the input number is negative
    return null;
  }
  if (n === 0) {//checks if n is 0 and ends the function if it is
    return 1;
  }
  else {
    n = n - 1;//decreases the original variable by 1
  }

  return nEx * factorial(n);//recalls the function in a way that multiplies nEx by itself until n reaches 0
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function (array) {
  let ara = [...array];//creates a new array with the contents of the input array
  if (ara.length === 1) {//returns the sum when the length of ara is condensed down to 1, ending the function
    return ara[0];
  }
  if (ara.length < 1) {//returns 0 when given an empty array
    return 0;
  }
  if (ara.length > 1) {//adds the front 2 numbers of an array, sets the result to the array's second number, and deletes the first number in the array
    ara[1] = ara[0] + ara[1];
    ara.shift();
  }
  return sum(ara);//recalls function to repeat the process
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function (array) {
};

// 4. Check if a number is even.
var isEven = function (n) {
  if (n === 0) {//returns true if the number is even (meaning the number has no remainder when divided by 2) and ends the function
    return true;
  }
  else if (n === -1 || n === 1) {//returns false if the number is odd (meaning the number has a remainder of -1 or 1 when divided by 2) and ends the function
    return false;
  }
  if (n > 0) {//decreases the number by 2 when it is greater than 0 and not 1
    return isEven(n - 2);
  }
  else if (n < 0) {//increases the number by 2 when it is lesser than 0 and not 1
    return isEven(n + 2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function (n) {
  if (n === 0) {//checks if n is 0 and ends the function if it is
    return 0;
  }

  if (n < 0) {//returns null if the input number is negative
    n = n + 1;
  }
  else {
    n = n - 1;//decreases the original variable by 1
  }

  let nEx = n;//Creates a variable equal to the input variable
  return nEx + sumBelow(n);//recalls the function in a way that adds nEx by itself until n reaches 0
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function (x, y, arr = []) {

  if (x === y) { //when x becomes equal to y, the end of the array is chopped off and the function ends
    arr.pop()
    //console.log(arr)
    return arr
  }
  if (x > y) { //decreases x and pushes its value into the new array until x equals y
    x = x - 1
    arr.push(x)
  }
  if (x < y) { //increases x and pushes its value into the new array until x equals y
    x = x + 1
    arr.push(x)
  }

  return range(x, y, arr) //recalls function
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function (base, exp) {
  if (exp === 0) { //returns 1 when given an exponent of 0 (ends function)
    return 1
  }
  if (exp === 1) { //returns base to the recall function in order to create and return the multiplied number (ends function)
    return base
  }

  if (exp > 0) { //recalls function when the exponent is above 0 and not 1, resulting in the base number getting repeatedly multiplied by itself
    return base * exponent(base, exp - 1)
  } else {//recalls function when the exponent is under 0, resulting in the base number getting repeatedly divided by itself
    let bain = base / exponent(base, exp + 1)
    return 1 / bain; //returns 1 divided by the new number to get the correct result
  }
}


// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function (n, x = n, y = 2) {
  //console.log("n: " + n + " x: " + x + " y: " + y)
  if (n === 1) {//returns true if the input is one (a power of two that's less than two)
    return true;
  }
  if (y === n) {//returns true if the input is a power of two
    return true;
  }
  else if (x === 0) {//returns false and ends the function if the input ends up not being a power of two
    return false;
  }
  if (x > 0) { //multiplies y by 2 over and over again until it equals the input or the x counter reaches 0
    y = y * 2
    x--
  }
  return powerOfTwo(n, x, y);//recalls the function
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function (string, x = string.length, gnirts = "") {
  //console.log(gnirts);
  if (x === 0) {//returns the new string and ends the function when x reaches 0
    //console.log(gnirts);
    return gnirts;
  }
  if (x > 0) {//decreases x by 1 and adds the character at position x in the input string to the new string (resulting in the characters being added to the new string in reverse order)
    x--;
    gnirts = gnirts + string[x];
  }
  return reverse(string, x, gnirts);//recalls function
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function (string, x = string.replace(/\s/g, "").length, gnirts = "") {
  //console.log(gnirts);
  //console.log(string.toLowerCase());
  gnirts = gnirts.replace(/\s/g, "").toLowerCase();
  string = string.replace(/\s/g, "").toLowerCase();//These two lines of code gets rid of all of the spaces and un-capitalizes any capital letters in both the input and new strings
  //console.log(gnirts);

  if (x === 0) {//returns an expression resolving to either true or false (based on whether or not the new backwards string equals the input string) after x reaches 0
    //console.log(gnirts);
    //console.log(string);
    return gnirts === string;
  }
  if (x > 0) {//decreases x by 1 and adds the character at position x in the input string to the new string (resulting in the characters being added to the new string in reverse order)
    x--;
    gnirts = gnirts + string[x];
  }
  return palindrome(string, x, gnirts);//recalls function
};
//console.log(palindrome('Rotor'));

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function (x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
//This function adds x to itself over and over again to replicate multiplication
var multiply = function (x, y, holder1 = x, holder2 = y) {

  if (x === 1 || x === -1) {
    return y;
  }
  if (y === 0 || x === 0) {
    return 0;
  }
  if (y === 1 || y === -1) {
    if (holder2 < 0 && holder1 > 0) {

      x = (x - x) - x
      return x

    } else if (holder2 > 0 && holder1 < 0 || holder2 > 0 && holder1 > 0) {
      return x;
    } else if (holder2 < 0 && holder1 < 0) {
      x = (x - x) - x
      return x
    }
  }
  x = x + holder1
  if (y < 0) {
    y++
  } else if (y > 0) {
    y--
  }

  let answer = multiply(x, y, holder1, holder2);
  return answer;
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
var compareStr = function (str1, str2, i = 0) {
  // if(str1.length !== str2.length){
  //   return false
  // }
  if (str1[i] === str2[i]) {//checks if the current character in both strings are identical and moves on to the next one if they are
    i++
    if (str1.length >= str2.length) {//returns true and ends the function when the length of the longer input string becomes less than or equal to the i counter
      if (i >= str1.length) {
        return true;
      }
    }

    if (str1.length < str2.length) {//returns true and ends the function when the length of the longer input string becomes less than or equal to the i counter
      if (i >= str2.length) {
        return true;
      }
    }
    return compareStr(str1, str2, i)//recalls function
  } else {//returns false if and when two characters in the same place in the two input strings don't match up
    return false
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function (str, newArr = [], i = 0) {
  newArr.push(str[i]);//pushes the currently selected letter into the new array
  if (str[i] === str[str.length - 1]) {//returns the new array and ends the function when all letters have been added to the array
    return newArr;
  }
  i++//increases the i counter
  return createArray(str, newArr, i);//recalls function
};

// 17. Reverse the order of an array
var reverseArr = function (array, x = array.length, yarra = []) {
  //console.log(gnirts);
  if (x === 0) {//returns new array and ends function when said new array has finished being created
    //console.log(gnirts);
    return yarra;
  }
  if (x > 0) {//pushes the data from the input array (from back to front) to the new array (from front to back)
    x--;
    yarra.push(array[x]);
  }
  return reverseArr(array, x, yarra);//recalls function
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function (value, length, newArr = []) {
  if (length === 0) {//ends the function and returns the new array when length reaches 0
    return newArr;
  }
  newArr.push(value);//adds another value to the new array
  length--//decreases length by 1
  return buildList(value, length, newArr);//recalls function
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function (array, value, i = 0, count = 0) {
  if (array[i] === value) {//increases the count by 1 when the desired value is found
    count++
  }
  if (i === array.length - 1) {//ends the function and returns count when the entire array has been looked through
    return count;
  }
  i++//increases the i counter by 1
  return countOccurrence(array, value, i, count)//recalls function
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function (array, callback, i = 0, newArr = []) {
  newArr.push(callback(array[i]))//runs each value of the input array through the inputted function and pushes the results into the new array
  if (i === array.length - 1) {//ends the function and returns the new array
    return newArr;
  }
  i++//increases the i counter by 1
  return rMap(array, callback, i, newArr)//recalls function
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
var nthFibo = function (n, newArr = [0, 1], i = 1) {//the new array starts with the first 2 numbers of the Fibo sequence and the i counter starts at 1 as a result
  if (n < 0) {//returns null when the input number is negative
    return null;
  }
  newArr.push(newArr[newArr.length - 1] + newArr[newArr.length - 2])//adds the values of the last two numbers in the array and pushes the result onto the end of said array
  i++//increases i counter by 1
  if (i >= n) {//base case
    return newArr[n];
  }
  return nthFibo(n, newArr, i)//recursive case
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function (input, i = 0) {
  if (i === input.length) {//base case
    return input
  }
  input[i] = input[i].toUpperCase();//runs each word in the input array through the .toUpperCase function, which capitalizes all of the letters in each word
  i++//increases the i counter by 1
  return capitalizeWords(input, i)//recursive case
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function (array, i = 0) {
  if (i === array.length) {//base case
    return array
  }
  let word = array[i];//creates a new variable equal to the first letter in the currently selected word from the input array
//It may be a good idea to rename the word variable to be the letter variable instead, which makes more sense.
  array[i] = word[0].toUpperCase() + word.substring(1);//capitalizes the word variable, removes the first letter from the currently selected word, and adds the capitalized letter (word variable) to the front of the word
  i++//increases the i counter by 1
  return capitalizeFirst(array, i)//recursive case
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
var letterTally = function (str, obj = {}, i = 0) {
  if (i === str.length) {//base case
    return obj;
  }
  if (!obj[str[i]]) {//creates a counter key-value pair for the currently-selected character if one doesn't already exist in the object
    obj[str[i]] = 1
  } else {//adds 1 to the counter when another instance of a character is found
    obj[str[i]]++
  }
  i++//increases the i counter by 1
  return letterTally(str, obj, i)//recursive case
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function (list, i = 0, obj = {}) {
  if (i === list.length) {//base case
    return list
  }
  if (!obj[list[i]]) {//creates a counter key-value pair for the currently-selected character if one doesn't already exist in the object
    obj[list[i]] = 1
    i++//increases the i counter by 1
  } else if (list[i] !== list[i - 1]) {//adds 1 to the counter when another instance of a character is found and said instance isn't one that came right after another instance of the same character
    obj[list[i]]++
    i++//increases the i counter by 1
  }
  else {//removes the character when it is determined to be a consecutive duplicate
    obj[list[i]]++
    list.splice(i, 1);
  }
  return compress(list, i, obj)//recursive case
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function (array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function (array, i = 0, obj = {}) {
  if (i === array.length) {//base case
    return array
  }
  if (!obj[array[i]] && array[i] === 0) {//creates a counter for 0 if one doesn't exist already
    obj[array[i]] = 1
    i++
  }
  else if (array[i] === 0 && array[i - 1] === 0) {//removes the 0 from the array if it occurs right after another 0
    obj[array[i]]++//adds 1 to the 0 counter
    array.splice(i, 1);
  } else {
    i++//increases the i counter by 1
  }
  return minimizeZeroes(array, i, obj)//recursive case
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function (array, i = 0) {
  if (i === array.length) {//base case
    return array
  }

  if (i === 0 && array[i] < 0) {//forces the first number in the array to be positive
    array[i] = array[i] * -1
  } else if (array[i - 1] < 0 && array[i] < 0) {//compares the current number and the one that came before it and changes the sign of the second value if the values are both negative
    array[i] = array[i] * -1
  } else if (array[i - 1] > 0 && array[i] > 0) {//compares the current number and the one that came before it and changes the sign of the second value if the values are both positive
    array[i] = array[i] * -1
  }
  i++//increases the i counter by 1
  return alternateSign(array, i)//recursive case
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function (str, i = 0) {
  if (i === str.length) {//base case
    return str
  }
  str = str.replace(1, 'one')//each of these replaces any instance of a number in the string with their letter-based counterpart
  str = str.replace(2, 'two')//recursion isn't really needed as these check the whole string at once, but trying to check the string one word at a time proved to be problematic.
  str = str.replace(3, 'three')//though this can probably be improved with code that checks if the currently selected character is a number and then runs the replace code on the whole string for the number and replaces said number with the corresponding string from an array
  str = str.replace(4, 'four')
  str = str.replace(5, 'five')
  str = str.replace(6, 'six')
  str = str.replace(7, 'seven')
  str = str.replace(8, 'eight')
  str = str.replace(9, 'nine')
  str = str.replace(0, 'zero')

  if (i < str.length) {
    i++//increases the i counter by 1
    return numToText(str, i)//recursive case
  }
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

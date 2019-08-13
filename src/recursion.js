// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120

var factorial = (n) => {
  if (n < 0) {return null}
  if (n === 0) {return 1}
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21

var sum = (array, result = 0, i = 0) => {
  if (array.length === i) {return result}
  return sum(array, result += array[i], ++i);
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15

var arraySum = (array, sum = 0, i = 0) => { 
  if (array.length === i) {return sum}
  if (Array.isArray(array[i])) {
    sum = arraySum(array[i], sum);
    ++i
  } else {
    sum += array[i];
    ++i
  }
  return arraySum(array, sum, i);
};

// 4. Check if a number is even.

var isEven = (n) => {
  if (n === 1) {return false}
  if (n === 0) {return true}
  if (n < 0) {return isEven(n + 2)}
  else if (n > 0) {return isEven(n - 2)}
  return null;
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21

var sumBelow = (n, sum = 0, i = 0) => {
  if (n === i) {return sum}
  if (n < 0) {
    return sumBelow(n, sum += i, --i);
  } else if (n > 0) {
    return sumBelow(n, sum += i, ++i);
  }
  return null; 
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]

var range = (x, y, i = x, rangeArray = []) => {
  if (x === y || x - y === 1 || x - y === -1) {
    return [];
  }
  if (i === y - 1 || i === y + 1) {
    return rangeArray; 
  }
  if (x < y) {
    return range(x, y, ++i, rangeArray.concat(i));    
  } else {
    return range(x, y, --i, rangeArray.concat(i));
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number

var exponent = (base, exp, i = 1, result = base) => {
  if (i === exp) {
      return result;
  }
  if (exp === 0) {
      return 1; 
  }
  if (exp < 0) {
    return exponent(base, exp, --i, result / base);
  }
  return exponent(base, exp, ++i, result * base);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false

var powerOfTwo = (n, i = 1) => {
  if (i === n) {
    return true;
  }
  if (i > n) {
    return false; 
  }
  if (n < 1) {
    return false;
  }
  return powerOfTwo(n, i * 2);
};

// 9. Write a function that accepts a string a reverses it.

var reverse = (string, i = string.length, reversedString = '') => {
  if (i === 0) {
    return reversedString; 
  }
  return reverse(string, --i, reversedString + string[i]);
};

// 10. Write a function that determines if a string is a palindrome.

var palindrome = (string, reversedString = reverse(string), i = 0) => {
  string = string.split(' ').join('').toLowerCase();
  reversedString = reversedString.split(' ').join('').toLowerCase(); 
  if (i === string.length) {
    return true;
  } else if (string[i] !== reversedString[i]) {
    return false;
  }
  return palindrome(string, reversedString, ++i);
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4

var modulo = (x, y, runningTotal = y) => {
  if (y === 0) {
    return NaN;
  }
  if (x === 0) {
    return 0;
  }
  if (x > 0) {
    if (y > x) {
      return x; 
    }
    if (y > 0) {
      if (runningTotal + y > x) {
        return x - runningTotal;
      }
      if (runningTotal + y === x) {
        return 0;
      }
      return modulo(x, y, runningTotal + y);
    }
    if (y < 0) {
      if (runningTotal - y > x) {
        return x - runningTotal;
      }
      if (runningTotal - y === x) {
        return 0;
      }
      return modulo(x, y, runningTotal - y)
    }
  }  
  if (x < 0) {
    if (y > 0) {
      if (runningTotal - y < x) {
        return x + runningTotal;
      }
      if (runningTotal - y === x) {
        return 0;
      }
      return modulo(x, y, runningTotal - y);
    }
    if (y < 0) {
      if (y < x) {
        return x; 
      }
      if (runningTotal + y < x) {
        return x - runningTotal;
      }
      if (runningTotal + y === x) {
        return 0;
      }
      return modulo(x, y, runningTotal + y)
    }
  }
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = (x, y, i = 0, product = 0) => {
  if (i === y) {
    return product; 
  }
  if (x < 0 && y < 0) {
    return multiply(x, y, --i, product - x);
  } 
  if (y > 0) {
    return multiply(x, y, ++i, product + x);
  } else {
    return multiply(x, y, --i, product + x);
  }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.

var divide = (x, y, c = 0, c2 = y) => {
  if (y === 1) return x;
  if (y === 0) return NaN;
  if (x === 0) return 0;
  if (y < 0) {
    if (x < 0) {
      if (c2 < x) return c;
      return divide(x, y, ++c, c2+y);
    } else {
      if (c2 >= x) return c;
      return divide(x, y, --c, c2-y);
    }    
  } else {
    if (x < 0) {
      if (c2 >= x) return c;
      return divide(x, y, --c, c2-y);     
    } else {
      if (c2 > x) return c;
      return divide(x, y, ++c, c2+y); 
    }
  }  
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm

var gcd = (x, y, c = 0, result = 0) => {
  if (x < 0 || y < 0) {return null}
  if (c > x || c > y) {return result}
  if (x % c === 0 && y % c === 0) {result = c}
  return gcd(x, y, ++c, result);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true

var compareStr = (str1, str2, i = 0, s1 = str1[i], s2 = str2[i]) => {
  if (str1.length === 0 && str2.length === 0) return true;
  else if (s1 !== s2) return false;
  else if (i + 1 > str1.length && i + 1 > str2.length) return true;
  else return compareStr(str1, str2, ++i, str1[i], str2[i]);
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.

var createArray = (str, newArr = [], i = 0, strArr = str.split('')) => {
  if (!str) return [];
  if (newArr.length === str.length) return newArr;
  else return createArray(str, newArr.concat(strArr[i]), ++i, strArr);
};

// 17. Reverse the order of an array

var reverseArr = (array, newArr = [], i = array.length -1) => {
  if (newArr.length === array.length) return newArr;
  else {return reverseArr(array, newArr.concat(array[i]), --i)}
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]

var buildList = (value, length, newArr = []) => {
  if (newArr.length === length) return newArr;
  else {
    newArr.push(value);
    return buildList(value, length, newArr);
  }
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2

var countOccurrence = (array, value, count = 0, i = 0) => {
  if (i === array.length) return count;
  else {
    if (array[i] === value) count++;
    return countOccurrence(array, value, count, ++i);
  }
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]

var rMap = (array, callback, newArr = [], i = 0) => {
  if (newArr.length === array.length) return newArr;
  else return rMap(array, callback, newArr.concat(callback(array[i], i, array)), ++i);
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2

var countKeysInObj = (obj, key, keysArray = Object.keys(obj), i = 0, count = 0) => {
  if (i === keysArray.length) {return count}
  else if (typeof obj[keysArray[i]] === 'object') {count += countKeysInObj(obj[keysArray[i]], key)}
  if (keysArray[i] === key) count++;
  return countKeysInObj(obj, key, keysArray, ++i, count);
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = (obj, value, keysArray = Object.keys(obj), i = 0, count = 0) => {
  if (keysArray.length === i) {return count}
  if (typeof obj[keysArray[i]] === 'object') {count += countValuesInObj(obj[keysArray[i]], value)}
  else if (obj[keysArray[i]] === value) {++count} 
  return countValuesInObj(obj, value, keysArray, ++i, count);
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.

var replaceKeysInObj = (obj, key, newKey, i = 0, keysArray = Object.keys(obj)) => {
  if (i === keysArray.length) {return obj}
  else if (typeof obj[keysArray[i]] === 'object') {replaceKeysInObj(obj[keysArray[i]], key, newKey)}
  if (key === keysArray[i]) {obj[newKey] = obj[key]; delete obj[key]}
  return replaceKeysInObj(obj, key, newKey, ++i, keysArray);
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.

var fibonacci = (n, res = [0], i = 0, sum = 1, newSum = 0) => {
  if (n < 1) return null;
  if (i === n) return res;
  else return fibonacci(n, res.concat(sum + newSum), ++i, sum + newSum, res[res.length - 1]);
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2

var nthFibo = (n, res = [], i = 2) => {
  if (n < 0) {return null}
  if(n === 0){return 0;}
  if(n === 1){return 1;}
  if (res.length === 0) {res.push(0)}
  if (res.length === 1) {res.push(1)}    
  let num1 = i - 1;
  let num2 = i - 2;
  if (i === n) {return res[num1] + res[num2]}
  return nthFibo(n, res.concat(res[num1] + res[num2]), ++i);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

var capitalizeWords = (input, newArr = [], i = 0) => {
  if (newArr.length === input.length) return newArr;
  else {
    newArr.push(input[i].toUpperCase());
    return capitalizeWords(input, newArr, ++i);
  }
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']

var capitalizeFirst = (array, newArr = [], i = 0) => {
  if (array.length === newArr.length) return newArr;
  else {
    newArr.push(`${array[i][0].toUpperCase()}${array[i].slice(1)}`);
    return capitalizeFirst(array, newArr, ++i);
  }
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

var nestedEvenSum = (obj, keysArray = Object.keys(obj), sum = 0, i = 0) => {
  if (i === keysArray.length) {return sum}
  else if (typeof obj[keysArray[i]] === 'object') {sum += nestedEvenSum(obj[keysArray[i]])}
  if (obj[keysArray[i]] % 2 === 0) {sum += obj[keysArray[i]]}
  return nestedEvenSum(obj, keysArray, sum, ++i);
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]

var flatten = (arrays, newArr = [], i = 0) => {
  if (i === arrays.length) {return newArr}
  else if (Array.isArray(arrays[i])) {newArr = newArr.concat(flatten(arrays[i]))}
  else {newArr.push(arrays[i])}
  return flatten(arrays, newArr, ++i);
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}

var letterTally = (str, obj = {}, i = 0) => {
  if (str.length === i) return obj;
  else {
    let key = str[i];
    obj[key] = ++obj[key] || 1;
    console.log(obj);
    return letterTally(str, obj, ++i);
  }
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]

var compress = (array, newArr = [], i = 0) => {
  if (array.length === i) return newArr;
  else {
    if (i === 0) {newArr.push(array[i])}
    else if(i === array.length - 1) {
      if (array[i - 1] !== newArr[newArr.length - 1]) {
        newArr.push(array(i));
      }
    } 
    else if (!(array[i] === newArr[newArr.length - 1])) newArr.push(array[i]);
    return compress(array, newArr, ++i);
  }
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]

var augmentElements = (array, aug, augArr = [], i = 0) => {
  if (i === array.length) {return augArr}
  else if(Array.isArray(array[i])) {augArr.push(array[i].concat(aug))}
  return augmentElements(array, aug, augArr, ++i);
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]

var minimizeZeroes = (array, newArr = [], i = 0) => {
  if (array.length === i) return newArr;
  else {
    if (array[i] === 0 && newArr[newArr.length - 1]) newArr.push(array[i]);
    else if (array[i] !== 0) newArr.push(array[i]);
    return minimizeZeroes(array, newArr, ++i);
  }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = (array, newArr = [], i = 0) => {
  if (array.length === newArr.length) return newArr; 
  else {
    if (i % 2 !== 0 && array[i] > 0) newArr.push(array[i] * -1);
    else if (i % 2 === 0 && array[i] < 0) newArr.push(array[i] * -1);
    else newArr.push(array[i]);
    return alternateSign(array, newArr, ++i);
  }
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"

var numToText = (str, newArr = str.split(''), i = 0) => {
  if (str.length === i) return newArr.join('');
  else {
    if (newArr[i] === 0) newArr[i] = 'zero';
    else if (newArr[i] === '1') newArr[i] = 'one';
    else if (newArr[i] === '2') newArr[i] = 'two';
    else if (newArr[i] === '3') newArr[i] = 'three';
    else if (newArr[i] === '4') newArr[i] = 'four';
    else if (newArr[i] === '5') newArr[i] = 'five';
    else if (newArr[i] === '6') newArr[i] = 'six';
    else if (newArr[i] === '7') newArr[i] = 'seven';
    else if (newArr[i] === '8') newArr[i] = 'eight';
    else if (newArr[i] === '9') newArr[i] = 'nine';
    return numToText(str, newArr, ++i);
  }
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.

var tagCount = (tag, elements = [], i = 0) => {
  if (i === document.getElementsByTagName(tag).length) {
    return elements.length; 
  }
  return tagCount(tag, elements.concat(document.getElementsByTagName(tag)[i]), ++i); 
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = (array, target, i = 0) => {
  if (array[i] === target) {
    return i;
  }
  if (array.length === i) {
    return null;
  }
  return binarySearch(array, target, ++i);
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]

var mergeSort = (array, sortedArray = [], i = 0, low = Infinity) => {
  if (array.length === i) {
    return sortedArray; 
  }
  for (let num of array) {
    if (num < low && !(sortedArray.includes(num))) {
      low = num;
    }
  }  
  return mergeSort(array, sortedArray.concat(low), ++i);
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

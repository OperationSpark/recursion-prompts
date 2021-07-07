// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
    if (n < 0 ) { return null }
    if (n < 1) { return 1 }
    else { return n * factorial(n - 1) }
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
    if (!array.length) { return 0 }
    return array[0] + sum(array.slice(1)); 

};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array, sum = 0) {  // if array.length = 1, return array[0]
    var sum = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] === Math.round(array[i])) { 
            sum += array[i];
        }  
        if (array[i] instanceof Array) {
            sum += arraySum(array[i]); //This will apply the same function to the current Array element which is an Array
        }
    }
    return sum;
};

// 4. Check if a number is even.
var isEven = function(n) {
    if (n === 0)  {
        return true;
    } else if (n === 1) {
        return false;
    } else if (n < 0) {
        return isEven(-n);
    } else {
        return isEven(n - 2);
    }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21

var sumBelow = function(n) {
    var x = n - 2;
    var y = n - 1;
    var z = n + 1;
    
      if (n == 0) { return n } // returns 0 when given n is 0
      
      else if (n < 0 ) { return z + sumBelow(n + 1) }
      
      else if (x < 1) { return y }  // handles n = 1 case and returns 0
  
      else if (n > 1 && x > -1) { return y + sumBelow(n - 1) } // sums n - 1 with recursion of n - 1
  };

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {  // return an array of nums bt x & y (exclusive of x & y)
  if (x === y || (x - y) === 1 || y -x === 1) {   //base case, if there are no numbers bt x & y
    return [];                                
  } else if (x < y && y - x === 2) {  
    return [x + 1];
  } else if (x > y && x - y === 2) {
    return [y + 1]
  } else if (x > y) {
    var rangeArr = range(x - 1, y);
    rangeArr.unshift(x - 1);
    return rangeArr;
  } else if (x < y) {
    var rangeArr = range(x, y - 1);
    rangeArr.push(y - 1);
    return rangeArr;
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
    if (exp === 0) {    // base test is when exponent = 0
        return 1        // return 1
    }  else if (exp > 0) {
        return base * exponent(base, exp - 1)   
    }   else if (exp < 0) {
        return 1 / exponent(base, -exp);
    }  
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
    if (n === 2 || n === 1) { return true }     // base case true
    if (n === 0 || n === 3) { return false }    // base case false
    if (n < 0) { return powerOfTwo(-n) }        // case neg recurses w abs val
    if (n < 2) {return false}                   // case if n b/t 0 & 2 = false
    else {return powerOfTwo(n / 2)}             // else recurses to divide n by 2

};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string, revStr = "", ind = string.length -1 ) {
    if (ind < 0) { return revStr }  // base case
    revStr += string[ind] ;         // adds last letter of string to revStr
    return reverse(string, revStr,--ind);   // returns recursive call 
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
    string = string.toLowerCase().replace(' ', '');
    if(string.length < 2) {
        return true;
    } else if (string[0] !== string [string.length -1]){
        return false;
    }  
    return palindrome(string.substr(1, string.length -2));
    // a palindrome is a word that is the same word spelled backwards as forward
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
    if (y === 0 ) { return NaN };
    if (x < 0) { return -modulo(-x, y) }
    if (y < 0) { return modulo(x, -y) }
    if (x < y) { return x}
    return modulo(x-y, y)
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function(x, y) {
    var product = x;
    if (y == 0) return 0;
    else if (y >= 1) {
        return product + multiply(product, --y);
    }
    else if (y <= -1) {
        return -product + multiply(product, ++y);
    }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
    var posx = x - x < x ? x : (x - x) - x;
    if (y === 0) { return NaN }
    else if (y === 1) { return x }
    else if (x === 0 || (posx < y)) { return 0 }
    else if (x < 0 && y < 0) { return divide(-x, -y) }
    else if (x > 0 && y > 0) { return divide(x - y, y) + 1 }
    else if ((x < 0 && y > 0) || (x > 0 && y < 0)) { return divide(x + y, y) - 1 }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
    if (x === y) { return x }
    else if (x < 0 || y < 0) { return null }
    else if (x > y) { return gcd(x - y, y) }
    else { return gcd(x, y - x) }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
    if (str1.length <= 1 || str2.length <= 1) {
        if (str1.length !== str2.length) { return false }
        else { return (str1[0] === str2[0]) }
	} else { return compareStr(str1.slice(1), str2.slice(1)) }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
    if (str.length === 0) { return [] }
     else {
	return createArray(str.slice(0, str.length-1)).concat(str[str.length-1])
	}
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
    if (array.length <= 1) { return array }
    else if (array.length === 2) {
		return [array[1], array[0]]
	} else {
		return reverseArr(array.slice(1)).concat([array[0]])
	}
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
    if (length === 0) { return [] }
    else { return buildList(value, length-1).concat([value]) }
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, count=0) {
    if (array.length === 0 ) {
        return count; 
    } if (array[0] === value) {
        count += 1;
    }
    return countOccurrence(array.slice(1), value, count);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, newArr = []) {
    if (array.length === 0) {
        return newArr;
    }
    newArr.push(callback(array[0]))
    
    return rMap(array.slice(1), callback, newArr);
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key, keyCount = 0) { // use Object.keys
    var allKeys = Object.keys(obj);  // get them keys!!!
	if (allKeys.length === 1) { // 
		return +(allKeys[0] === key); // 
	} else {
		for (var k in obj) {  // iterate over obj to count keys matching given
			keyCount += +(k === key) + countKeysInObj(obj[k], key)
		}
		return keyCount;
	}

};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
    var allKeys = Object.keys(obj);  // grabs all keys (including nested objs)
	if (allKeys.length === 1 && typeof obj[allKeys[0]] !== 'object') {
		return +(obj[allKeys[0]] === value)
	} else {
		var subTotal = 0;
		for (var k in obj) {
			subTotal += countValuesInObj(obj[k], value)
		}
		return subTotal;
	}
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
    var themKeys = Object.keys(obj);
	if (themKeys.length === 1 && typeof obj[themKeys[0]] !== 'object') {
		if (themKeys[0] === key) {
			obj[newKey] = obj[key];
			delete obj[key];
		}
	} else { 
		for (var k in obj) {
		    replaceKeysInObj(obj[k], key, newKey);
			if (k === key) {
				obj[newKey] = obj[key];
				delete obj[key];
			}
		}
	}
	return obj
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
    if (n < 1) { return null; }
	if (n === 1) { return [0, 1]; }
	var prevFib = fibonacci(n-1);
	var prevLen = prevFib.length;
	return prevFib.concat(prevFib[prevLen - 1] + prevFib[prevLen - 2]);
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
    if (n < 0) { return null } // we got base!
	if (n === 0) { return 0 }
	if (n === 1) { return 1 }
	return nthFibo(n - 1) + nthFibo(n - 2) // recurse, adding 2 nums prev to n
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
    if (input.length === 0) { return input }
	return [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)));
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
    if (array.length === 0) { return array } // base case, empty array
	var newWord = array[0][0].toUpperCase() + array[0].slice(1); // cap the init ltr
	return [newWord].concat(capitalizeFirst(array.slice(1))); // recurse, adding new Word to array
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
    var total = 0;
	for (key in obj) {
		if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
			total += obj[key]; 
		} else if (typeof obj[key] === 'object') {
			total += nestedEvenSum(obj[key]);
		}
	}
	return total;
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
    if (arrays.length === 0) { return arrays; }
	if (!Array.isArray(arrays[0])) {
		return [arrays[0]].concat(flatten(arrays.slice(1)));
	} else {
		return flatten(arrays[0]).concat(flatten(arrays.slice(1)));
	}
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
    var obj = obj || {};
	if (str === '') { return obj }
	    obj[str[0]] = obj[str[0]] + 1 || 1;
    return letterTally(str.slice(1), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
    if (list.length < 2) { return list }
	if (list[0] === list[1]) { return compress(list.slice(1)) }
	return [list[0]].concat(compress(list.slice(1)))
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
    var aug0 = array[0].concat(aug);
	if (array.length === 1) { return [aug0]; }
	return [aug0].concat(augmentElements(array.slice(1), aug));
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
    if (array.length < 2) { return array }
	if (array[0] + array[1] === 0) { return minimizeZeroes(array.slice(1)) }
	return [array[0]].concat(minimizeZeroes(array.slice(1)))
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
    if (array.length === 0) { return array }
	if (array.length === 1) { return [Math.abs(array[0])] }
	var new2 = [Math.abs(array[0]), -1 * Math.abs(array[1])]
	return new2.concat(alternateSign(array.slice(2)))
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
    var trans = {
		'1': 'one', '2': 'two', '3': 'three', '4': 'four',
		'5': 'five', '6': 'six', '7': 'seven', '8': 'eight',
		'9': 'nine', '0': 'zero'
	}
	if (str.length === 0) { return str }
	if (trans[str[0]] !== undefined) {
		return trans[str[0]].concat(numToText(str.slice(1)))
	} else { return str[0].concat(numToText(str.slice(1))) }
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
    var tagTotal = 0;
	var node = node || document.body;
	if (node.nodeType != Node.TEXT_NODE) {
		if (node.tagName === tag.toUpperCase()) { tagTotal++; }
	}
	if (node.hasChildNodes()) {
		node.childNodes.forEach(child => tagTotal += tagCount(tag, child));
	}
	return tagTotal;
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'
// FD: A Binary search will return index of nth element in array. So slice it like a phone book

var binarySearch = function(array, target, min, max) {
  var max = array.length;
  if (target < array[0] || target > array[max - 1]) { return null } // base if target not found
    var mid = Math.floor(max / 2); // determines mid-point and rounds down
  if (array[mid] === target) { return mid }
  if (max <= 1) { return null }
  if (array[mid] < target) { 
  	var recurseResult = binarySearch(array.slice(mid), target);
  	return recurseResult === null ? null : mid + recurseResult;
  } else {
  	return binarySearch(array.slice(0, mid), target);
  }
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
    if (array.length < 2) { return array }   // base: if 1 element remains, nothing to sort, so return the array
      // review pseudo code tree structure
      // mid, subArrLeft & subArr Right
      var midInd = Math.floor(array.length / 2);  // split the array: middle index
      var subArrLeft = mergeSort(array.slice(0, midInd));
      var subArrRight = mergeSort(array.slice(midInd));  
      return merge(subArrLeft, subArrRight);
}
  
  function merge (leftArr, rightArr) {  // had to build merge func...couldn't figure out how otherwise
      var result = [];
      while (leftArr.length > 0 && rightArr.length > 0) // hate whiles but this works
          result.push(leftArr[0] < rightArr[0]? leftArr.shift() : rightArr.shift()); //reorders and rebuilds from both sides (push & shift)
      return result.concat(leftArr.length? leftArr : rightArr); //concats the Arr w/ a length
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

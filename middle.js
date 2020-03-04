const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      } else {
        return true;
      }
    }
  }
};

// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(array1, array2) {
  //compare the actual and expected values
  if (array1.length !== array2.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
      } else {
        console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
      }
    }
  }
};

const middle = function (arr) {
  
  let answer = [];
  
  if ( arr.length === 0 || arr.length === 1 || arr.length === 2) {
    return answer;
  } else if (arr.length % 2 !== 0) {
    answer.push(arr[Math.floor(arr.length / 2)]);
    return answer;
  } else if (arr.length % 2 === 0) {
    answer.push(arr[arr.length / 2] - 1);
    answer.push(arr[arr.length / 2]);
    return answer;
  }
  return answer;
};

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
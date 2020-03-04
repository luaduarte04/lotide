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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i) !== " ") {
      if (results[sentence.charAt(i)]) {
        results[sentence.charAt(i)].push(i) ;
      } else {
        results[sentence.charAt(i)] = [i];
      }
    } 
  }
  return results;
};

const mySentece = "lighthouse in the house";
const letterPositionsResult = letterPositions(mySentece);

assertArraysEqual(letterPositions(mySentece).l, [0]);
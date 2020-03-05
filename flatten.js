const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      console.log(arr1[i], arr2[i])
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(array1, array2) {
  //compare the actual and expected values
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const flatten = function (arrayOfArrays) {
  let flattenArray = [];
  for ( let i = 0; i < arrayOfArrays.length; i++) {
    if (Array.isArray(arrayOfArrays[i])) {
      flattenArray = flattenArray.concat(flatten(arrayOfArrays[i]));
    } else {
      flattenArray.push(arrayOfArrays[i]);
    }
  }
  //console.log(flattenArray);
  return flattenArray;
}


flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, [3, 4], 5, [6]]));

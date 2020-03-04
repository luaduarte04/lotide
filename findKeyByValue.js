// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  //compare the actual and expected values
  if (actual === expected) {
    //if they match, show in console assertion passed....
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    //if they dont match, show in console assertion failed
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (object, value) {
  let firstMatchingKey = "";
  for (let key in object) {
    if (object[key] === value) {
      firstMatchingKey = key;
    } else {
      firstMatchingKey = undefined;
    }
  }
  //console.log(firstMatchingKey);
  return firstMatchingKey;
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  //compare the actual and expected values
  if (actual === expected) {
    //if they match, show in console assertion passed....
    console.log(`✅✅✅ Assertion Failed: ${actual} === ${expected}`);
  } else {
    //if they dont match, show in console assertion failed
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  return array[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
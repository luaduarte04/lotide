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

const countLetters = function (takeString) {
  finalCount = {};
  for (let count of takeString) {
    if(finalCount[count]) {
      finalCount[count] += 1;
    } else {
      finalCount[count] = 1;
    }
  }
  console.log(finalCount);
};

const mySentece = "lulu baba nana caca";
const countLettersResult = countLetters(mySentece);
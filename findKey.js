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

// scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

const findKey = function (object, callback) {
  for (let key in object) {
    //console.log(object[key].stars)
    if (callback(object[key])) {
      return key;
    } 
  }
  return undefined;
};

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2));

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");
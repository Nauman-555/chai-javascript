// const abc = "";      // false value
// const abc = []; //  true value
// if (abc) {
//   console.log("we have answer");
// } else {
//   console.log("we don't have answer");
// }

// ++++++++++++++++++
// ++++++++++++++++++
// ++++++++++++++++++

// Falsy Values
//  0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values
// "0", "false", " ", [], {}, function(){}

// Find the length of empty array
const abc = [];
if (abc.length === 0) {
  //   console.log("Maryam Nawaz");
} else {
  //   console.log("Nawaz Shareef");
}

// Find the length of empty object
const object = {};
if (Object.keys(object).length === 0) {
  // Object.keys(objectname)>>>this gives us array and from array we can find the length of it
  console.log("Hamza Shahbaz");
} else {
  console.log("Shahbaz Shareef");
}

// For each doesn't return the value

// ********** Filter **********//
// def:

// The filter method creates a new array with all elements that pass the test implemented
//  by the provided function. It selects elements based on a condition and returns a new
//   array with the elements that meet the condition.

// This deficiency of foreach is overcome by Filter
// Filter also gets call back, takes a function and *returns value*
// Remember if you write scope, you must have to use keyword return
// However if you are using implicit function, you don't need to write return keyword
// it does itself

const Programming = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const num = Programming.filter((item) => item > 4);
const num = Programming.filter((item) => {
  return item > 4;
});
// console.log(num);

// Further functions of filter

const books = [
  {
    name: "To Kill a Mockingbird",
    genre: "Fiction",
    publishYear: 1960,
    edition: "1st",
  },
  {
    name: "1984",
    genre: "Dystopian",
    publishYear: 1949,
    edition: "1st",
  },
  {
    name: "The Great Gatsby",
    genre: "Classic",
    publishYear: 1925,
    edition: "1st",
  },
  {
    name: "The Catcher in the Rye",
    genre: "Fiction",
    publishYear: 1951,
    edition: "1st",
  },
];

let bookdata = books.filter((bk) => bk.genre == "Fiction");
bookdata = books.filter((bk) => {
  return bk.publishYear >= 1950;
});

bookdata = books.filter((bk) => bk.genre == "Fiction" && bk.edition == "1st");
// console.log(bookdata);

// +++++++
// +++++++
// +++++++
// +++++++

// *********  Map  *********
// def:

// The map method is used to create a new array by applying a function to each
//  element of the original array. It transforms the elements and returns a new array
//   of the same length.

// It automatically returns value in implicit func just like filter

// diff between map and filter

// map is used for transforming elements of an array.
// filter is used for selecting elements based on a condition.

const xyz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let abc = xyz.filter((item) => item > 4);
// console.log(abc);

// Chaning in methods
abc = xyz
  .map((item) => item * 10)
  .map((item) => item + 1)
  .filter((item) => item > 60);
// console.log(abc);

// Map array ko change kr deta ha or new array return krta ha
// Filter array main conditions ko check kr k oss k mutabiq updated array ko return krta ha

// +++++++
// +++++++
// +++++++

// *******  Reduce  *******

// def:
// The reduce method in JavaScript is used to execute a reducer function on each element
//  of the array, resulting in a single output value. This method is versatile and can be
//  used for tasks such as summing up elements, calculating averages, flattening arrays,
//  and more.

const red = [1, 2, 3, 4, 5];
let ans = red.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(ans);

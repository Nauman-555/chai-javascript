// const myArray = ["muhammad", "nauman", "zaib"];
// console.log(myArray.length);
// Array indices start at 0, but the length of an array represents the total number of
// elements it contains. In your array, there are 3 elements: "muhammad", "nauman", and
// "zaib". Therefore, the length is 3. Indices range from 0 to 2, but the count of
//  elements is 3.
// for (let index = 0; index < myArray.length; index++) {
//   const element = myArray[index];
//   console.log(element);
// }

// +++++++++++
// Break & Continue in loops
// Break immediately stops the execution as in switch
// continue just skip one value upon which condition applies and thus continue ahead

// for (let index = 0; index < 20; index++) {
//   if (index == 5) {
// console.log("value is 5");
// break;
// continue;
//   }
//   console.log(index);
// }

// +++++ while & do while loop
// const yourArray = ["muhammad", "nauman", "zaib"];
// let arr = 0;
// while (arr < yourArray.length) {
//   console.log(`Value is ${yourArray[arr]}`);
//   arr++;
// }

// const yourArray = ["muhammad", "nauman", "zaib"];
// let arr = 0;
// do {
//   console.log(`Value is ${yourArray[arr]}`);
//   arr++;
// } while (arr < yourArray.length);

// ++++++++++++++++++
// ++++++++++++++++++
// ++++++++++++++++++
// ++++++++++++++++++
// ++++++++++++++++++

// Higher order loops

// for of loop

// for arrays

// const abc = [1, 2, 3, 4, 5];
// for (const num of abc) {
//   console.log(num);
// }

// for strings

// const xyz = "Nauman Zaib";
// for (const letter of xyz) {
//   console.log(letter);
// }

// Using map and for off in map
// const map = new Map();
// map.set("Pak", "Pakistan");
// map.set("NZ", "Newzeland");
// map.set("Zim", "Zimbabwe");
// console.log(map);

// for (const [key, value] of map) {
//   console.log(key, ">:", value);
// }

//map is iterable in for off but object is not iterable

// ++++++++++
// for in loop
// for in overcomes the problem of iteration of object

const obj = {
  js: "Javascript",
  cpp: "c++",
  db: "database",
  ms: "microsoft",
};
for (const key in obj) {
  //   console.log(`${key} is value for ${obj[key]}`);
}

const arr = ["abc", "def", "ghi"];
for (const key in arr) {
  //   console.log(`${key} is value for ${arr[key]}`);
}

// +++++++++++++
// diff between for of and for in is that in for of key directly gives the value, however
// in for in we have to grab value by putting the syntax obj/arr[key]

// Point to Ponder
// we can't use for in on map

// +++++++++++++
// +++++++++++++
// +++++++++++++
// For Each Loop

// def:

// The forEach loop is a method in JavaScript that allows you to iterate over an array
// and perform an operation on each element of the array. It takes a callback function
//  as an argument and applies it to each element of the array.

// usually we declare function as function name(params) {}, but here in for each it does
// not use the name of function so remove that , also it directly gets the value
// as it is inside array

// we can use whatever function in our foreach but here we'r using arrow function
const cba = ["javascript", "Node js", "Django", "Mongodb"];
cba.forEach((element) => {
  // cba.forEach((element, index, cba) => {
  console.log(element);
  //   console.log(element, index, cba);
});

// Accessing items from objects present in array using foreach loop
const Array = [
  {
    name: "Muhammad",
    email: "abc@gmail.com",
  },
  {
    name: "Nauman",
    email: "abc@gmail.com",
  },
  {
    name: "Zaib",
    email: "abc@gmail.com",
  },
];
Array.forEach((item) => {
  console.log(item.name);
});

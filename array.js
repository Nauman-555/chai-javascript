// const myArr = ["bebo", "awais", "bido"];
// const myArr2 = ["ab", "khan", "baba"];

// it updates the original array ,also it addes the new array as single element, now after
// the push total are four elements, 3 are from original array and one whole array that
//  acts as one element after being pushed
// myArr.push(myArr2);
// console.log(myArr);

// concat
// however when we do concat, it does not update the old array, however it gives the new updated array
// so rather this below
// myArr.concat(myArr2);
// console.log(myArr);
// we use this below
// const myArr3 = myArr.concat(myArr2);
// console.log(myArr3);
// also it does not add the new array as a single element rather
// it adds all the elements of new array as a single entries

// Spread Operator(...)
// const myArr3 = [...myArr, ...myArr2];
// console.log(myArr3);

// flat
// const array = [1, 2, 3, [4, 5, [6, 7]]];
// const new_array = array.flat(Infinity);
// console.log(new_array);
// output:>>
//  [ 1, 2, 3, 4, 5, 6, 7]

// isArray , from
// check for the array
// console.log(Array.isArray("NAUMAN"));
// making the array
// console.log(Array.from("NAUMAN"));
// console.log(Array.from({ name: "NAUMAN" })); //interesting

// of method
/*let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
*/

//  splice, slice
// const Arr = [0, 1, 2, 3, 4, 5];
// console.log(Arr.slice(1, 3));
// output>> [ 1, 2 ]
// It means that upper range is not included in slice and also the original array remains as it is

// const Arr = [0, 1, 2, 3, 4, 5];
// console.log(Arr.splice(1, 3));
// console.log(Arr);
// output>> [ 1, 2, 3 ]
// [ 0, 4, 5 ]
// also it updates the original array and excludes the values that are present it splice
// remember it takes care of upper range and thus includes it

//  shift , unshift
// const Arr = [1, 2, 3, 4, 5, 6];
// Arr.unshift(9);
// console.log(Arr);
// output>> [9, 1, 2, 3, 4, 5, 6]

// const Arr = [1, 2, 3, 4, 5, 6];
// Arr.shift();
// console.log(Arr);
// output>> [ 2, 3, 4, 5, 6 ]

// join
// const Arr = [1, 2, 3, 4, 5, 6];
// console.log(Arr.join());
// output>> 1,2,3,4,5,6

// push , pop
// const Arr = [1, 2, 3, 4, 5, 6];
// Arr.push(9);
// console.log(Arr);
// output>> [1, 2, 3, 4, 5, 6, 9]

// Arr.pop();
// console.log(Arr);
// output>> [ 1, 2, 3, 4, 5, 6 ]

// Differ b/w push/pop   &   shift/unshift
// unshift add element at 0 index, shift removes from there
// push adds element at last index, pop takes out from there

// includes, indexof
// const Arr = [1, 2, 3, 4, 5, 6];
// console.log(Arr.includes(7));
// result would be false because 7 is not included in Array

// console.log(Arr.indexOf(3));
// it displays the index of the number written in paranthesis

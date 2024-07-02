// function is when you rap a piece of code that can use again & again whenever wherever you need

function myfun() {
  //   console.log("nauman");
  //   console.log("zaib");
}

// if we write just myfun here it will be a function reference
// myfun

// therefore we write mufun(), it is known as function execution/call
// myfun();

function sum(num1, num2) {
  // num1, num2 are called parameters
  //   let result = num1 + num2;
  //   return result

  return num1 + num2;
  //   console.log("hello"); //if we write something clg after return, it will not executed bcz statement is dead after return
}
const result = sum(1, 2); // 1, 2 are called arguments
// console.log(result);

function loggedInUser(username) {
  return `my name is ${username} DON`;
}
// console.log(loggedInUser("nomi")); //if we don't pass any value, result is undefined rather null

function loggedInUser(username = "butt") {
  //default name butt
  if (username === undefined) {
    // if(!username) also
    // console.log("Please enter the username");
    return;
  }
  return `my name is ${username} DON`;
}
// console.log(loggedInUser());

// providing multiple arguments with one parameter
function mul(...number) {
  // function mul(val1, val2, ...number)..we'll get only 4 bcz 2 and 3 will be occupied by val1 and val2
  return number;
}

// console.log(mul(2, 3, 4));

// Accessing object in a function
const obj = {
  name: "nauman",
  email: "n@outlook.com",
};

function access(obj) {
  //   console.log(`your name is ${obj.name}`);
  return;
}
access(obj);

// accessing array in a function
const array = [100, 200, 300, 400];
function access(arr) {
  let res = arr[1];
  return res;
}
// console.log(access(array));

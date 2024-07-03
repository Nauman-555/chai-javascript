//  {} this is known as scope.Something written inside it is local scope and if written
//  outside is global scope.
// var c = 300;
if (true) {
  // this is local scope.Value of variable with let and const don't go out of it.
  // However var can be.Also if we declare var also outside the local scope i.e
  // in global scope , its value still be of inner val.Therefore, we avoid var.
  let a = 1;
  const b = 2;
  //   var c = 3;
}
// console.log(a)
// console.log(b)
// console.log(c);

// ++++++++++++++
// ++++++++++++++
// declaring 2 functions, storing one in variable
// func2(); //can be access before initialization
// func1();                    //can't be access before initialization
const func1 = function () {
  console.log("hello world");
  return;
};

// ++++++++++++
function func2() {
  console.log("hello earth");
  return;
}

// if something is present inside scope, we can not access that outside

if (true) {
  const username = "hello";
  if (username === "hello") {
    const web = "portfolio";
  }
  //   console.log(web);       //web is called outside scope, therefore can't be accessed
}
// console.log(username);      // similar is the case for username as for web

// +++++++++++++
// Nested Functions
function one() {
  const abc = "abc";
  function two() {
    const def = "def";
    console.log(abc);
  }
  //   console.log(def);
}
// console.log(one());

// inner can access outer, but outer can't access inner

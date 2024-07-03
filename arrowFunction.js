// (this) refers current context

const obj = {
  name: "Nauman",
  email: "rajagmail.com",
  welcomemessage: function name() {
    // console.log(`Welcome to the world of ${this.name}`);
    // console.log(this); //it shows us the current context, it updates when name updates
  },
};
obj.welcomemessage(); //here we get the name as Nauman
// obj.name = "Zaib";
// obj.welcomemessage(); //now we get name as Zaib
// console.log(this); //it displays an empty object because there is nothing inside globe

// ++++++++++++++++++
// ++++++++++++++++++
// checking for this in functions
const one = function () {
  const username = "chachu";
  //   console.log(this.username);   //result is undefined bcz we can use this only in objects like things
};
one();

// now check for the arrow function, result will be same too
const two = () => {
  const username = "chachu";
  //   console.log(this.username);
};
two();

// types of return in functions
// there are 2 types
// (i): implicit return....where we don't mention the name return
// (ii): explicit return....where we mention the name return

// explicit
const explicit = (num1, num2) => {
  return num1 + num2;
};
// console.log(explicit(1, 2));

// implicit
const implicit = (num1, num2) => num1 + num2;
// console.log(implicit(1, 2));

// implicit
const implicit2 = (num1, num2) => num1 + num2;
// console.log(implicit2(1, 2));

// how to return object in implicit function?
const implicit3 = (num1, num2) => ({ name: "mushtaq" }); //can't do like>> {name:"mushtaq"}
// console.log(implicit3(1, 2));

// ++++++++++++++
// ++++++++++++++
// ++++++++++++++
// ++++++++++++++
// ++++++++++++++
// +++++IIFE+++++
// Immediately Invoked Function Expressions IIFE
// just wrap the whole function in paranthesis
// and execute it without using name rather ()

(function name(params) {
  console.log("hello world");
})();

// second method...with arrow function
(() => {
  console.log("object");
})();

// +++++additional++++
((name) => {
  console.log(`my name is ${name}`);
})("nomi");

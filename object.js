// these are object literals /non-singleton
const Jsobj = {
  name: "nauman",
  email: "nomi@gmail.com",
};

// ^^^^^^^^^^^^^^
// two ways to access any entry in object
// console.log(Jsobj.email);
// console.log(Jsobj["email"]);

// ^^^^^^^^^^^^^^
// freeze object
// Jsobj.email = "nawazshareef@gmail.com";
// Object.freeze(Jsobj);
// Jsobj.email = "shahbazshareef@gmail.com";
// console.log(Jsobj.email);
// output>> nawazshareef@gmail.com

// ^^^^^^^^^^^^^^
// function in obj
// Jsobj.greeting = function () {
//   console.log("helo word");
//   console.log(`my name is ${this.name}`);
// };
// console.log(Jsobj.greeting());

// ^^^^^^^^^^^^^^
// object singleton
const tinderUser = new Object(); //declared

const user = {
  email: "nomi123@gmail.com",
  name: "nomi",
};
// console.log(user.email);

// nested objects
const newUser = {
  name: {
    firstname: {
      fullname: "basheer",
      halfname: "nazeer",
    },
  },
};
// console.log(newUser.name.firstname.fullname);

// combining objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

const obj3 = Object.assign({}, obj1, obj2); // empty curly braces are target means other all are source objects that will lie in this target object
// console.log(obj3);

// another method to combine objects is using spread operator
const obj4 = { ...obj1, ...obj2 };
// console.log(obj4);

// four additional methods
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(user.hasOwnProperty("name"));

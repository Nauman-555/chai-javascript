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
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// console.log(user.hasOwnProperty("name"));

// Destructuring
// const { email: mail } = user;
// console.log(mail);

const { email } = user;
console.log(email);

// simple method is to get value using key as
// console.log(user.email);

// >>>>>>>>>>>>>
// vvvvvvvvvvvvv
/* Api are services that are interchanged between server and clients
the data is transfered in json format.Json is human readable data. 
It can be any data type.Here is the example that includes all

{
  "firstName": "Jane",
  "lastName": "Doe",
  "age": 25,
  "isStudent": true,
  "courses": [
    {
      "name": "Math",
      "grade": "A"
    },
    {
      "name": "Science",
      "grade": "B+"
    },
    {
      "name": "History",
      "grade": "A-"
    }
  ],
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "state": "CA",
    "zip": "12345"
  },
  "phoneNumbers": [
    {
      "type": "home",
      "number": "555-555-5555"
    },
    {
      "type": "mobile",
      "number": "555-555-5556"
    }
  ],
  "email": "jane.doe@example.com",
  "isActive": true,
  "languages": ["English", "Spanish", "French"],
  "preferences": {
    "contactMethod": "email",
    "newsletterSubscribed": false
  },
  "membership": null
}

*/

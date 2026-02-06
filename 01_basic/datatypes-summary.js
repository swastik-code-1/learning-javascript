// Primitive datatypes

// 7 types : String, Number, Boolean, Null, Undefined, symbol, BigInt


const score = 45
const scoreValue = 86.8

const IsloggedIn = true
const OutSideTemp = null
let userEmail;

const id = Symbol("123")

const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 76864354654145464n // bitInt datatypes



// Reference (Non-Primitive datatypes)

// Array, Objects, Functions

const heros = ["shaktiman", "krish", "flying jat"]; // array

let myObj = {
    name: "swastik",  // objects
    age: 19,
}

const myFunction = function() {
    console.log("hello world");  // funtions
    
}

// console.log(typeof heros);


// ******************* MEMORY *******************

// Stack Memory (Primitive), Heap Memory (non-primitive)

let myName = "prince"

let anotherName = myName
anotherName = "swastik"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "usergmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "swastik@google.com"

console.log(userOne.email);
console.log(userTwo.email);

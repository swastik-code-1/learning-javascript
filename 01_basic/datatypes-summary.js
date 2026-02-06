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

console.log(typeof heros);

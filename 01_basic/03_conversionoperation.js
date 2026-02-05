let score = "33"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;
// null => 0
// undefined => NaN

let IsLoggedIn = "swastik"

let BooleanIsLoggedIn = Boolean(IsLoggedIn)
// console.log(BooleanIsLoggedIn);

// 1 => true; 0 => false;
// "" => false 
// "swastik" => true

let someNumber = 43

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// *********************** Operations ***********************

let value = 8
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // 2^3 (2 power 3) = 8 
// console.log(3/2);
// console.log(5%2);

let str1 = "hello"
let str2 = " swastik"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log(1 + "2" + 2);
// console.log((3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
// gameCounter++;
++gameCounter;
console.log(gameCounter);

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"



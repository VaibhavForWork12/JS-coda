// convert 
/* "33" => 33
   "33 abc" =>NaN
   "true => 1 / false => 0
   1 => true / 0 => false / null = false 
   */

let score = null;

console.log(typeof score);
console.log(typeof (score));

let value = Number(score);
console.log(typeof Number);

console.log(typeof value);
console.log(value);

// trying the value of the boolean
let scores = true;

console.log(typeof scores);
console.log(typeof (scores));

let values = Number(scores);
console.log(typeof Number);

console.log(typeof values);
console.log(values);

// string 
let scoress = "vaibhav";

console.log(typeof scoress);
console.log(typeof (scoress));

let valuess = Number(scoress);
console.log(typeof Number);

console.log(typeof valuess);
console.log(valuess);


//// boolean to number conversion
let isLog = 1;
let bool = Boolean(isLog);
console.log(bool);

let isLogg = 0; 
let booll = Boolean(isLogg);
console.log(booll);

let isLoggg = null ; 
let boolll = Boolean(isLoggg);
console.log(boolll);
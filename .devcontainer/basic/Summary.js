/* Primitive datatypes: boolean, symbol, null, undefined,number, bigInt,string
*/

const bigInt = 12142373451653n;
const id = Symbol('123');
const anotherId = Symbol('123');
 
console.log(id);
console.log(anotherId);

console.log(typeof bigInt);

/* Non_Primirtive datatypes 
  Array, Objects, Functions */

 


  const friends = ["vaibhav", "Akash", "Golu"];

  let bio = { name : "vaibhav",
              age :  20,
              dob : new Date("2001-05-04"), };
 console.log(bio);

  const myfunton = function(){
    console.log("hello chutiye");
  }            

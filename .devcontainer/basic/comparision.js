
console.log("2" > 1); // number = true
console.log("" > 1); // empty space / 0 = false 
console.log("" == 0); // empty space = 0
console.log("" === 0); // strict equal false 

console.log("Comparision with Null");
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // different then expected

console.log("Comparision with undefined");
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);

console.log("strict ==");
console.log( 2 == "2");

console.log("strict ===");
console.log( 2=== "2");
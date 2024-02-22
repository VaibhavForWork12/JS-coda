const accountId = 12345 ;
let accountemail = "vaibhav@gmail.com";
var accountpass = "Svf125";
let accountDOB;
/*prefer not to use var because of problem of scopes */

accountcity = "nagpur";
//accountId = 3; //not allowed 
console.log(accountId);

accountemail = "shikhar@gmail.com";
console.log(accountemail);

accountpass = "Ina440";
console.log(accountpass);

console.table([accountDOB,accountId,accountemail,accountpass,accountcity]);

//console.table(accountId,accountemail,accountpass);
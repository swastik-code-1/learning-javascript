const accountId = 3454334
let accountEmail = "swastik@gmail.com"
var accountPassword = "186"
accountcity = "Bokaro"

// accountId = 1 // changes not allowed in constant 

accountEmail = "sw@sw.gmail.com"
accountPassword = "23"
accountcity = "Ranchi"
let accountState; 

/*
perfer not use var
because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountcity, accountState])

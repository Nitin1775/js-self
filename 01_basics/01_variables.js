const accountId =144355
let accountEmail = 'nitin@google.com'
var accountPassword = "12345"
accountCity = "ghaziabad"
let accountState;

//accountId = 2 //not allowed
accountEmail = "ni3@1"
accountPassword = "232424"
accountCity = "bahraich"
console.log(accountId);
/*
prefer not to use  var 
because of the issue in block  scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

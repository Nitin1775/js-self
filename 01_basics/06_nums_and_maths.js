const score = 400 



const balance = new Number(100)
console.log(balance);

console.log(balance.toString());

console.log(typeof(balance)); //object

console.log(balance.toFixed(2));



const otherNumber = 23.89678 //23.9
const otherNumberTwo = 123.89678  //124(3)//123.9(4)
console.log(otherNumber.toPrecision(3));
console.log(otherNumberTwo.toPrecision(4));
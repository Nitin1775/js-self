const score = 400 
//console.log(score);  //400

const balance = new Number(100)
//console.log(balance);  //[Number: 100]

//console.log(balance.toString());

//console.log(typeof(balance)); //object

//console.log(balance.toFixed(2));



const otherNumber = 23.89678 //23.9
const otherNumberTwo = 123.89678  //124(3)//123.9(4)
//console.log(otherNumber.toPrecision(3));
//console.log(otherNumberTwo.toPrecision(4));



const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));




//******************************** MATHS *****************************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.2)); // round  off to 4 
// console.log(Math.round(4.6));  // round off to 5
// console.log(Math.ceil(4.3))  // it chooses the top number (5)
// console.log(Math.floor(4.3)) // it choose the bottom number (4)
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));

console.log(Math.random());
console.log((Math.random()*10) +1 );
console.log(Math.floor(Math.random()*10) + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //important point
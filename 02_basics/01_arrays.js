// array

const myArray = [0, 1, 2, 3, 4, 5]
const myHeros = ["superman", "batman"]
const myArray2 = new Array(1, 2, 3, 4)
// console.log(myArray[0]);



//Array methods

// myArray.push(6)  // by this we can add an element in the array
// myArray.push(7)
// myArray.push(8)

// myArray.pop() // tihs removes the last element of the array


// myArray.unshift(5)  // it shifts the array and add the element in the start
//myArray.shift() // it shifts the array elements to the left 


// console.log(myArray.includes(9));  //false
// console.log(myArray.indexOf(3)); //3

// const newArr = myArray.join()

// console.log(newArr); //0,1,2,3,4,5  it converts the array into string 
// console.log(myArray); //[ 0, 1, 2, 3, 4, 5 ]

 
//************slice,splice************

console.log("A ", myArray); //A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArray.slice(1, 3)

console.log(myn1); //[ 1, 2 ]
console.log("B ", myArray);  //B  [ 0, 1, 2, 3, 4, 5 ]


const myn2 = myArray.splice(1,3)

console.log(myn2); //[ 1, 2, 3 ]
console.log("C ", myArray); //C  [ 0, 4, 5 ]


// one more thing about splice is : in the parameter of splice, the first one is starting index and the second parameter is length of the splice(not the ending index), Hope you find it useful

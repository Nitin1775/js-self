// Primitive Datatypes

// 7 types :- String, Number, Boolean, null,  undefined, Symbol, BigInt

//JavaScript is a dynamically typed language. 
// This means that variable types are determined at runtime,
//  and you do not need to explicitly declare the type of a variable before using it. 
// You can assign different types of values to a variable during its lifetime.

// const score = 100
// const scoreValue = 100.3


// const isLoggedIn = false 
// const outsideTemp = null
// let userEmail;



const  id = Symbol('123')
const anotherId = Symbol('123')

console.log(id ===anotherId);

const bigNumber = 23978689698021431546456n



//Reference (Non Primitve Datatype)

//Array, Object, Function 


const heros = ["shaktiman", "nagraj", "juniorg"];

let myObj = {
    name: "nitin",
    age: 20,

}


const myFunction = function(){
        console.log("hello world");
}

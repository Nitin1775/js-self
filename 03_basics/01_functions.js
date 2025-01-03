 
 function saymyname(){
    console.log("N");
    console.log("I");
    console.log("T");
    console.log("I");
    console.log("N");
 }

//saymyname() 

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    
// }

// addTwoNumbers(3, 4) //7
// addTwoNumbers(3, "4") //34
// addTwoNumbers(3, "a") //3a
// addTwoNumbers(3, null) //3


function addTwoNumbers(number1, number2){
    
    // console.log("ni3"); 
    
    // let result = number1 + number2 
    // return result 
    // console.log("ni3");  // this line of code never get executed coz if any code is below the return, it will not get executed.


    return number1 + number2
}


const result = addTwoNumbers(3, 5)

//console.log("Result:", result);


function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in `
}

// console.log(loginUserMessage("Nitin"));
//console.log(loginUserMessage("ni3"));


//**************************next class**************************


//rest operator and spread operator both has same symbol(...)
// function calculateCartPrice(...num1){
//     return num1
// } //if we input 200,300,500 output is [ 200, 400, 500 ]

function calculateCartPrice(val1, val2, ...num1){
    return num1
} // in this val1 = 200 and val2 = 400 and output is [ 500, 2000 ] 

//console.log(calculateCartPrice(2));
//console.log(calculateCartPrice(200, 400, 500,2000));

const user = {
    username: "Nitin",
    price: 199
}


function handleObject(anyobject){
     //console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
     
}

//handleObject(user)
handleObject({
    username: "ni3",
    price: 399
})



const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 100, 600]));

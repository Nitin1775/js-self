 
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
console.log(loginUserMessage("ni3"));
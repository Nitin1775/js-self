const user = {
    username: "nitin",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
        
    }
}



// user.welcomeMessage() //nitin , welcome to website
// user.username = "shukla"
// user.welcomeMessage() //shukla , welcome to website

// console.log(this);


// function chai(){
//     let username = "nitin"
//     console.log(this.username) //undefined //we cannot use "this" in function  how we used in the object 
// }


// chai()


// const chai = function () {
//     let username = "Nitin"
//     console.log(this.username);  //undefined
     
// }


//*******arrow function**********
// const chai =  () => {
//     let username = "Nitin"
//     console.log(this.username);  //undefined
//     console.log(this); //{}
// }
// chai()



// basic method
// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }

//method 2
// const addTwo = (num1, num2) => num1 + num2


//method 3
const addTwo = (num1, num2) =>  (num1 + num2)



console.log(addTwo(3, 4));


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()



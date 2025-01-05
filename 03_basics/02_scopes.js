//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    //var c = 30
    // console.log("INNER: ", a); //10 
    
}


// console.log(a); //300
// console.log(b);
// console.log(c);

// ********************************next lecture******************

function one(){
    const username = "Nitin"

    function two(){
        const website = "youtube"
        // console.log(username);
        
    }
    // console.log(website);
    
    // two()
}


// one()


if (true){
    const username = "Nitin"
    if (username === "Nitin")  {
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}

// console.log(username);





// ********************** interesting *************************


console.log(addone(5)) // in this we can call the function before even declaring 
function addone(num){
    return num+1
}



console.log(addTwo(5)); // but we when declare the function like this then we can not call the function before declaration 

const addTwo = function(num){
    return num+2
}


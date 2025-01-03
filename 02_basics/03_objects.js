//singleton
//object.create (this meathod is known as construtor method in this method singleton is formed)

//object literals (in this singleton is not formed)

const mySym = Symbol("key1")

const JsUser = {
    name: "Nitin",
    "full name": "Nitin Shukla", 
    [mySym]: "mykey1",
    age: 21,
    location: "ghaziabad",
    email: "nitin@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email); //nitin@google.com
// console.log(JsUser["email"]); //nitin@google.com
// console.log(JsUser["full name"]); //Nitin Shukla
// console.log(JsUser[mySym]);  //mykey1


JsUser.email = "nitin@amazon.com"
//Object.freeze(JsUser)  //it freezes the value so it does not change again
JsUser.email = "nitin@microsoft.com"
//console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
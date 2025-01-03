//const tinderUser = new Object() //{}
const tinderUser = {}  //{}

tinderUser.id = "123abc"
tinderUser.name = "Nitin"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "nitin",
            lastname: "shukla"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);  //nitin

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}


//const obj3 = { obj1, obj2 }
// const obj3 = Object.assign(obj1, obj2)
//const obj3 = Object.assign({}, obj1, obj2, obj4)


const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
        id:1,
        email:"ni3@gmail.com"
    },
    {
        id:1,
        email:"ni3@gmail.com"
    },
    {
        id:1,
        email:"ni3@gmail.com"
    }
]


users[1].email
console.log(tinderUser);


console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); //[ '123abc', 'Nitin', false ]
console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Nitin' ], [ 'isLoggedIn', false ] ]


console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // (true) this is used to find if there any value exits or not 
// Dates  

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);



let myCreatedDate = new Date(2023, 0, 23)
let myCreatedDateTwo = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toString());  //Mon Jan 23 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
// console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023
// console.log(myCreatedDateTwo.toLocaleString()); //1/23/2023, 5:03:00 AM



let myCreatedDateThree = new Date("2025-01-01")
//console.log(myCreatedDateThree.toLocaleString());



let myTimeStamp = Date.now()
let myDateNew = new Date("01-14-2023") 
// console.log(myTimeStamp);
// console.log(myDateNew.getTime());
// console.log(Date.now()/1000); //1735735607.163
// console.log(Math.floor(Date.now()/1000)); //1735735629



let newDate = new Date()
console.log(newDate); //2025-01-01T12:48:54.497Z
console.log(newDate.getMonth()); //0 (january)
console.log(newDate.getDate()); //1
console.log(newDate.getDay()); //3(wednesday)



newDate.toLocaleString('default',{
     weekday: "long" ,dateStyle: "full",
                                     //for more option press "ctrl + space "
})


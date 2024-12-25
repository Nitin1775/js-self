// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);  //false
// console.log(null == 0); //false
// console.log(null >= 0); //true

// the reason is that an equality  check ( == ) and comparisons ( > < >= <= ) work differently. 
// comparisons convert null to a number, treating it as 0. thats why (null >= 0) is true and (null > 0 ) is false.


// console.log(undefined > 0);  //false
// console.log(undefined == 0); //false
// console.log(undefined >= 0); //false
// console.log(undefined > 0); //false
// console.log(undefined < 0); //false


//always avoide these  types of conversion


//  ===(strict comparison)


console.log("2" === 2); //false => in this it compare not only the number but its data type also 
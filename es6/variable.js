const name = 'John'
let age = 28
name = 'Nick' // <- This will fail b/c name is const
age = 29

//let vs var 
let person = 'Adam'
let person = 'Dick' // <- This will fail b/c person is declared already

if(true) {
    let firstname = 'John'
}
console.log(firstname) //<- this will fail because let define variable inside the block scope

for(let i=0; i<5; i++){
    console.log(i)
}
console.log(i) //<- this wil fail b/s i is outside of scope

//after ES6, should always use let to decalre variable

//use template String
function printES6(){
    console.log(`My name is ${name}, I'm ${age} old`)
    let company1 = 4
    let company2 = 7
    console.log(`I have ${company1+company2} years of experience`)
}

//can also use default parameters
function person(name='John Doe', age=99) {
    console.log(name+' '+age)
}
person()


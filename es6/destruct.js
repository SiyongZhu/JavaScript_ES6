let arr = [10,20,30,40,50,60]

let [ten, twenty, , , , sixty] = arr
console.log(ten, twenty, sixty)

const [first, second, ...items] = arr //use ...item to represent the rest
console.log(...items)

const person = {
    firstname: 'John',
    lastname: 'Smith',
    age: 30
}

const {age, lastname} = person //note it must match the name of the key
// const {age, surname} = person  // <-- this will not work

//
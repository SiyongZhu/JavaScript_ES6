var names = ['Alex', 'Mary', 'Nick', 'Jane']

//ForEach()
names.forEach(function(name){
    console.log('The name is ' + name)
})

//map()
//note: the original value used for map() is not mutuable
var numbers = [1,2,3,4,5]
var mapArr = numbers.map(function(number){
    return number*10
})
console.log(mapArr)

var persons = [
    {firstname: "John", lastname: "Smith"},
    {firstname: "Bob", lastname: "Brown"},
    {firstname: "Nick", lastname: "Doe"}
]
var firstNames = persons.map(function(person){
    return person.firstname
})
console.log(firstNames)

//filter() and find()
var persons = [
    {name: 'Mary', gender: 'female'},
    {name: 'John', gender: 'male'},
    {name: 'Jane', gender: 'female'},
    {name: 'Bob', gender: 'male'}
]
var females = persons.filter(function(person){
    return person.gender === 'female'; //this returns a boolean value
    //filter() use the boolean value to filter out person object
})
console.log(persons)
console.log(females)
//find() works almost the same way, but returns the first matching value
var firstFemale = persons.find(function(person){
    return person.gender === 'female'; //this returns a boolean value
    //filter() use the boolean value to filter out person object
})
console.log(firstFemale)

//every() and some()
var persons = [
    {name: 'Mary', age: 28},
    {name: 'John', age: 20},
    {name: 'Jane', age: 15},
    {name: 'Bob', age: 40}
]

//this returns true if all elements in the array meet the criteria
var every = persons.every(function(person){
    return person.age >= 18
})
console.log(every)
var some = persons.some(function(person){
    return person.age >= 18
})
console.log(some)

//reduce()
var numbers = [100, 200, 300]
var total = numbers.reduce(function(previous, number){
   return previous + number
}, 0) //reduce() takes two parameters, one is the function, the other is init parameter
console.log(total)

var weeklyEarnings = [750, 642, 823, 1456]
var income = weeklyEarnings.reduce(function(previous, weeklyEarning){
    return previous + weeklyEarning
}, 5000)
console.log(income)

var firstnames = ['John', 'Jane', 'Mary']
var lastnames = ['Smith', 'Brown', 'Doe']
//we can also use the optional index param on the reduce()
var fullnames = firstnames.reduce(function(previous, firstname, index){
    previous.push(firstname + ' ' + lastnames[index])
    return previous
}, [])
console.log(fullnames)

//spead operator for array is to output all values in array
const array1 = [1,2,3,4]
const array2 = [5,6,7,8]
console.log([0, ...array1, 20, ...array2]) //...array1 would be all the values of array1
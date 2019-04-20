var person1 = {}
person1.firstname = 'John'
person1.lastname = 'Smith'

var person2 = {}
person2.firstname = 'Nick'
person2.lastname = 'Dow'

function createPerson(firstname, lastname){
    var newPerson = {}
    newPerson.firstname = firstname
    newPerson.lastname = lastname
    return newPerson
}

//We can use function to create new object dynamically 
var person3 = createPerson('Bob', 'Brown')
var person4 = createPerson('Marry', 'James')
console.log(person1, person2, person3, person4)

//Use function constructor to create object is useful
function Person(firstname, lastname){
    this.firstname = firstname //`this` keyword
    this.lastname = lastname
    this.getFullName = function(){
        return this.firstname+" "+this.lastname
    }
}

var person5 = new Person('Jon', 'Snow') //`new` defines Person creates a new object
var person6 = new Person('Danny', 'Targarony')
console.log(person5, person6)

/* javascript has build-in function constructors 
* new Object()
* new Date()
* new Array()
* new String()
* new Number()
* etc etc
*
*/


//THere are call(), apply(), bind()

var person = {
    firstname: 'John',
    lastname: 'Smith',
    fullname: function(){
        return this.firstname+' '+this.lastname
    }
}

var definePerson = function(age, job) {
    console.log(this.fullname()+' is '+age+' years old and he is a '+job)
}
//`this` keyword in definePerson
//call() can passing in an object  
//apply() works the same way, except it takes an array
definePerson.call(person, 28, 'developer')
definePerson.apply(person, [30, 'designer'])

//bind() doesn't invoke function immedately, it creates a copy
//so user need to invoke it
//There are different ways bind() can work
var getPerson = definePerson.bind(person)
getPerson(19, 'student')
var getPerson = definePerson.bind(person, 35, 'teacher')
getPerson()
var getPerson = definePerson.bind(person, 25)
getPerson('musician')

var nick = {
    firstname: 'Nick',
    lastname: 'Fury'
}
console.log(person.fullname.call(nick))
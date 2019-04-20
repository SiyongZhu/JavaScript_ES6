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

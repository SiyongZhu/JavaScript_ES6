var person = new Object();

//couple of ways to create properties in an object
person.firstname = 'John';
person['lastname'] = 'Smith';
console.log(person.lastname)

//use case of using ['property_name']
var job = 'profession';
person[job] = 'instructor';
console.log(person) 
job = 'job'
person[job] = 'instructor'; // now there is a new property in person object called 'job'
console.log(person);

person.lastname = 'Lee';
console.log(person) // Person's lastname is changed


var person = {}; //this is the same as var person = new Object()
person = {firstname: 'John', lastname: 'Smith', age: 30}
console.log(person);

person = {firstname: 'Franz', 
          lastname: 'Adams', 
          age: 26,
          daughter: {
              name: 'Dasiy',
              age: 6
          },  //we can also decalre functions on an object
          myFunc: function(daughterName, fatherName, daughterAge) {
              console.log(daughterName + ' is a daughter of '+fatherName +
               ' and she is '+daughterAge+' years old');
          }
        }
console.log(person);
console.log(person.daughter.name);
person.myFunc(person.daughter.name, person.firstname, person.daughter.age);

//we can also pass in an object
person = {
    myFunc: function(obj){
        console.log(obj.daughterName + ' is a daughter of '+obj.fatherName +
               ' and she is '+obj.daughterAge+' years old');
    }
}
person.myFunc({daughterName:"Alice", fatherName:'Dave', daughterAge:10});
var a = {}
var b = new Object();
Object.prototype.greet = 'hello_world'
//When we create an object, it inherits a prototype object
console.log(a) //a has __proto__ which includes greet property

function funcObj() {} //function object is a special type of object
                      //It contains both normal object prototype and function prototype
                      //which is __proto__ -> constructor and __proto__ -> __proto__

// We can use function prototype to improve function constructor 
// The example of Person.getFullName() from func_constructor can be done as follows
function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}
//Benefits of put shared function in protoype is it only occupies one memeory space
Person.prototype.getFullName = function(){
    return this.firstname+' '+this.lastname
}

var person1 = new Person('John', 'Wick')
var person2 = new Person('John', 'Carter')

console.log(person1)
console.log(person2)
console.log(person1.getFullName())
console.log(person2.getFullName())


//As in Object.create(), it can take in custom object as prototype
var firstProto = {
    sayHello: function(){
        return this.name
    }
}
var tom = Object.create(firstProto, {
    name: {
        value: 'Tom'
    }
})
console.log(tom.sayHello())

//you can create prototype from another prototype
var secondProto = Object.create(firstProto, {
    sayHi: {
        value: function(){
            return 'Hi '+this.name
        }
    }
})

var jerry = Object.create(secondProto, {
    name: {
        value: 'Jerry'
    }
})
//Both firstProto function and secondProto function are available to jerry
console.log(jerry.sayHi())
console.log(jerry.sayHello())
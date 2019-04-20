var arr = [1, 2, 3]
arr[3] = 4
arr.prop = 'hello'
console.log(arr) //here we see arr has length of 4, and a property ['prop': 'hello']
//This means arr is an object
console.log(arr.prop) //this will print 'hello'

//in JS, function is object as well
function funcObj() {
    console.log('this is a simple function')
}
//so we can add property to function as well
funcObj['prop'] = 'hi'
funcObj.obj = {
    greet: 'Hey'
}
funcObj.myFunc = function(){
    console.log('Hola')
}
console.log(window) //from window, you can see funcObj is both a function and object


//Object.create() is a global function, you can see the function inside Object
console.dir(Object)

//we can create object using the create() menthod
console.log("Object creation using Object.create()")
var obj1 = Object.create(Object.prototype)
console.log(obj1)
//We can create the object with property name with the following format
var obj2 = Object.create(Object.prototype, {
    name: {
        value: 'Dave'
    }
})
console.log(obj2)
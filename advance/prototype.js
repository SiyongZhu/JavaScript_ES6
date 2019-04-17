var a = {}
var b = new Object();
Object.prototype.greet = 'hello'
//When we create an object, it inherits a prototype object
console.log(a) //a has __proto__ which includes greet property

function funcObj() {}
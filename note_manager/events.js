var h2 = document.querySelector('header h2')

//use anonymous function
h2.addEventListener('click', function(){
    console.log('Clicked')
    //If you want to pass parameters to a function, you can do it in anonymous function
    multiply(5, 8)
})

function multiply(x, y){
    console.log(x*y)
}
//Or use function as parameter
h2.addEventListener('mouseover', mo)
function mo() {
    console.log('MouseOver')
}

//you can also attach more than one function to a event
h2.addEventListener('click', a)
h2.addEventListener('click', b)
function a() {
    console.log('click a')
}
function b() {
    console.log('click b')
}

//When an event occurs, the event object is created
var manDom = document.querySelector('#man-dom')
manDom.addEventListener('click', dummy)
function dummy(e){
    console.log(e.target) //e is an event object, 
                          //target is one of the most commonly used porperties
    console.log(this) // `this` is the DOM of manDom, because event is attached to manDom
}

//check DOM event sequence
var div = document.querySelector('div.wrapper') //div which has class wrapper
var header = document.querySelector('div header') //header nested in div
var searchNote = document.querySelector('form#search-note') //form that has id search-note

//When elements are nested, and they are all listening to the same events
//The sequence of events firing is from the inner most elements to outer most
//For example, when user clicks form#search-note, following events are run on searchNote first, and div last
div.addEventListener('click', function(){
    var delay = new Date().getTime() + 1000
     while (new Date() < delay) {} 
    console.log("from div wrapper") //gets called last
})
header.addEventListener('click', function(){
    var delay = new Date().getTime() + 1000
    while (new Date() < delay) {}
    console.log("from header")
})
searchNote.addEventListener('click', function(){
    var delay = new Date().getTime() + 1000
    while (new Date() < delay) {}
    console.log("from search-note") //gets called first
})
//add the optional flag elem.addEventListener('click', function(){}, true) will force event to fire immediately

//When load webpage, global execution context is created
//Then global_init() creates a local execution context
//Even when we click on elements that fires events, global_init() will still run first
//Then th events listener will trigger other events
function global_init() {
    var delay = new Date().getTime() + 3000
    while (new Date() < delay) {}
    console.log("from global execution")
}
global_init()
//All other events 
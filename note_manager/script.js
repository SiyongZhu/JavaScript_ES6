// querySelector is used the same way as css
//return the first element that matches a specific CSS selector
var el = document.querySelector('ul') 
console.log(el) //el returns html object 
var el = document.querySelector('#search-note') //use css selector to get element with id

var el = document.querySelector('ul li') //this returns the FIRST li element
console.log(el)

var el = document.querySelector('ul li:nth-child(2)')//this select 2nd li element
var second_cancel = el.querySelector('p .fa-times') //in 2nd li element, pick <p>, then class=fa-time, you get the cancel
console.log(second_cancel)

//select all elements class, returns a collection (note: not an array)
var icons = document.getElementsByClassName('fa') 
for(var i=0; i<icons.length; i++) {
    console.log(icons[i])
}

console.log('use foreach array function')
Array.from(icons).forEach(element => {
    console.log(element)
});


//we can convert a collection to array
var iconArray = Array.from(icons)
iconArray.forEach(function(icon, index, arr){
    console.log(icon, index, arr)
})
console.log(iconArray)
iconArray.push('Hello') //Now you can add element into this array

//this still returns a html collection
var lis = document.getElementsByTagName('li')
console.log(lis)

//this returns a nodeList, not an array
var lis = document.querySelectorAll('li')
//nodeList is different from collection that it has forEach method
//but it still not an array, so lis.push() does not work. 
lis.forEach(function(a){
    console.log(a)
})

//this selects all elements in <li> -> <input>
var elem = document.querySelectorAll('li input')
console.log(elem)

//this selects elements of <h2> <li> and <div id=hide-list>
var multiElem = document.querySelectorAll('li, h2, #hide-list')
console.log(multiElem)
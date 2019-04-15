var btnChangeDom = document.getElementById('man-dom')
btnChangeDom.onclick = function() {change_dom()}

function change_dom() {
    //Following command changes all elements 
    var multiElem = document.querySelectorAll('ul li')
    Array.from(multiElem).forEach(function(li){
        li.innerHTML ='<p>replaceme</p>' 
        li.style.backgroundColor = 'blue'
    })

    var h2 = document.querySelector('header h2')
    h2.style.color='black'
    h2.style.backgroundColor = 'gray'

    var manDom = document.querySelector('#man-dom')
    manDom.className = 'changeBg' //attach a class style (defined in css), element will apply the style
    manDom.className += ' changeFt' //append another class style, remember the space, not recommended

    //This returns a DOMTokenList object
    var h2Class = h2.classList
    //You can attach class to elements
    h2Class.add('changeFt')
    console.log(h2Class)
}

//We can also use get/set Attribute to manipulate DOM
//getAttribute returns a string
var div = document.querySelector('div.wrapper')
console.log(div.getAttribute('class'))
// div.setAttribute('style', 'background: coral')
// div.hasAttribute('style')
// div.removeAttribute('style')

var btn = document.getElementById('add-btn')
var input = document.getElementById('add-input')

//add-btn is a submit button, which refresh the webpage
//to prevent that, add preventDefault()
btn.addEventListener('click', function(e){
    e.preventDefault();
    //change input to be a submit button
    input.setAttribute('type', 'submit');
    input.setAttribute('value', input.value)
})

//DOM navigation 
var listElem = document.getElementById('fonts-wrapper')
console.log(listElem.parentElement.parentNode) //parentElement and parentNode are the same
console.log(listElem.children)// This returns child elements, ignore white spaces

//create a new button element 
var newEL = document.createElement('button')
var text = document.createTextNode('I am a New Button')
newEL.setAttribute('style', 'display: block; margin: 10px auto; padding: 5px 10px; background: coral; color:#fff;')
newEL.append(text)
//add the new button to form#add
var form = document.getElementById('add')

//use appendChild or insertBefore to add element to 
form.appendChild(newEL)
form.insertBefore(newEL, form.children[0])
//To remove element, you have to be in parent element 
newEL.parentElement.removeChild(newEL)
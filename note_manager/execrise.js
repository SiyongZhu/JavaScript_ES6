
var btnAddNote = document.getElementById('add-btn')

var ul = document.querySelector('ul')

/**********************  Add item *******************************/
btnAddNote.addEventListener('click', function(e){
    e.preventDefault();
    console.log('add a note')
    var note = document.getElementById('add-input').value
    if (note !== "") {
        var newLi = document.createElement('li'),
            firstPar = document.createElement('p'),
            secondPar = document.createElement('p'),
            firstIcon = document.createElement('i'),
            secondIcon = document.createElement('i'),
            newInput = document.createElement('input')

        firstIcon.className = "fa fa-pencil-square-o"
        secondIcon.className = "fa fa-times"

        newInput.setAttribute('type', 'text')
        newInput.className = 'edit-note'

        newText = document.createTextNode(note)
        firstPar.append(newText)

        secondPar.appendChild(firstIcon)
        secondPar.appendChild(secondIcon)

        newLi.append(firstPar)
        newLi.append(secondPar)
        newLi.append(newInput)

        var ul = document.getElementById('list')
        ul.appendChild(newLi)

        document.getElementById('add-input').value = ''
    } 
})
/** Edit and delete item */
//Using event object e, you can get the DOM object mouse click upon
//sidenote: 
ul.addEventListener('click', function(e){
    //console.log(this)  <-- sidenote: `this` only returns ul no matter which DOM you click on
    //Now we can check the class of the elem DOM object clicked upon
    if (e.target.classList[1] === 'fa-pencil-square-o'){
        var parentPar = e.target.parentNode
        parentPar.style.display='None' //hide the current element 
        var text = parentPar.previousElementSibling //get <p> elem 
        var input = parentPar.nextElementSibling //get <input> elem
        input.style.display='block'
        input.value=text.textContent

        input.addEventListener('keypress', function(e){
            //event object for keypress has key and keyCode attribute
            //that keeps track of each keyboard button pressed
            if (e.keyCode === 13) { // 13 is ENTER key
                if(input.value === ''){
                    //propangate to parent node
                    var li = input.parentNode
                    var ul = li.parentNode
                    //from parent node, remove the element
                    ul.removeChild(li)
                } else {
                    text.textContent = input.value
                    parentPar.style.display = 'block'
                    input.style.display = 'none'
                }              
            }
        })
    }else if (e.target.classList[1] === 'fa-times'){
        var li = e.target.parentNode.parentNode
        var ul = li.parentNode
        ul.removeChild(li)
    }
})

var hideItem = document.getElementById('hide')
hideItem.addEventListener('click', function(e){
    var label = document.querySelector('#hide-list label')
    if(hideItem.checked){
        label.textContent = 'Unhide'
        ul.style.display = 'none'
    }else{
        label.textContent = 'Hide'
        ul.style.display = 'block'
    }
})

var searchInput = document.querySelector('#search-note input')

searchInput.addEventListener('keyup', function(e){ //keyup is oppsite of keypress
    console.log(e.keyCode+' is released')
    var searchChar = e.target.value.toUpperCase()
    var notes = ul.getElementsByTagName('li')

    Array.from(notes).forEach(function(note){
        var parText = note.firstElementChild.textContent
        if(parText.toUpperCase().indexOf(searchChar) != -1){
            note.style.display = 'block'
        }else{
            note.style.display = 'none'
        }
    })
})

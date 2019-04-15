
var btnAddNote = document.getElementById('add-btn')
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
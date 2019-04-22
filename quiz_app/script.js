//Create modular pattern where each controller works as a specific function

/************************************
 * Quiz Controller
 ************************************/
let quizController = (function() {

    //************Question Constructor ***********/
    function Question(id, questionText, options, correctAnswer){
        this.id = id
        this.questionText = questionText
        this.options = options
        this.correctAnswer = correctAnswer
    }
})()

/************************************
 * UIController
 ************************************/
let UIController = (function() {
    let domItems = {
        questionInsertBtn: document.getElementById("question-insert-btn")
    }

    return {
        getDomItems: domItems
    }
})()

let controller = (function(quizCtrl, UICtrl) {
    let selectedDomItems = UICtrl.getDomItems
    selectedDomItems.questionInsertBtn.addEventListener('click', function(){
        console.log('insert btn clicked')
    })
})(quizController, UIController)
function funName() {
    console.log('Hello world');
}

funName();

function calcScore(examScore, essayScore) {
    return examScore + essayScore;
}

function passExam(name, score) {
    var passUni = 71;
    var passColl = 51;

    if (score >= passUni){
        console.log(name+' passes university with '+score+' points');
    }else if (score >= passColl){
        console.log(name+' passes college with '+score+' points');
    }else{
        console.log(name +' had failed');
    }
}

passExam('John', calcScore(40, 50));
passExam('Steve', calcScore(20, 50));
passExam('Steve', calcScore(20, 30));

//We can use function expression instead of function statement
// assigned sum to be a function
var sum = function (a, b){
    console.log(a+b);
}
sum(10, 15); 
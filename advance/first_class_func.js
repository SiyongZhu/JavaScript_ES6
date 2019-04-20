function sum(num1, num2, fn){
    console.log(num1+num2)
    console.log(fn())
}
//in here, we pass function as a variable 
sum(5, 10, function(){
    return "function executed"
})

var scores = [55, 35, 87, 45]
function checkResult(arr, fn) {
    var newArr = []
    for(var i=0; i<arr.length; i++){
        newArr.push(fn(arr[i]))
    }
    return newArr
}

function passExam(score){
    if (score >= 51){
        return score
    }
    return 'Failed'
}
function calcDifference(score){
    return score-51
}

console.log(checkResult(scores, passExam))
console.log(checkResult(scores, calcDifference))

function finalResult(score) {
    if (score >=81){
        return function(name){
            console.log(name + ', you are going to university')
        }
    } else if (score >= 51){
        return function(name) {
            console.log(name + ', you are going to state college')
        }
    } else {
        return function(name) {
            console.log(name+', you failed')
        }
    }
}

var result1 = finalResult(77) //finalResult returns a function
result1('Bob') // you can use the returned function

finalResult(96)('Jane'); //this works too! because Jane is a param passed to the returned function 

//This is a IIFE, adding () to enclose a function and append a () at the end will run the script  
(function() {
    console.log("Hello")
})()
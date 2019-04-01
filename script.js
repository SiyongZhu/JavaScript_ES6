console.log('alright dude');

var lastName = 'Smith';
console.log(lastName);

var message = "I am using a \" here \" ";
console.log(message);


//Difference between null, undefined and not defined
a = null;
console.log(a); // a has value of null
var b;
console.log(b); // b is undefined
// c;
// console.log(c); //c is not defined (error)

var a = 5, b = '5';

// a==b is true different from a === b, which is false
// a !== b

//Type Corecion, javascript auto change type of variable
var a = 10 + '5'; //output is 105
var a = 10 + 5 + 'b'; //output is 15b

var myChild = 'Alex';
var gender='male';

if (gender === 'male'){
    console.log(myChild + 'is my son');
}else if (gender == 'female'){
    console.log(myChild+' is my daughter');
}else{
    console.log(myChild+' is gender neutral');
}

// logical operator && || !
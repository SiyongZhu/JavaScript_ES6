console.log(a); //returns undefined
console.log(b()); //return 20

var a = 10

function b() {
    return 20;
}
//Reason the log(a) was undefined instead of error because
//in creation stage, a was preassgined a variable space, even though value is not assigned
//context of function b() was also created. Thus when execute, b() context is already there



/**
 * 'this' is referring to the context of the code execute upon
 */

 //'this' in here are all referring to global context 
 function golbal_func () {
    console.log(this);    
    console.log(this == window); //this is true

    function local_func() {
        console.log(this);
        console.log(this == window); //this is true as well
    }
    local_func()
 }
 golbal_func();


 var person = {
     firstname: "John",
     lastname: "smith",
     getFullname: function() {
         var self = this
         console.log(this === person);  //this referring variable person
         console.log( this.firstname + ' ' + this.lastname);
         function greet() {
             console.log('Hi ' + self.firstname); //if use 'this', it actually referring to window instead of person
                                                  //so we use self and assign this to self to keep track of context
         }
         greet()
     }
 }

 var person1 = {
    firstname: "Nick",
    lastname: "Doe"
 };

person1.getFullname = person.getFullname; //here person1 get the same finction implementation from person

person.getFullname();
person1.getFullname();
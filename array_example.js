var arr = ['John',
 'Bob',
 'Mary',
 10, 
 true, 
 [1, 2, 3], 
 function(name){ return 'Hello ' + name}];
console.log(arr);
console.log(arr[0]); //return John
console.log(arr[5][1]); // return 2
console.log(arr[6](arr[2])); //return Hello Mary


var arr = new Array(1, 'John', false); //use Array is the same as use array literal, i.e arr=[1, 2, 3]
                                        // use array literal is perferable than Array class


var colors = ['white', 'black', 'red'];
colors[1] = 'green';
console.log(colors); //black is changed to green
colors.push('blue');
colors.pop()  // push and pop works as a stack

colors.shift();
colors.unshift('purple'); //works as a queue

console.log(colors.indexOf('red'));
console.log(colors.indexOf('brown')); //return -1 b/c index is not found

for(var i=0; i<colors.length; i++){
    console.log(colors[i]);
}
const multiply = (x, y) => x*y
console.log(multiply(5, 10))

const newName = () => ({firstname: 'John'}) //return an object needs () outside {}
console.log(newName())

const numbers = [2,4,6,8]
let double = numbers.map(number => number *2) //use arrow function to simplify 

const personES6 = {
    firstname: 'Nick',
    lastname: 'Doe',
    sayFullName: function(){
        return () => {
            console.log(`${this.firstname} ${this.lastname}`)
        }
    }
}
console.log(personES6.sayFullName())

document.querySelector('h1').addEventListener('click', function(){
    console.log(this)
    let a = () => {
        this.style.color = 'red'
    }
    a()
})
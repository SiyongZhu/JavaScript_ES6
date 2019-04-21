class PersonES6 {
    constructor(firstname, lastname, age){
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }

    aboutPerson() {
        console.log(`${this.firstname} ${this.lastname} is ${this.age} years old`)
    }
}

class DeveloperES6 extends PersonES6 {
    constructor(firstname, lastname, age, experience, projects) {
        super(firstname, lastname, age)
        this.experience = experience
        this.projects = projects
    }

    aboutDev(){
        console.log(`${this.firstname} ${this.lastname} is ${this.age} years old `+
        `with ${this.experience} experience and ${this.projects} projects`)
    }
}

const bobDev = new DeveloperES6('Bob', 'James', 45, 15, 8)

console.log(typeof PersonES6)
const nickES6 = new PersonES6('Nick', 'Smith', 28)
console.log(nickES6)
nickES6.aboutPerson()
bobDev.aboutPerson()
bobDev.aboutDev()
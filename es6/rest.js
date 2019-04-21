const a = (x, y, ...rest) => {
    console.log(rest)
    console.log(x+y+rest[0]+rest[1])
}

a(10,20,30,40)

const family = (lastname, ...names) => {
    names.forEach(name => {
        console.log(`${name} ${lastname}`)
    })
}

family('Smith', 'John', 'Adam', 'Jane')
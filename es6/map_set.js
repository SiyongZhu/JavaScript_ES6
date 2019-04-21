const mapData = new Map([
    [10, 'ten'],
    ['isMarried', false]
])
mapData.set('name', 'John')
mapData.set(true, 'Yes')
const obj = {}
mapData.set(obj, 'person')


console.log(mapData.has(obj))
console.log(mapData.get('name'))
console.log(mapData)

//Map object has forEach(), and key,value
mapData.forEach((value, key) => {
    console.log(value, key)
})

for (let key of mapData.keys()){
    console.log(key)
}

//Set only stores unique values
const setData = new Set(['John', 10, false, {firstname: 'Dick', lastname: 'Smith'}, 'John'])
setData.add('Nick')
console.log(setData)
for (let value of setData.values()){
    console.log(value)
}
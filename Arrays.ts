

class Type {
    userName: string = 'Sanjoy'
    age: number = 23
}
const t = new Type()
const array = new Array<Type>(t)
for (const arr of array) {
    console.log(arr)
}

console.log(array);



interface Human {
        category: string;
        createdDate: Date
}
class Person implements Human {
        name: string
        age: number
        constructor(name: string, age: number) {
                this.name = name
                this.age = age

        }
        category: string;
        createdDate: Date;
}

const person = new Person('sanjoy', 23)

console.log(person);

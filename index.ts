
class Car<S, T> {
    brand: S;
    price: T;
    constructor(br: S, pr: T) {
        this.brand = br;
        this.price = pr
    }
}

const Mercedes = new Car<string, number>('Mercedes', 5000_000)
console.log(Mercedes.brand);
console.log(Mercedes.price);

console.log();



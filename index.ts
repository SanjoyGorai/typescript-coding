
class Car<B, P, C> {
    brand: B;
    price: P;
    color: C
    constructor(br: B, pr: P, col: C) {
        this.brand = br;
        this.price = pr;
        this.color = col;
    }
    getInfo() {
        return [this.brand, this.price, this.color]
    }
}

class Tesla extends Car<B, P, C> {
    constructor() {
        super()
    }
}

// const Mercedes = new Car<string, number, string>('Mercedes', 5000_000, 'red')
// console.log(Mercedes.brand);
// console.log(Mercedes.price);
// console.log(Mercedes.color);
// console.log(Mercedes.getInfo());


console.log();



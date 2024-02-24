


function identity(arg: number): number {

    return arg
}

function identity1(arg: any): any {
    return arg
}

function identity2<Type>(arg: Type): Type {
    return arg
}
let output = identity2<string>('sanjoy')
let result = identity2(4)
console.log(output);
console.log(result);


function arrGen<T>(p: Array<T>): Array<T > {
    return p
}

console.log(arrGen([411,'sd']));



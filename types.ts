// Basic Types

// Boolean

let isDone: boolean = false;
console.log(isDone);

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;

// String

let color: string = "blue";
color = 'red';


let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.
 
I'll be ${age + 1} years old next month.`;

let sentence1: string =
  "Hello, my name is " +
  fullName +
  ".\n\n" +
  "I'll be " +
  (age + 1) +
  " years old next month.";

//   Array
  let list: number[] = [1, 2, 3];

//   The second way uses a generic array type, Array<elemType>:

  let list1: number[] = [1, 2, 3];

//   Tuple
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error
// Type 'number' is not assignable to type 'string'.
// Type 'string' is not assignable to type 'number'.

// When accessing an element with a known index, the correct type is retrieved:

// OK
console.log(x[0].substring(1));
 
console.log(x[1].substring(1));
// Property 'substring' does not exist on type 'number'.



//   Enum

enum Color {
    Red,
    Green,
    Blue,
  }
  let c: Color = Color.Green;
  
//   Unknown
let notSure: unknown = 4;
notSure = "maybe a string instead";
 
// OK, definitely a boolean
notSure = false;


// Any
declare function getValue(key: string): any;
// OK, return value of 'getValue' is not checked
const str: string = getValue("myString");

let looselyTyped: any = 4;
// OK, ifItExists might exist at runtime
looselyTyped.ifItExists();
// OK, toFixed exists (but the compiler doesn't check)
looselyTyped.toFixed();
 
let strictlyTyped: unknown = 4;
strictlyTyped.toFixed();
// 'strictlyTyped' is of type 'unknown'.

let looselyTyped: any = {};
let d = looselyTyped.a.b.c.d;


// Void
function warnUser(): void {
  console.log("This is my warning message");
}

let unusable: void = undefined;
// OK if `--strictNullChecks` is not given
unusable = null;

// Null and Undefined

let u: undefined = undefined;
let n: null = null;

// Never
function error(message: string): never {
  throw new Error(message);
}
 
// Inferred return type is never
function fail() {
  return error("Something failed");
}
 
// Function returning never must not have a reachable end point
function infiniteLoop(): never {
  while (true) {}
}

// Object
declare function create(o: object | null): void;
 
// OK
create({ prop: 0 });
create(null);
create(undefined); 

// Type assertions

let someValue: unknown = "this is a string";
 
let strLength: number = (someValue as string).length;
Try
The other version is the “angle-bracket” syntax:

let someValue: unknown = "this is a string";
 
let strLength: number = (<string>someValue).length;


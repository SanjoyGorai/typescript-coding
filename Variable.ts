// var  declarations

var a = 10;

function f() {
    var message = "Hello, world!";
    return message;
  }

  function h() {
    var a = 10;
    return function g() {
      var b = a + 1;
      return b;
    };
  }
  var g = f();
  h(); // r


// let declarations
let hello = "Hello!";


//   const declarations
const numLivesForCat = 9;


// Destructuring
let input = [1, 2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2

first = input[0];
second = input[1];

// swap variables
[first, second] = [second, first];
function f([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
  }
  f([1, 2]);
  
  let [first, ...rest] = [1, 2, 3, 4];
  console.log(first); // outputs 1
  console.log(rest); // outputs [ 2, 3, 4 ]
    
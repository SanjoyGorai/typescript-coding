
function genFun<T>(param: T): T {
  return param
}

const fun = genFun<number>(12)
console.log(fun);

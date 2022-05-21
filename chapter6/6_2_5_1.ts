type F = () => number;

function makeFibonacci() {
  let n1 = 0;
  let n2 = 1;

  return () => {
    let next = n1 + n2;
    n1 = n2;
    n2 = next;
    return next;
  };
}

let f: F = makeFibonacci();

console.log(f());
console.log(f());
console.log(f());
console.log(f());
console.log(f());

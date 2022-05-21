function* fibonacci(): IterableIterator<number> {
  let n1 = 0;
  let n2 = 1;

  while (true) {
    let next = n1 + n2;
    n1 = n2;
    n2 = next;
    yield next;
  }
}

let f: IterableIterator<number> = fibonacci();

console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());

function* count(): IterableIterator<number> {
  let n: number = 0;
  while (true) {
    n++;
    yield n;
  }
}

for (let value of take(drop(count(), 5), 5)) {
  console.log(value);
}

function* drop<T>(iter: Iterable<T>, n: number): IterableIterator<T> {
  for (const value of iter) {
    if (n-- > 0) continue;
    yield value;
  }
}



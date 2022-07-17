function* map<T, U>(
  values: Iterable<T>,
  func: (arg: T) => U
): IterableIterator<U> {
  for (const value of values) {
    yield func(value);
  }
}

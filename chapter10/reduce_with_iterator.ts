function reduce<T>(iter: Iterable<T>, init: T, op: (x: T, y: T) => T): T {
  let result: T = init;
  for (const item of iter) {
    result = op(result, item);
  }
  return result;
}

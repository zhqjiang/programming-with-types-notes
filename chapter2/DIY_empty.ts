declare const EmptyType: unique symbol;

class Empty {
  [EmptyType]: void;
  private constructor() {} // Private constructor ensures that other code cannot instantiate this type.
}

function raise(message: string): Empty {
  console.error(`Erro "${message} raised at ${new Date()}`);
  throw new Error(message);
}

/**
 * Symbols are often used to add unique property keys to an object
 * that won't collide with keys any other code might add to the object
 */

/**
 * Q: What is a 'unique symbol' type?
 * A: unique symbol is a subtype of symbol, and are produced only from calling Symbol() or Symbol.for()
 */

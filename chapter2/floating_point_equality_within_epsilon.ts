function epsilonEqual(a: number, b: number): boolean {
  return Math.abs(a - b) <= Number.EPSILON;
}

console.log(0.1 + 0.1 + 0.1 == 0.3); // false
console.log(epsilonEqual(0.1 + 0.1 + 0.1, 0.3)); // true

/**
 * Q: Number.EPSILON?
 * A: The Number.EPSILON property represents the difference between 1 and the smallest floating point number greater than 1.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON
 *
 * Q: What is machine epsilon?
 * A: Rounding is a procedure for choosing the representation of a real number in a floating point number system.
 * For a number system and a rounding procedure,
 * machine epsilon is the maximum relative error of the chosen rounding procedure.
 *  from:https://en.wikipedia.org/wiki/Machine_epsilon
 */

/**
 * More about Floating Point Representation and Rounding Error
 * https://www.youtube.com/watch?v=wbxSTxhTmrs
 */

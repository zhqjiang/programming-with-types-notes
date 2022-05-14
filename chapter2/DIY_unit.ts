/**
 * Your can create your own unit type by defining an enumeration with a single element or a singleton without state.
 */

/**
 * A unit type has only one possible value, it doesn't really matter what the value is.
 */

declare const UnitType: unique symbol;

class Unit {
  [UnitType]: void;
  static readonly value: Unit = new Unit();
  private constructor() {} // this constructor is only used in upper line of code.
}

function greet(): Unit {
  console.log("Hello");
  return Unit.value;
}

# chapter 4 Type safety

## 4.1 Avoiding primitive obsession to prevent misinterpretation

### 4.1.1 The Mars Climite Orbiter

```ts
function trajectoryCorrection(momentum: number) {
  if (momentum < 2 /* Ns */) {
    disintegrate();
  }
}

function provideMomentum() {
  trajectoryCorrection(1.5 /* lbfs */);
}
```

Both Ns and lbfs is represented by number, but they are different. How to leverage the type system to prevent such catastrophic misunderstanding?

use class and unqiue symbol to simulate nominal type.

### 4.1.2 The primitive obsession antipattern

Primitive obsession turns up when we rely on basic types to represent everything: a postal code is a `number`, a phone number is a `string`, and so on.

Even though a postal code is a number, that doesn't mean we should store is as a value of type `number`.

### 4.1.3 Exercise

1. c

## 4.2 Enforcing constrains

### 4.2.1 Enforcing constrains with the constructor

```ts
declare const celsiusType: unique symbol;

class Celsius {
  readonly value: number;
  [celsiusType]: void;

  constructor(value: number) {
    // both are okay
    // if (value < -273.15) throw new Error();
    if (value < -273.15) value = -273.15;

    this.value = value;
  }
}
```

We ensure that the value stays valid after construction by making it `readonly`.

### 4.2.2 Enforcing constrains with a factory

A factory is useful when we don't want to throw an exception, but to return `undefined` or some other value that is not a temperature and represents failure to create a valid instance.

```ts
declare const celsiusType: unique symbol;

class Celsius {
  readonly value: number;
  [celsiusType]: void;

  private constructor(value: number) {
    this.value = value;
  }

  static makeCelisus(value: number): Celsisu | undefined {
    if (value < -273.15) return undefined;

    return new Celsisu(value);
  }
}
```

### 4.2.3 Exercise

```ts
declare const Percentage: unique symbol;

class Percentage {
  readonly value: number;
  [celsiusType]: void;

  constructor(value: number) {
    if (value < 0) value = 0;
    if (value > 100) value = 100;

    this.value = value;
  }
}
```

## 4.3 Adding type information

Although type checking has strong theoretical foundations, all programming languages provide shortcuts that allow us to bypass the type checks and tell the compiler to treat a value as a certain type. We are effectively saying, "Trust us; we know what this type is better than you do." This is called a `type cast` - a term you might have heard before.

A type cast converts the type of an expression to another type. Each programming language has its own rules about which conversions are valid and which are not, which we can be done automatically by the compiler, and which must be done with additional code.

### 4.3.1 Type casting

An _explicit type cast_ is a cast that allows us to tell the compiler to treat a value as though it had a certain type. In TypeScript, we do a cast to `NewType` by adding `<NewType>` in front of the value or by adding `as NewType` after the value.

### 4.3.2 Tracking types outside the type system

### 4.3.3 Common type casts

upcast and downcast

widening casts and narrowing casts

Another common implicit cast is from an integer type with a fixed number of bits - say, an 8-bit unsigned integer - to another integer type that represents values with more bits - say, a 16-bit unsigned integer. You can do this implicitly because a 16-bit unsigned integer can represent any 8-bit unsigned integer value and more. This type of cast is called a _widening cast_.

On the other hand, casting a signed integer to an unsigned integer is dangerous, as a negative number can't be represented by an unsigned integer. This type of cast is called a _narrowing cast_.

### 4.3.4 Exercises

1. a
2. b

## 4.4 Hiding and restoring type information

A collection with items of the same type, like our bag of cats, is also called a **_homogenous collection_**. Because all items have the same type, we don't need hide thier type information. A collection of items of different types is also known as a **_heterogenous collection_**. In this case, we need to hide some of the typing information to declare such a collection.

### 4.4.1 Heterogenous collections

### 4.4.2 Serialization

### 4.4.3 Exercises

1. b
2. a

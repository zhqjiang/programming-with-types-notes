# Chapter 3 Composition

- Combining types into compound types
- Combining types as either-or types:
  We'll see, for example, how returning a result **_or_** an error is usually safer than returning a result **_and_** an error.

- Implementing visitor patterns
- Algebraic data types

## 3.1 Compound types

### 3.1.1 Tuples

Tuple types: **_Tuple types_** consist of a set of component types, which we can access by their position in the tuple. Tuples provide a way to group data in an ad hoc way, allowing us to pass around several values of different types as a single value.

### 3.1.2 Assigning meaning

Defining points as pairs of numbers works, but we lose some meaning: we can interpret a pair of numbers as either X and Y coordinates or Y and X coordinates.

Record types: **_Record types_**, similar to tuples, combine multiple other types. Instead of the component values being accessed by their position in the tuple, record types allow us to give their components names and access them by name. Record typs are kowns as **_record_** or **_struct_** in different languages.

In TypeScript:

```typescript
class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
```

### 3.1.3 Maintaining invariants

### 3.1.4 Exercises

1. c

## 3.2 Expressing either-or with types

### 3.2.1 Enumerations

Encoding day of week as an enum

```typescript
enum DayOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

function isWeekend(day: DayOfWeek): boolean {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}

function isWeekday(dayOfWeek: DayOfWeek): boolean {
  return day >= DayOfWeek.Monday && day <= DayOfWeek.Friday;
}
```

### 3.2.2 Optional types

### 3.2.3 Result or error

Throwing an exception on error is a perfectly valid example of result or error: the function either returns or throws an exception.

### 3.2.4 Variants

**_Variant types_**, also known as **_tagged union types_**, contain a value of any number of underlying types. _Tagged_ comes from the fact that even if the underlying types have overlapping values, we are still able to tell exactly which type the value comes from.

### 3.2.5 Exercises

1. c
2. d
3. d

## 3.3 The visitor pattern

### 3.3.1 A naive implementation

### 3.3.2 Using the visitor pattern

The visitor pattern is an operation to be performed on elements of an object structure. This pattern lets you define a new operation without changing the classes of the elements on which it operates.

### 3.3.3 Visiting a variant

```ts
function visit<T1, T2, T3>(
  variant: Variant<T1, T2, T3>,
  func1: (value: T1) => void,
  func2: (value: T2) => void,
  func3: (value: T3) => void
): void {
  switch (variant.index) {
    case 0:
      func1(<T1>variant.value);
      break;
    case 1:
      func2(<T2>variant.value);
      break;
    case 2:
      func3(<T3>variant.value);
      break;
    default:
      throw new Error();
  }
}
```

## 3.4 Algebraic data types

ADTs provide two ways to combine types: product types and sum types

### 3.4.1 Product types

**_Product types_** combine multiple other types into a new type that stores a value from each of the combined types. The product type of types `A`, `B`, and `C` - which we can write as `A x B x C` - contains a value from `A`, a value from `B` and a value from `C`. Tuple and record types are examples of product types. Additionally, records allow us to assign meaningful names to each of their components.

Almost all programming languages provide ways to define record types. Fewer mainstream languages provide syntactic support for sum types.

### 3.4.2 Sum types

Sum types are whta we called either-or types earlier in this chapter.

**_Sum types_** combine multiple other types into a new type that stores a value from any one of the combined types. The sum type of types `A`, `B`, and `C` - which we can write as `A + B + C` - contains a value from `A`, _or_ a value from `B`, `or` a value from `C`. Optional and variant types are examples of sum types.

### 3.4.3 Exercises

1. c
2. b
3. c
4. b

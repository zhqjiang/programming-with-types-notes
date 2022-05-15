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

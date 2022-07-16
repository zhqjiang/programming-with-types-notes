# Chapter 9 Generic data structures

## 9.1 Decoupling concerns

In algebra, an identity function is a function `f(x) = x\*\*.

### 9.1.1 A resuable identity function

**TYPE PARAMETER** A _type parameter_ is an identifier for a generic type name. Type parameters are used as placeholders for specific types that the client specifies when creating an instance of the generic type.

```typescript
function identity<T>(value: T): T {
  return value;
}
```

### 9.1.2 The opitional type

### 9.1.3 Generic types

### 9.1.4 Exercises

1 and 2

```typescript
class Box<T> {
  private value: T;
  constructor(value: T) {
    this.value = value;
  }
  getValue(): T {
    return this.value;
  }
}

function unbox<T>(wrapper: Box<T>) {
  return wrapper.getValue();
}
```

## 9.2 Generic data layout

### 9.2.2 What is a data structure?

Three parts:

- _The data itself_
- _The shape of data_
- _A set of shape-preserving operations_

### 9.2.3 Exercises

1.

```typescript
class Stack<T> {
  data: T[];
  constructor(arr: T[]) {
    this.data = arr;
  }
  pop() {
    /** */
  }
  push() {
    /** */
  }
  peek() {
    /** */
  }
}
```

2.

```typescript
class Pair<T, U> {
  first: T;
  second: U;
  constructor(first: T, second: U) {
    this.first = first;
    this.second = second;
  }
}
```

## 9.3 Traversing any data structure

### 9.3.2 Streamling iteration code

Iterable inteface

```typescript
interface Iterable<T> {
  [Symbol.iterator](): Iterator<T>;
}
```

### 9.3.4

## 9.4 Streaming data

### 9.4.1 Processing pipelines

The components of processing pipelines are functions that take an iterator as argument, do some processing, and return an iterator. Such functions can be chained together to process data as it arrives. This pattern is common in functional porgramming languages and the basis of reactive programming.

### 9.4.2 Exercises

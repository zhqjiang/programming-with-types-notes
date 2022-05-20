# Chapter 5 Function types

## 5.1 A simple strategy pattern

### 5.1.1 A functional strategy

### 5.1.2 Typing functions

**FUNCTION TYPE OR SIGNATURE** The type of a function is given by the type of its arguments and its return type. If two functions take the same arguments and return the same type, they have the same type. The set of arguments plus return type is also known as the _signature_ of a function.

### 5.1.4 First-class functions

When languages treat functions as they do any other values, we say that they support _first-class functions_.

### 5.1.5 Exercises

1. b
2. c

## 5.2 A state machine without switch statements

### 5.2.3 State machine Implementation recap

Three kinds of implementation

* The "classical" implementation of a state machine uses an enum to define all the possible states, a variable of that enum type to keep track of the current state, and a big `switch` statement to determine which processing should be performed based on the current state.

* The functional implementation represents each processing state as a function and relies on a function property to track the current state. State transitions are implementated by assigning the function property to another state.

* The sum type implementation represents each processing state as a class and relies on a variable representing the sum type of all the possible states to keep track of the current state. 

### 5.2.4 Exercises

1. Model a simple connection that can be `open` or `closed` as a state machine, A connection is opened with `connect` and closed with `disconnect`.

2. Implement the preceding connection as a functional state machine with a `process()` function. In a closed connection, `process()` calls a `read()` function that returns a string. If the string is empty, the connection is closed; otherwise, the read string is logged to the console. `read()` is given as `declare function read(): string`.


## 5.3 Avoiding expensive computation with lazy values

Another advantage of being able to use functions as any other value is that we can store them and invoke them only when needed.

This idea is to postpone expensive computation as much as possible, in the hope that it may not be needed at all. Because compuatation is expressed as functions, we can pass around functions instead of actual values and call them when and whether we need to the values. This process is called `lazy evaluation`. The opposite is `eager evaluation`.

### 5.3.1 Lambdas

Most modern programming languages support `anonymous functions`, or `lambdas`.  

Lazy evaluation

A common feature of many functional programming language is _lazy evaluation_. In such languages, everything is evaluated as late as possible, and we don't have to be explicit about it. In such languages, `chooseMyRide()` would by default construct neither a `Bike` nor a `Car`. Only when we actually try to use the object returned by `chooseMyRide()` - by calling `ride()` on it, for example - would the `Bike` or `Car` be created.


### 5.3.2 Exercise

1. d - The other implement named functions; this is the only anonymous implementation.

## 5.4 Using _map_, _filter_, and _reduce_

### 5.4.1 _map()_

### 5.4.2 _filter()_

### 5.4.3 _reduce()_

> Monoids

If a set `T` with an operation `op` has an identity element and the operation is associative, the resulting algebraic is called a _monoid_.

### 5.4.5 Exercises

1

```ts
function first<T>(arr: T[], pred: (element: T) => boolean): T | undefined {
  for (const item of items) {
    if(pred(item)) {
      return item;
    }
  }
  
  return undefined;
}
```

2

```ts
function first<T>(arr: T[], pred: (element: T) => boolean): boolean {
 return arr.every(pred);
}
```

## 5.5 Functional programming


# # Chapter 6 Advanced applications of function types

## 6.1 A simple decorator pattern

The decorator pattern is a behavioral software design pattern that extends the behavior of an object without modifying the class of the object. A decorated object can perform work beyond what its original implementation provides.

### 6.1.1 A functional decorator

### 6.1.3 Closures

A lambda capture is an external variable captured within a lambda. Programming languages implement lambda captures through closures. A _closure_ is something more than a simple function: it also records the environment in which the function was created, so it can maintain state between calls.

Closures make sense only if we have high-order functions.

Another way to think about closures is to contrast them with objects. An object represents some state with a set of methods; a _closure_ represents a function with some captured state.

## 6.2 Implementing a counter

### 6.2.1 An object-oriented counter

```ts
class Counter {
   private n: number = 1;
   next(): number {
       return this.n++;
   }
}
k
let counter1: Counter = new Counter();
let counter2: Counter = new Counter();
```

### 6.2.2 A functional counter

```ts
type Counter = () => number;

function makeCounter(): Counter {
    let n: number = 1;

    return () => n++;
}

let counter1: Counter = makeCounter();
let counter2: Counter = makeCounter();

console.log(counter1());
console.log(counter2());
console.log(counter1());
console.log(counter2());
// this will log 1 1 2 2.
```

### 6.2.3 A resumable counter

Another way to define a counter is to use a resumable function. An object-oriented counter keeps track of state via a private member. A functional counter keeps track of state in its captured context.

**RESUMABLE FUNCTIONS**

A _resumable function_ is a function that keeps track of its own state and, whenever it gets called, doesn't run from the beginning; rather, it resumes executing from where it left off the last time it returned.


```ts
function* counter(): IterableIterator<number> {
  let n: number = 1;
  while (true) {
    yield n++;
  }
}

let counter1: IterableIterator<number> = counter();
let counter2: IterableIterator<number> = counter();

console.log(counter1.next());
console.log(counter2.next());
console.log(counter1.next());
console.log(counter2.next());
```

### 6.2.4 Counter implementation recap

Before moving on, let's quickly recap the four ways to implement a counter and the various language features we learned about:

* A global counter is implemented as a simple function that references a global variable. This counter has multiple drawbacks: the counter value is not properly encapsulated, and we cannot have two separate instances of the counter.

* The object-oriented coutner implementation is straightforward: the counter value is private state, and we expose a `next()` method to read and increment it. Most languages declare an interface like `Iterable` to support such scenarios and provide syntactic suger to consume them.

* A functional counter is a function that returns a function. The returned function is a counter. This implementation leverages lambda captures to hold the state of the counter. The code is more succinct than the object-oriented version.

* A generator employs special syntax to create a resumbale function. Instead of returning, a generator yields; it provides a value to the caller but also keeps track of where it was and picks up from there on subsequent calls. A generator function must return an iterable iterator.

### 6.2.5 Exercises

## 6.3 Executing long-running operations asynchronously

### 6.3.1 Synchronous execution

### 6.3.2 Asynchronous execution: callbacks

### 6.3.3 Asynchronous execution models

### 6.3.4 Asynchronous functions recap

### 6.3.5 Exercises

1. d 
2. b
3. a

## 6.4 Simplifying asynchronous code

### 6.4.6 Exercises

1. c
2. b // there is a print error, it should be option b - `catch`
3. c

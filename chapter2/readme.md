# Chapter 2 Basic types

## 2.1 Designing functions that don't return values

### 2.1.1 empty type

An empty type is a type that cannot have any value: its set of possible value is the empty set.

In Typescript, empty type is `never`

When a function returns a value of type `never`, it means that it never returns.

### 2.1.2 The unit type

In Typescript, unit type is `void`

Function does return but don't return anything useful. There are many functions like this, which we call only for their side effects: they do something, change some external state, but don't perform any useful computation to return to us.

Functions that take any number of arguments but don't return any meaningful value are also called actions (because they usually perform one or more operations that change the state of the world) or consumers (because arguments go in but nothing comes out).

### 2.1.3 Exercises

1. void
2. void

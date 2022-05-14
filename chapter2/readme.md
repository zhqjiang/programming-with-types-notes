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

### 2.2.3 Exercises

1. b

## 2.3 Common pitfalls of numerical types

adding up 0.10 three times not give us 0.30.

### 2.3.1 Integer types and overflow

#### Overflow and underflow

What if we are using a 4-bit unsigned encoding and try to add 10 + 10? Such a situation is called an _arithmetic overflow_.

The opposite situation, in which we end up with a number that is too small to represent, is called an _arithmetic underflow_.

Three different ways to handle arithmetic overflow and underflow:

1. An odometer wraps around
2. A dial knob saturates
3. A pocket calculator errors out

#### Detecting overflow and underflow

### 2.3.4 Exercises

1. c
2. c

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



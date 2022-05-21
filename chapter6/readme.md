# # Chapter 6 Advanced applications of function types

## 6.1 A simple decorator pattern

The decorator pattern is a behavioral software design pattern that extends the behavior of an object without modifying the class of the object. A decorated object can perform work beyond what its original implementation provides.
 
### 6.1.1 A functional decorator

### 6.1.3 Closures

A lambda capture is an external variable captured within a lambda. Programming languages implement lambda captures through closures. A _closure_ is something more than a simple function: it also records the environment in which the function was created, so it can maintain state between calls.

Closures make sense only if we have high-order functions.

Another way to think about closures is to contrast them with objects. An object represents some state with a set of methods; a _closure_ represents a function with some captured state.







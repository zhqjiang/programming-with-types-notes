# 8 Elements of object-oriented programming

**OBJECT-ORIENTED PROGRAMMING**

OOP is a programming paradigm based on the concept of objects, which contain both data and code. The data is the state of the object. The code is one or more methods, also known as _messages_. In an object-oriented system, objects can "talk** to or message one another by invoking each other's methods.

## 8.1 Defining contracts with interfaces

**INTERFACES OR CONTRACTS**

An _interface_, or a _contract_, is a description of a set of messages that are understood by any object implementing that interface. The messages are methods and include name, arguments, and return type. An interface does not have any state. Just like real-world contracts, which are written agreements, an interface is a written agreement of what implementers will provide.

This is a subtle but important distinction between abstract classes and interfaces: the relationship between `ConsoleLogger` and `ALogger` is called an _is-a relationship_, as in `ConsoleLogger` is an `ALogger`, because it inherits from it. On ther other hand, `ConsoleLogger` implement the contract, but it doesn't semantically create an _is-a_ relationship. `ConsoleLogger` _satisfies contract_ `ILogger` but _isn't_ an `ILogger`. That's the reason why even languages that enforce that a class can inherit from only one other class, such as Java and C#, still allow classes to implement many interfaces. 

### 8.1.1

1. c
2. using extends 






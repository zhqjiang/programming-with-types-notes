# 8 Elements of object-oriented programming

**OBJECT-ORIENTED PROGRAMMING**

OOP is a programming paradigm based on the concept of objects, which contain both data and code. The data is the state of the object. The code is one or more methods, also known as _messages_. In an object-oriented system, objects can "talk** to or message one another by invoking each other's methods.

## 8.1 Defining contracts with interfaces

**INTERFACES OR CONTRACTS**

An _interface_, or a _contract_, is a description of a set of messages that are understood by any object implementing that interface. The messages are methods and include name, arguments, and return type. An interface does not have any state. Just like real-world contracts, which are written agreements, an interface is a written agreement of what implementers will provide.

This is a subtle but important distinction between abstract classes and interfaces: the relationship between `ConsoleLogger` and `ALogger` is called an _is-a relationship_, as in `ConsoleLogger` is an `ALogger`, because it inherits from it. On ther other hand, `ConsoleLogger` implement the contract, but it doesn't semantically create an _is-a_ relationship. `ConsoleLogger` _satisfies contract_ `ILogger` but _isn't** an `ILogger**. That's the reason why even languages that enforce that a class can inherit from only one other class, such as Java and C#, still allow classes to implement many interfaces. 

### 8.1.1

1. c
2. using extends 

## 8.2 Inheriting data and behavior

### 8.2.1 The is-a rule of thumb

**INHERITANCE AND THE IS-A RELATIONSHIP** Inheritance establishs an _is-a_ relationship between the child type and its parent type. If our base class is `Shape`, and our derived class is `Circle`, the relationship is "`Circle` is a `Shape`". This is the semantic meaning of inheritance and a good test to apply to type types to determine whether we should use inheritance.

### 8.2.2 Modelling a hierarchy

### 8.2.3 Parameterizing behavior of expressions

Listing 8.6 Expression hierarchy

```typescript
interface IExpression {
  eval(): number;
}

abstract class BinaryExpression implements IExpression {
  readonly a: number;
  readonly b: number;
  
  constructor(a: number, b:number) {
    this.a = a;
    this.b = b;
  }
  
  abstract eval(): number;
}

class SumExpression extends BinaryExpression {
  eval(): number {
    return this.a + this.b;
  }
}

class MulExpression extends BinaryExpression {
  eval(): number {
    return this.a * this.b;
  }
}
```

This should pass our _is-a_ test: A `SumExpression` is a `BinaryExpression`.

Usually, it's also good to have the children be concrete classes and all parents up the hierarchy be abstract.

Some languages provide a way to explicitly mark a child class as noninheriatble to enforce stopping the hierarchy there. Usually this is done with keywords such as `final` or `sealed`.

### 8.2.4

1. d
2. 

```typescript
abstract class UnaryExpression implements IExpression {
  readonly a: number;
  constructor(a: number) {
    this.a = a;
  }
  
  abstract eval(): number;
}

class UnaryMinusExpression extends UnaryExpression {
  eval(): number {
    return -this.a;
  }
}
```



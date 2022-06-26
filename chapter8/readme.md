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

## 8.3 Composing data and behavior

### 8.3.1 Ths has-a rule of thumb

**COMPOSITION AND THE HAS-A RELATIONSHIP** Composition establishs a _has-a_ relationship between a container type and the contained type. If our type is `Circle`, and our contained class is `Point`, the relationship is `Circle` has a `Point` (which defines its center). This is the semantic meaning of composition and a good test to apply to two types to determine whether we should use composition.

### 8.3.2 Composite classes

### 8.3.3 Implementing the adapter pattern

The adapter pattern can make two classes compatible without requiring us to modify eithre of the two classes.


```typescript
namespace GeometryLibrary {
  export interface ICircle {
    getCenterX(): number;
    getCenterY(): number;
    getDiameter(): number;
  }
}
```

Listing 8.10 CircleAdapter

```typescript
class CircleAdapter implements GeometryLibrary.ICircle {
  private circle: Circle;
  
  constructor(circle: Circle) {
    this.circle = circle; 
  }
  
  getCenterX(): number {
    return this.circle.center.x;
  }
  
  getCenterY(): number {
    return this.circle.center.y;
  }
  
  getDiameter(): number {
    return this.circle.radius * 2; 
  }
}
```

The adapter can hide the actual implementation it translates from by marking it as private. This is an interesting application of composition: instead of bringing together several components, we wrap a single component but provide the "glue** it needs to be consumed as another type.

### 8.3.4 Exercises

1. c
2. Just put engine instance into wing class.

## 8.4 Extending data and behavior

### 8.4.1 Extending behavior with composition

### 8.4.2 Extenidng behavior with mix-ins

**MIX-INS AND THE INCLUDE RELATIONSHIP** Mix-ins establish an _includes_ relationship between a type and its mixed-in type. If our class is `Cat`, and our mixed-in class is `HunterBehavior`, the relationship is "`Cat` includes `HunterBehavior`" This is the semantic meaning of mix-ins and is different from the _is-a_ relationship of inheritance.

### 8.4.3 Mix-in in TypeScript

Extending an instance with the members of another one

```typescript
function extend<First, Second>(first: First, second: Second): First & Second {
  const result: unkown = {};
  for(const prop in first) {
    if (first.hasOwnProperty(prop)) {
      (<First>result)[prop] = first[prop];
    }
  }
  
  for(const prop in second) {
    if (second.hasOwnProperty(prop)) {
      (<Second>result)[prop] = second[prop];
    }  
  }
  
  return <First & Second>result;
}
```

### 8.4.4 Exercises

put tracking method into another class, then mix it in

## 8.5 Alternatives to purely object-oriented code

### 8.5.1 Sum types

### 8.5.2 Fucntional Programming

### 8.5.3 Generic Programming

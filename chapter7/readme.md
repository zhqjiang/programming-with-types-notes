# 7 Subtyping

## 7.1 Distinguishing between similiar types in TypeScript

```ts
declare const NsType: unique symbol;

class Ns {
  value: number;
  [NsType]: void;
  constructor(value: number) {
    this.value = value;
  }
}

declare const LbfsType: unique symbol;

class Lbfs {
  value: number;
  [LbfsType]: void;
  constructor(value: number) {
    this.value = value;
  }
}
```

If we omit two declarations, an interesting thing happens: we can pass `Ns` object as a `Lbfs** object, and vice versa, without getting any errors from the compiler.

**SUBTYPING**

A type `S` is a subtype of a type `T` if an instance of `S` can be safely used anywhere an instance of `T` is expected.

This is an informal definition of the famous _Liskov substitution principle_. Two types are in a subtype-supertype relationship if we can use an instance of the subtype whenever an instance of the supertype is expected without having to change the code.

There are two ways in which subtyping relationships are established. The first one, which most mainstream programming languges (such as Java and C#) use, is called _nominal subtyping_. In nominal subtyping, a type is the subtype of another type if we explicitly declare it as such, using syntax like `class Triangle extends Shape`. Now we can use an instance of `Triangle` whenever an instance of `Shape` is expected (such as an argument to a function). If we don't declare `Triangle` as extending `Shape`, the compiler won't allow us to use it as a `Shape`.

On the other hand, _structural subtyping_ doesn't require us to state the subtyping relationship explicitly in code. An instance of a type, such as `Lbfs`, can be used instead of another type, such as `Ns`, as long as it has all the members that the other type declare. In other words, if a type has a similiar structure to another type(the same members and optionally additional members**, it is automatically considered to be a subtype of that other type. 

**NOMINAL AND STRUCTURAL SUBTYPING** In nominal subtyping, a type is a subtype of another type if we explicitly declare it as such. In structural subtyping, a type is a subtype of another type if it has all the members of the supertype and, optionally, additional members.

### 7.1.1 Structural and nominal subtyping pros and cons

In many cases, structural subtyping is useful, as it follows us to establish relationships between types even if they are not under our control.

### 7.1.2 Simulating nominal subtyping in TypeScript

```ts
declare const NsType: unique symbol;
```
Now that we have a unique name, we can create a property with that name by putting the name in square brackets.

### 7.1.3 Exercises

1. yes
2. no


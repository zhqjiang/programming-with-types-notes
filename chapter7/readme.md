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

## 7.2 Assigning anything to, assigning to anything

### 7.2.1 Safe deserialization

```ts
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

function deserialize(input: string): any {
  return JSON.parse(input);
}

function greet(user: User): void {
  console.log(`Hi ${user.name}!`);
}

function isUser(user: any): user is User {
  if (user === null || user === undefined)
    return false;
    
  return typeof user.name === 'string';
}

let user: any = deserialize('{ "name": "Alice" }');

if (isUser(user)) {
  greet(user);
}

user = undefined;
if (isUser(user)) {
  geet(user);
}
```

**TOP TYPE**

A type to which we can assign any value is also called a _top type_ because any other type is a subtype of this type. In other words, this type sits at the top of the subtyping hierachy.

We can start with the `Object` type, which is the supertype of _most_ types in the type systems, with two exceptions: `null` and `undefined`. The TypeScript type system has some great safety features, one of them being the ability to keep `null` and `undefined` values outside the domain of other types.

So our top type, the supertype of absolutely anything, is the sum of these three types: `Object | null | undefined`. This type is actually defined out of the box as `unknown`. Let's rewrite our code to use `unknown`, as shown in the next listing, and then we can discuss the differences between using `any` and `unknown**.

**DIFFERENCE BETWEEN UNKNOWN ADN ANY**

Although we can assign anything to both `unknown` and `any`, there is a difference in how we use a variable of one of these types. In the `unknown` case, we can use the value as some type(such as `User`) only after we confirm that the value actually has that type (as we did with the function that returns the user as `User`). In the `any` case, we can use the value as a value of any other type right away. `any` bypasses type checking.

### 7.2.2 Values for error case

**BOTTOM TYPE**

A type is the subtype of any other type is called a _bottom type_ because it sits at the bottom of the subtyping heirarchy. To be a subtype of any other possible type, it must have the members of any other possible type. Because we can have an infinite number of types and members, the bottom type would have to have an infinite number of members. Because that is impossible, the bottom type is always an empty type: a type for which we can't create an actual value.

A bottom type allows us to pretend that we have a value of any type even if we can't come up with one.

### 7.2.3 Top and bottom types recap

### 7.2.4 Exercises

1. yes
2. no

## 7.3 Allowed substitutions

Some tricker questions:

* What is the subtyping relationship between the sum types `Triangle | Square` and `Triangle | Square | Circle`?

* What is the subtyping relationship between an array of triangles(`Triangle[]`) and array of shapes(`Shape[]`)?

* What is the subtyping relationship between a generic data stucture such as `List<T>`, for `List<Triangle>` and `List<Shape>`?

* What about the function types `() => Shape` and `() => Triangle`?

* Conversely, what about the function type `(argument: Shape) => void` and the function type `(argument: Triangle) => void`?

These questions are important, as they tell us which of these types can be substituted for their subtypes.

### 7.3.1 Subtyping and sum types

`Triangle | Square** is a subtype of `Triangle | Square | Circle**

### 7.3.2 Subtyping and collections

Arrays preserve the subtyping relationship of the underlying types that they are storing.

**COVARIANCE**

A type that preserves the subtying relationship of its underlying type is called _covariant_. An array is covariant because it preserves the subtyping relationship: `Triangle` is a subtype of `Shape`, so `Triangle[]` is a subtype of `Shape[]`.

Vairous languages behave differently when dealing with arrays and collections such as `LinkedList<T>`. In C#, for example, we would have to explicitly state covariance for a type such as `LinkedList<T>` by declaring an interface and using the `out` keyword (`ILinkedList<out T>`). Otherwise, the compiler will not deduce the subtyping relationship.

An alternative to covariance is to simply ignore the subtyping relationship between two given and consider a `LinkedList<Shape>` and `LinkedList<Triangle>` to be types with no subtyping relationship between them. (Neither is a subtype of the other.) This is not case in TypeScript, but it is in C#, in which a `List<Shape>` and a `List<Triangle>` have no subtyping relationship.

**INVARIANCE***

A type that ignores the subtyping relationship of its underlying type is called `invariant`. A C# `List<T>` is invariant because it ignores the subtyping relationship "Triangle is a subtype of a Shape", so `List<Shape>` and `List<Triangle** have no subtype-supertype relationship.

### 7.3.3  Subtyping and function return types

Functions are covariant in their return types

### 7.3.4 Subtyping and function argument types

**CONTRAVARIANCE**

A type that reverses the subtyping relationship of its underlying type is called _contravariant_. In most programming languages, functions are contravariant with regard to their arguments.

We said "most programming languages" earlier. a notable exception is TypeScript. In TypeScript, we can also do the opposite: pass a function that expects a subtype instead of a function that expects a supertype. This choice was an explicit design choice made to facilitate commmon JavaScript programming patterns. It can lead to run-time issues, though.

In TypeScript, If `Triangle` is a subtype of `Shape`, a function of type `(argument: Shape) => void` and a function type `(argument: Triangle) => void` can be substituted for each other. Effectively, they are subtypes of each other. This property is called _bivariance**.

**BIVRIANCE**

Types are bivariant if, from the subtyping relationship of their underlying types, they become subtypes of each other.

### 7.3.6 Exericses

1. Yes
2. no
3. yes
4. yes
5. yes
6. no

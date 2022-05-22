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

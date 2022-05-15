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

1. c
2. a

## 2.2 Boolean logic and short circuits

### 2.2.3 Exercises

1. b

## 2.3 Common pitfalls of numerical types

adding up 0.10 three times not give us 0.30.

### 2.3.1 Integer types and overflow

#### Overflow and underflow

What if we are using a 4-bit unsigned encoding and try to add 10 + 10? Such a situation is called an **_arithmetic overflow_**.

The opposite situation, in which we end up with a number that is too small to represent, is called an **_arithmetic underflow_**.

Image you have a integer type using 4 bits to represent a number between 0 and 15, there are three different ways to handle arithmetic overflow and underflow:

1. An odometer wraps around - add (0001) to (1111) and get (0000).
2. A dial knob saturates - add (0001) to (1111) and still get (1111).
3. A pocket calculator errors out - add (0001) to (1111) and an error is thrown.

#### Detecting overflow and underflow

### 2.3.4 Exercises

1. c
2. c

## 2.4 Encoding text

### 2.4.1 Breaking text

Javscript represent an emoji with five characters. So use `String.prototype.substring` to break a string which contains emoji may produce result like this: `["....\ud83d", "\udc6e🔑"]`.

### 2.4.2 Encodings

The Unicode standard works with two similar but distinct concepts: characters and graphemes. **_Characters_** are the computer representation of text, and **_graphemes_** are the symbols users see.

When rendering text, we work with graphemes, and we don't want to break apart a multiple-character grapheme. When encoding text, we work with characters.

PS: I have learned a lot about unicode from thetype.com podcast, which covers much more than this book. Unicode is actually quite complex, use third-party library to take care of such complexity.

### 2.4.3 Encoding libraries

`grapheme-splitter`

### 2.4.4 Exercises

1. d
2. c

## 2.5 Building data structure with arrays and references

### 2.5.1 Fixed-size arrays

The reason why arrays are a common primitive as oppossed to, say, linked lists is efficiency: because the values are stored one after the other, accessing any one of them is a fast operation.

### 2.5.2 References

### 2.5.3 Efficient lists

### 2.5.4 Binary trees

When representing a binary tree as a fixed-size array, the drawback of this implementation is the amount of additional space required can be unacceptable if the stree is sparse.

Compact binary tree implementation:

```ts
class TreeNode {
  value: number;
  left: TreeNode | undefined;
  right: TreeNode | undefined;

  constructor(value: number) {
    this.value = value;
    this.left = undefined;
    this.right = undefined;
  }
}
```

### 2.5.5 Associative arrays

Also known as **_dictionary_** or **_hash table_**.

JavaScript/TypeScript arrays are associative arrays. The languages do not provide a fixed-size array primitive type.

### 2.5.6 Implementation trade-offs

Fixed-size arrays have extremely fast read/update capabilities and can represent dense data. For variable-size data structures, reference perform better on append and can represent sparse data more easily.

### 2.5.7 Exercise

1. b

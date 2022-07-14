class StringLinkedListNode {
  value: string;
  next: StringLinkedListNode | undefined;
  constructor(value: string) {
    this.value = value;
  }
}

class LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | undefined;

  constructor(value: T) {
    this.value = value;
  }
}

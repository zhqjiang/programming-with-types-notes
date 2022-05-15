class NumberListNode {
  value: number;
  next: NumberListNode | undefined;

  constructor(value: number) {
    this.value = value;
    this.next = undefined;
  }
}

class NumberLinkedList {
  private tail: NumberListNode = { value: 0, next: undefined };
  private head: NumberListNode = { value: 0, next: this.tail };

  at(index: number): number {
    let res: NumberListNode | undefined = this.head.next;
    while (index > 0 && res !== undefined) {
      res = res.next;
      index--;
    }
    if (res === undefined) {
      throw new RangeError();
    }
    return res.value;
  }

  append(value: number): void {
    this.tail.next = { value: value, next: undefined };
    this.tail = this.tail.next;
  }
}

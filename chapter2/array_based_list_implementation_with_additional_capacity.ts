class NumberList {
  private numbers: number[] = new Array(1);
  private length: number = 0;
  private capacity: number = 1;

  at(index: number): number {
    if (index >= this.length) throw new RangeError();
    return this.numbers[index];
  }

  append(value: number) {
    if (this.length < this.capacity) {
      this.numbers[this.length] = value; // book's code have a typo here: this.numbers[length] = value
      this.length++;
      return;
    }

    this.capacity = this.capacity * 2;
    let newNumbers: number[] = new Array(this.capacity);
    for (let i = 0; i < this.length; i++) {
      newNumbers[i] = this.numbers[i];
    }
    newNumbers[this.length] = value;
    this.numbers = newNumbers;
    this.length++;
  }
}

/**
 * Actually JavaScript/TypeScript does not provide a fixed-array primitive type, so this code is just an example.
 * But other languages may have fixed-array primitive types, code like above would work as expected.
 */

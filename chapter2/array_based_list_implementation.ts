class NumberArrayList {
  private numbers: number[] = [];
  private length: number = 0;

  at(index: number): number {
    if (index >= this.length) throw new RangeError();
    return this.numbers[index];
  }

  append(value: number) {
    let newNumbers: number[] = new Array(this.length + 1);
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

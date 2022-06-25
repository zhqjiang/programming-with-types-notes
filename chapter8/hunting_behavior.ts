interface IHunter {
  track(): void;
  stalk(): void;
  pounce(): void;
}

interface Animal {}

class HuntingBehavior implements IHunter {
  pray: Animal | undefined;
  track(): void {}
  stalk(): void {}
  pounce(): void {}
}

class Cat extends Pet implements IHunter {
  private huntingBehavior: HuntingBehavior = new HuntingBehavior();

  track(): void {
    this.huntingBehavior.track();
  }

  stalk(): void {
    this.huntingBehavior.track();
  }

  pounce(): void {
    this.huntingBehavior.track();
  }

  meow(): void {
    /* */
  }
}

declare const NsType: unique symbol;

class Ns {
  readonly value: number;
  [NsType]: void;

  constructor(value: number) {
    this.value = value;
  }
}

declare const LbfsType: unique symbol;

class Lbfs {
  readonly value: number;
  [LbfsType]: void;
  constructor(value: number) {
    this.value = value;
  }
}

/**
 * On my opinion, class defined here simulated nominal type
 */

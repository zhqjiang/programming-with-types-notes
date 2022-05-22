declare function makeNothing(): never;
let x: number = makeNothing();

declare function makeSomething(): unknown;
let y: number = makeSomething();

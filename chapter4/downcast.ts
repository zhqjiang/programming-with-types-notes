class Shape {}

declare const traingleType: unique symbol;

class Triangle extends Shape {
  [traingleType]: void;
}

function useShape(shape: Shape, isTriangle: boolean) {
  if (isTriangle) {
    let triangle: Triangle = <Triangle>shape;
  }
}

let myTriangle: Triangle = new Triangle();

useShape(myTriangle, true);

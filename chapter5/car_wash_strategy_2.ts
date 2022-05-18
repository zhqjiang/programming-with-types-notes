class Car2 {}
type washingStrategy = (car: Car2) => void;
function standardWash(car: Car2): void {
  // Perform standard wash
}
function premiumWash(car: Car2): void {
  // Perform premium wash
}

class CarWash2 {
  service(car: Car2, premium: boolean) {
    let washingStrategy: washingStrategy;

    if (premium) {
      washingStrategy = premiumWash;
    } else {
      washingStrategy = standardWash;
    }

    washingStrategy(car);
  }
}

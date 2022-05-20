class Bike { } // Car and Bike. Let's assume
class Car { } // that Car is expensive to create

function chooseMyRide(bike: Bike, car: Car): Bike | Car {
    if (isItTraining()) {
        return car;
    } else {
        return bike;
    }
}

chooseMyRide(new Bike(), new Car());

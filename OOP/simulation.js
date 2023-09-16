function Vehicle(brand, model, speed, fuelType) {
    this.brand = brand;
    this.model = model;
    this.speed = speed || 0;
    this.fuelType = fuelType || 'Unknown';
  }
  
  Vehicle.prototype.accelerate = function (increment) {
    this.speed += increment;
    console.log(`${this.brand} ${this.model} is accelerating. Current speed: ${this.speed} km/h`);
  };
  
  Vehicle.prototype.brake = function (decrement) {
    this.speed -= decrement;
    console.log(`${this.brand} ${this.model} is braking. Current speed: ${this.speed} km/h`);
  };
  
  Vehicle.prototype.refuel = function () {
    console.log(`${this.brand} ${this.model} is refueling.`);
  };
  
  function Car(brand, model, speed, fuelType, numberOfWheels) {
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfWheels = numberOfWheels || 4;
  }
  
  Car.prototype = Object.create(Vehicle.prototype);
  
  Car.prototype.honk = function () {
    console.log(`${this.brand} ${this.model} is honking. Honk! Honk!`);
  };
  
  function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear) {
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfEngines = numberOfEngines || 2;
    this.hasLandingGear = hasLandingGear || true;
  }
  
  Airplane.prototype = Object.create(Vehicle.prototype);
  
  Airplane.prototype.takeOff = function () {
    console.log(`${this.brand} ${this.model} is taking off.`);
  };
  
  const myCar = new Car('Toyota', 'Camry', 0, 'Gasoline', 4);
  const myAirplane = new Airplane('Boeing', '747', 0, 'Jet Fuel', 4, true);
  
  myCar.accelerate(50);
  myCar.honk();
  myCar.brake(20);
  myCar.refuel();
  
  myAirplane.accelerate(200);
  myAirplane.takeOff();
  myAirplane.brake(50);
  myAirplane.refuel();
  
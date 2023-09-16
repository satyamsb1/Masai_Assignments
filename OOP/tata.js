 function Automobile(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    
    Automobile.prototype.displayInfo = function () {
      console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    };

    
    function FourWheeler(make, model, year, wheels) {
      Automobile.call(this, make, model, year);
      this.wheels = wheels;
    }

    
    FourWheeler.prototype = Object.create(Automobile.prototype);

    FourWheeler.prototype.drive = function () {
      console.log(`This ${this.make} ${this.model} is driving on ${this.wheels} wheels.`);
    };

    const car1 = new FourWheeler("Toyota", "Camry", 2023, 4);
    const car2 = new FourWheeler("Honda", "Civic", 2022, 4);

    car1.displayInfo();
    car1.drive();

    car2.displayInfo();
    car2.drive();

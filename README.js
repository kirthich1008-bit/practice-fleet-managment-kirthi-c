class Vehicle{
    constructor(type, make, model, year, mileage = 0){
        this.type = type;
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;

    }
    drive(distance) { 
        if (distance > 0)
        this.mileage += distance;
     
    } 

    getDetails() {
        return `${this.type} from ${this.make} with Model Number ${this.model}, Manufactured in the year ${this.year} has a mileage of ${this.mileage}/km.`
    }
}
 const car = new Vehicle("car", "Honda", 123, 2026);
 const truck = new Vehicle("truck", "GMC", 3456, 2025); 
 const motorcycle = new Vehicle("motorcycle", "Harley", 4567, 2026); 


      car.drive(78);
      truck.drive(89);
      motorcycle.drive(56);

 console.log(car.getDetails());
 console.log(truck.getDetails());
 console.log(motorcycle.getDetails());



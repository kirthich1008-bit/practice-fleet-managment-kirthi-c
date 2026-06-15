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
        return `${this.type}:
         maker: ${this.make} 
         Model: ${this.model}
         Manufactured year: ${this.year} 
         mileage: ${this.mileage}/km.`
    }
}
 let car = new Vehicle("car", "Honda", "civic", 2026);
 let truck = new Vehicle("truck", "GMC", "CrossOvers", 2025); 
 let motorcycle = new Vehicle("motorcycle", "Harley", "X-440", 2026); 


 car.drive(78);
 truck.drive(89);
 motorcycle.drive(56);

 console.log(car.getDetails());
 console.log(truck.getDetails());
 console.log(motorcycle.getDetails());



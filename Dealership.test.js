const Dealership = require('./Dealership');
const Car = require('./Car');

describe('Car', () => {
    
    test('can count number of cars in stock', () => {
        const dealership = new Dealership("James Vehicles", 100)
        expected = 0;
        actual = dealership.countCarsInStock();
        expect(actual).toBe(expected);
    });

    // test('can add a car to the stock', () => {
    //     const dealership = new Dealership("James Vehicles", 100)
    //     const car = new Car("Tesla", 50000, "Electric")
    //     dealership.addCarToStock(car); //adding a 
    //     expected = 1;
    //     actual = dealership.countCarsInStock();
    //     expect(actual).toBe(expected);
    // });
    
    test('can add cars to stock but no more than full capacity', () => {
        const dealership = new Dealership("Cars4U", 3)
        const firstCar = new Car("Alfa Romeo", 60000, "Electric");
        const secondCar = new Car("Land Rover", 72000, "Petrol");
        const thirdCar = new Car("Hyundai", 34000, "Diesel");
        const fourthCar = new Car("Ford", 29000, "Diesel");        
        
        const message1 = dealership.addCarToStock(firstCar);
        const message2 = dealership.addCarToStock(secondCar); 
        const message3  = dealership.addCarToStock(thirdCar);
        const message4  = dealership.addCarToStock(fourthCar);

        expected = ["Car added to stock list.", "Car added to stock list.", "Car added to stock list.", "We cannot take anymore cars."];
        actual = [message1, message2, message3, message4];
        expect(actual).toEqual(expected);
    });

    test('can get car manufacturer list', () => {
        const dealership = new Dealership("James Vehicles", 100);
        const firstCar = new Car("Tesla", 50000, "Electric");
        const secondCar = new Car("Hyundai", 12000, "Petrol");
    
        dealership.addCarToStock(firstCar);
        dealership.addCarToStock(secondCar);
    
        const expected = ["Tesla", "Hyundai"];
        const actual = dealership.getManufacturerList();
        expect(actual).toEqual(expected); // google says 'toEqual' is more appropriate for arrays instead of 'toBe' (something about deep comparison and strict equality, not entirely sure)
      });

      test('can find cars in stock from a given manufacturer', () => {
        const dealership = new Dealership("James Vehicles", 100);
        const firstCar = new Car("Tesla", 50000, "Electric");
        const secondCar = new Car("Hyundai", 12000, "Petrol");
        const thirdCar = new Car("Hyundai", 34000, "Diesel");
        const fourthCar = new Car("Ford", 29000, "Diesel");
    
        dealership.addCarToStock(firstCar);
        dealership.addCarToStock(secondCar);
        dealership.addCarToStock(thirdCar);
        dealership.addCarToStock(fourthCar);
    
        const expected = [secondCar, thirdCar];
        const actual = dealership.findCarsFromManufacturer("Hyundai");
        expect(actual).toEqual(expected);
      });
    
      test('can calculate total value of cars in stock', () => {
        const dealership = new Dealership("James Vehicles", 100);
        const firstCar = new Car("Tesla", 50000, "Electric");
        const secondCar = new Car("Hyundai", 12000, "Petrol");
        const thirdCar = new Car("Hyundai", 34000, "Diesel");
        const fourthCar = new Car("Ford", 29000, "Diesel");
    
        dealership.addCarToStock(firstCar);
        dealership.addCarToStock(secondCar);
        dealership.addCarToStock(thirdCar);
        dealership.addCarToStock(fourthCar);

    
        const expected = 125000;
        const actual = dealership.sumTotalStockValue();
        expect(actual).toBe(expected);
      });


      
});

